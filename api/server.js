import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors"
import mongoDBConnect from "./Database/db.js";
import authRouter from './routers/auth.routes.js'
import {errorHandler} from "./middlewares/errorHandler.js";
//express configured
const app = express();

//dot env configured
dotenv.config();

// port configured
const SERVER_PORT = process.env.PORT || 9090;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// initialised cors
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//creating path
app.use(express.static('public'))

//use error hander
app.use(errorHandler)


app.listen(SERVER_PORT, () => {
  mongoDBConnect();
  console.log(`Server run on port ${SERVER_PORT}`.bgCyan);
});



// import router from routerjs
app.use('/api/v1/auth', authRouter)

// error handler
// app.use((error, req, res, next) => {
//   const statusCode = error.statusCode ? error.statusCode : 500
//   const message = error.message ? error.message: "Internal server error"

//   res.status(statusCode).json({
//     success: false,
//     statusCode,
//     message
//   })
// }) 