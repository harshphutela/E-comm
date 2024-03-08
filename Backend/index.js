const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const UserData = require("./assets/userData");
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/", (req, res) => {
  console.log("Recieved", req.body);
  const check = UserData.find(
    (UserDetail) =>
      UserDetail.email === req.body.emailSent &&
      UserDetail.password === req.body.passSent
  );
  console.log(check);
  if(check==undefined)
  {
    console.log("Not auth");
  }
  else{
    console.log("Auth")
  }
});

app.listen(3000);
