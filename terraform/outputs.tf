output "resource_group_name" {
  value = azurerm_resource_group.rg.name
}

output "container_fqdn" {
  value = azurerm_container_group.aci.fqdn
}
