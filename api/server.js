import express from "express";
import dotenv from "dotenv";
import colors from "colors";
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
// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode ? err.statusCode : 500
//   const message = err.message ? err.message: "Internal server error"

//   res.status(statusCode).json({
//     success: false,
//     statusCode,
//     message
//   })
// }) 