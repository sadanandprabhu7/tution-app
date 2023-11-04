const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const body_parser = require("body-parser");
const path = require("path");
const Routes = require("./routes/routes");
const DB_URL = process.env.DB_URL;

const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(cors());
app.use(body_parser.json({ extended: false }));
app.use(Routes);
// app.use(express.static(path.join(__dirname, "../FRONTEND")));
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });
const PORT = process.env.PORT_NUMBER || 5000;
app.listen(PORT, () => {
  console.log(`runnig on port ${PORT}`);
});
