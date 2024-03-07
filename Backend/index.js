const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log(`'/' Get Hitted`);
  res.end();
});

app.listen(3000);
