#!/bin/bash
set -e

# Configuration
AWS_PROFILE="${AWS_PROFILE:-temple-of-gong}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
TERRAFORM_DIR="$PROJECT_DIR/terraform"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}=== Temple of Gong Deploy ===${NC}"
echo

# Check for required tools
for cmd in aws terraform npm; do
    if ! command -v $cmd &> /dev/null; then
        echo -e "${RED}Error: $cmd is not installed${NC}"
        exit 1
    fi
done

# Check AWS credentials
echo "Checking AWS credentials (profile: $AWS_PROFILE)..."
if ! aws sts get-caller-identity --profile "$AWS_PROFILE" &> /dev/null; then
    echo -e "${RED}Error: AWS credentials not configured for profile '$AWS_PROFILE'${NC}"
    echo
    echo "To create the profile, run:"
    echo "  aws configure --profile $AWS_PROFILE"
    exit 1
fi
echo -e "${GREEN}AWS credentials OK${NC}"
echo

# Get Terraform outputs
cd "$TERRAFORM_DIR"
if [ ! -f "terraform.tfstate" ]; then
    echo -e "${RED}Error: Terraform state not found. Run terraform apply first.${NC}"
    echo
    echo "To set up infrastructure:"
    echo "  cd terraform"
    echo "  cp terraform.tfvars.example terraform.tfvars"
    echo "  # Edit terraform.tfvars with your bucket name"
    echo "  terraform init"
    echo "  terraform apply"
    exit 1
fi

BUCKET_NAME=$(terraform output -raw s3_bucket_name)
WEBSITE_URL=$(terraform output -raw website_url)

echo "S3 Bucket: $BUCKET_NAME"
echo

# Build the app
echo -e "${YELLOW}Building app...${NC}"
cd "$PROJECT_DIR"
npm run build
echo -e "${GREEN}Build complete${NC}"
echo

# Sync to S3
echo -e "${YELLOW}Uploading to S3...${NC}"
# Hashed assets get long cache (Vite content-hashes the filenames)
aws s3 sync dist/ "s3://$BUCKET_NAME" \
    --delete \
    --cache-control "max-age=31536000, immutable" \
    --profile "$AWS_PROFILE"
# Re-upload index.html with no-cache so users always get the latest version
aws s3 cp dist/index.html "s3://$BUCKET_NAME/index.html" \
    --cache-control "no-cache" \
    --profile "$AWS_PROFILE"
echo -e "${GREEN}Upload complete${NC}"
echo

echo -e "${GREEN}=== Deploy complete! ===${NC}"
echo
echo -e "Site URL: ${YELLOW}$WEBSITE_URL${NC}"
