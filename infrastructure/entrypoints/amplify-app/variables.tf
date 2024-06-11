variable "project" {
  type    = string
  default = "template-management"
}

variable "component" {
  type    = string
  default = "amplify-app"
}

variable "environment" {
  type = string
}

variable "repository" {
  type        = string
  default     = "https://github.com/NHSDigital/template-ui-poc"
}

variable "access_token" {
  type        = string
}