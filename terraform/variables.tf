variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "aws_profile" {
  description = "AWS CLI profile to use"
  type        = string
  default     = "temple-of-gong"
}

variable "bucket_name" {
  description = "S3 bucket name (must be globally unique)"
  type        = string
}
