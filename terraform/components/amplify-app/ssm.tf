resource "random_string" "username" {
  length           = 8
}

resource "aws_ssm_parameter" "amplify_repository_username" {
  name  = "/${var.project}/${var.component}/${var.environment}/amplify-repository-username"
  type  = "SecureString"
  value = random_string.username.result

  lifecycle {
    ignore_changes = [value]
  }
}

resource "random_string" "password" {
  length           = 8
}
resource "aws_ssm_parameter" "amplify_repository_password" {
  name  = "/${var.project}/${var.component}/${var.environment}/amplify-repository-password"
  type  = "SecureString"
  value = random_string.password.result

  lifecycle {
    ignore_changes = [value]
  }
}