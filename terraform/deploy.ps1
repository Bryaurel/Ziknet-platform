Write-Host "=== Ziknet Platform Deployment ==="

# 1. Log in to Azure
Write-Host "Logging into Azure..."
az login

# 2. Set subscription
$subscriptionId = "7e5f73f1-424a-478e-9d14-2028d229d5f0"
Write-Host "Setting subscription to $subscriptionId"
az account set --subscription $subscriptionId

# 3. Ask for ACR credentials
Write-Host "Fetching Azure Container Registry credentials..."
$acrName = "ziknetplatform123"
$acrCreds = az acr credential show --name $acrName --query "{username:username, password:passwords[0].value}" --output json | ConvertFrom-Json

# 4. Set Terraform environment variables
$env:TF_VAR_acr_username = $acrCreds.username
$env:TF_VAR_acr_password = $acrCreds.password
$env:TF_VAR_jwt_secret = "Basketball2.0"
$env:TF_VAR_mongo_uri = "mongodb+srv://bryaurel:Basketball2.0@ziknet-cluster.9fpatqi.mongodb.net/ziknet-db?retryWrites=true&w=majority&appName=Ziknet-Cluster"

Write-Host "Environment variables set for Terraform."

# 5. Initialize Terraform
Write-Host "Initializing Terraform..."
terraform init

# 6. Apply Terraform automatically
Write-Host "Applying Terraform configuration with auto approve..."
terraform apply -auto-approve

Write-Host "=== Deployment Complete ==="
