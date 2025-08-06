variable "resource_group_name" {
  description = "Name of the resource group"
  type        = string
}

variable "location" {
  description = "Azure region"
  type        = string
}

variable "container_cpu" {
  description = "CPU cores for the container"
  type        = number
  default     = 1
}

variable "container_memory" {
  description = "Memory in GB for the container"
  type        = number
  default     = 1.5
}

variable "acr_username" {
  description = "Azure Container Registry username"
  type        = string
  sensitive   = true
}

variable "acr_password" {
  description = "Azure Container Registry password"
  type        = string
  sensitive   = true
}

variable "jwt_secret" {
  description = "JWT secret for authentication"
  type        = string
  sensitive   = true
}

variable "mongo_uri" {
  description = "MongoDB connection string"
  type        = string
  sensitive   = true
}
