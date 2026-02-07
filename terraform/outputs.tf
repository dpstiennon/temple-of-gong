output "website_url" {
  description = "S3 static website URL"
  value       = "http://${aws_s3_bucket_website_configuration.site.website_endpoint}"
}

output "s3_bucket_name" {
  description = "S3 bucket name"
  value       = aws_s3_bucket.site.id
}
