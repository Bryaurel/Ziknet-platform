provider "azurerm" {
  features {}
  subscription_id = "7e5f73f1-424a-478e-9d14-2028d229d5f0"
}

resource "azurerm_resource_group" "rg" {
  name     = var.resource_group_name
  location = var.location
}

resource "random_id" "suffix" {
  byte_length = 4
}

resource "azurerm_container_group" "aci" {
  name                = "ziknet-aci"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  os_type             = "Linux"
  ip_address_type     = "Public"
  dns_name_label      = "ziknetapp${random_id.suffix.hex}"

  container {
    name   = "ziknet-container"
    image  = "ziknetplatform123.azurecr.io/ziknet-backend:latest"
    cpu    = var.container_cpu
    memory = var.container_memory

    ports {
      port     = 80
      protocol = "TCP"
    }

    environment_variables = {
      PORT                  = "80"
      JWT_SECRET            = var.jwt_secret
      MONGO_URI             = var.mongo_uri
      AZURE_CONTAINER_NAME  = "ziknet-container" # Detects Azure runtime
    }
  }

  image_registry_credential {
    server   = "ziknetplatform123.azurecr.io"
    username = var.acr_username
    password = var.acr_password
  }

  tags = {
    environment = "production"
  }
}
