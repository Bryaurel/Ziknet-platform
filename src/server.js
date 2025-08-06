require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

// Use port 3000 locally, but switch to 80 if running in Azure
const PORT = process.env.PORT || (process.env.AZURE_CONTAINER_NAME ? 80 : 3000);

connectDB(); // Connect to MongoDB before launching the server

app.listen(PORT, () => {
  console.log(`ZIKNET backend running on port ${PORT}`);
});
