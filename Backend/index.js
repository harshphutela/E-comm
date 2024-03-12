const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const dotenv  = require('dotenv')
const JWT = require("jsonwebtoken");
const userAuth = require("./middleWare/userAuth");
const {
  ExtractToken,
  verificationModule,
} = require("./middleWare/ExtractToken");
app.use(bodyParser.json());
app.use(cors());
const SecretKey = "HARSH";
dotenv.config()

app.post("/", userAuth, (req, res) => {
  const token = JWT.sign(req.body, SecretKey);
  //   console.log("Generated Token is", token);
  res.send(token);
});

app.get("/", ExtractToken, verificationModule, (req, res) => {
  //   console.log(req.headers.authorization);
  console.log("Complete Cycle");
});

app.listen(3000,()=>{
  console.log(process.env.JWT_SECRET)
  console.log('Serving on port 3000')
});
