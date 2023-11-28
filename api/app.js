// import express from "express";
// import dotenv from "dotenv";
// // import { router } from "./routes/routes";
// import router from "./routes/routes";

// dotenv.config();
// import mongoose from "mongoose";
// import cors from "cors";
// import bodyParser from "body-parser";
// import path from "path";
// const DB_URL = process.env.DB_URL;
// const PORT = process.env.PORT_NUMBER || 5000;
// // import router from "./routes/routes";
// const app = express();
// app.use(cors());
// app.use(bodyParser.json({ extended: false }));
// app.use(router);
// // app.use(express.static(path.join(__dirname, "../FRONTEND")));

// mongoose
//   .connect(DB_URL)
//   .then(() => {
//     console.log("Connected to the database");
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("Error connecting to the database:", err);
//   });
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import Router from "./routes/routes.js"; // Move the import statement here

dotenv.config();

const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT_NUMBER || 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use(Router);

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
