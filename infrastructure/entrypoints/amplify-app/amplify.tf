resource "aws_amplify_app" "amplify_app" {
  name                   = "${var.project}-${var.environment}"
  repository             = aws_ssm_parameter.amplify_repository_url.value
  access_token           = aws_ssm_parameter.amplify_repository_access_token.value
  enable_basic_auth      = true
  platform               = "WEB_COMPUTE"
  basic_auth_credentials = base64encode("${aws_ssm_parameter.amplify_repository_username.value}:${aws_ssm_parameter.amplify_repository_password.value}")

  auto_branch_creation_config {
    enable_auto_build = true
  }

  enable_auto_branch_creation = true

  enable_branch_auto_deletion = true

  build_spec = file("./amplify.yaml")
}

# Terraform does not currently support data resources for Amplify so we use SSM to make the app ID available to the other component
resource "aws_ssm_parameter" "amplify_app_id" {
  name  = "/${var.project}/${var.component}/${var.environment}/amplify-app-id"
  type  = "String"
  value = aws_amplify_app.amplify_app.id
}