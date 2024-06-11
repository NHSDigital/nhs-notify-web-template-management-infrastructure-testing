data "aws_ssm_parameter" "amplify_app_id" {
    name  = "/template-management/amplify-app/${var.environment}/amplify-app-id"
}

resource "aws_amplify_branch" "amplify_branch_main" {
  app_id      = data.aws_ssm_parameter.amplify_app_id.value
  branch_name = var.branch_name
  framework   = "Next.js - SSR"
  stage       = local.is_production ? "PRODUCTION" : "DEVELOPMENT"
}

resource "aws_amplify_domain_association" "domain_association" {
  app_id                = data.aws_ssm_parameter.amplify_app_id.value
  domain_name           = "notify.nhs.co.uk"
  wait_for_verification = false

  sub_domain {
    branch_name = aws_amplify_branch.amplify_branch_main.branch_name
    prefix      = aws_amplify_branch.amplify_branch_main.branch_name
  }
}
