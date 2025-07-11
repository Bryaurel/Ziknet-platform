const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 3000;

connectDB(); // Connexion to MongoDB before launching the server

app.listen(PORT, () => {
  console.log(`ZIKNET backend running on port ${PORT}`);
});
