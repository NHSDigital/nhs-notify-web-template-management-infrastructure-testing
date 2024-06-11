locals {
    # We should try to keep all hardcoded environment references in one place so it is easier to see what different environments do differently
    is_production = var.environment == "prod"
}