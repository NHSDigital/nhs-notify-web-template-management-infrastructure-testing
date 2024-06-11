resource "aws_ssm_parameter" "amplify_repository_url" {
  name  = "/${var.project}/${var.component}/${var.environment}/amplify-repository-url"
  type  = "SecureString"
  value = "placeholder"

  lifecycle {
    ignore_changes = [value]
  }
}

resource "aws_ssm_parameter" "amplify_repository_access_token" {
  name  = "/${var.project}/${var.component}/${var.environment}/amplify-repository-access-token"
  type  = "SecureString"
  value = "placeholder"

  lifecycle {
    ignore_changes = [value]
  }
}

resource "aws_ssm_parameter" "amplify_repository_username" {
  name  = "/${var.project}/${var.component}/${var.environment}/amplify-repository-username"
  type  = "SecureString"
  value = "placeholder"

  lifecycle {
    ignore_changes = [value]
  }
}

resource "aws_ssm_parameter" "amplify_repository_password" {
  name  = "/${var.project}/${var.component}/${var.environment}/amplify-repository-password"
  type  = "SecureString"
  value = "placeholder"

  lifecycle {
    ignore_changes = [value]
  }
}