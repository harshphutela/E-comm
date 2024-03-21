const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const JWT = require("jsonwebtoken");

const userAuth = require("./middleWare/userAuth");
const {
  ExtractToken,
  verificationModule,
} = require("./middleWare/ExtractToken");

const { Products } = require("./src/Products");
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));
const SecretKey = "HARSH";
// dotenv.config()

app.post("/", userAuth, (req, res) => {
  const token = JWT.sign(req.body, SecretKey);
  //   console.log("Generated Token is", token);
  res.send(token);
});

app.get("/", ExtractToken, verificationModule, (req, res) => {
  //   console.log(req.headers.authorization);
  console.log("Complete Cycle");
});

app.get("/products", (req, res) => {
  res.send(Products);
});

app.get("/products/p", (req, res) => {
  console.log(req.headers.product_id);
  const answer = Products.filter((item) => item.Id === req.headers.product_id);
  console.log("ans", answer);
  res.json(answer);
});

app.listen(3000);
//   console.log(process.env.JWT_SECRET)
//   console.log('Serving on port 3000')
// });
