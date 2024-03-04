import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import mongoDBConnect from "./Database/db.js";

//express configured
const app = express();

//dot env configured
dotenv.config();

// port configured
const SERVER_PORT = process.env.PORT || 9090;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(SERVER_PORT, () => {
  mongoDBConnect();
  console.log(`Server run on port ${SERVER_PORT}`.bgCyan);
});
