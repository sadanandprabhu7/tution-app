const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const Router = require("./routes/routes");
dotenv.config();

const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT_NUMBER || 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use(Router);
app.use(express.static(path.resolve(__dirname, "../build")));
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Connected to the database");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });
//testing comment
