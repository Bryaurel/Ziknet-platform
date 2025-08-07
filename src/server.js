require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

<<<<<<< HEAD
// Use port 3000 locally, but switch to 80 if running in Azure
const PORT = process.env.PORT || (process.env.AZURE_CONTAINER_NAME ? 80 : 3000);

connectDB(); // Connect to MongoDB before launching the server
=======
const PORT = process.env.PORT || 3000;

connectDB(); // Connexion to MongoDB before launching the server
>>>>>>> b8fcbae96ff9a6006237ec35799f7092920ce0bc

app.listen(PORT, () => {
  console.log(`ZIKNET backend running on port ${PORT}`);
});
