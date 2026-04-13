const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(bodyParser.json());

app.use("/users", require("./routes/userRoutes"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});