const JWT = require("jsonwebtoken");
const UserData = require("../assets/userData");
const SecretKey = "HARSH";

function ExtractToken(req, res, next) {
  const extractedTokenArr = req.headers.authorization.split(" ");
  const extractedToken = extractedTokenArr[1];
  console.log("extracted", extractedToken);
  JWT.verify(extractedToken, SecretKey, (err, decode) => {
    if (err) {
      console.log("Err", err);
    } else {
      console.log("Decoded Values", decode);
      req["token"] = decode;
      next();
    }
  });
}

function verificationModule(req, res, next) {
  const checkToken = UserData.find(
    (UserDetail) =>
      UserDetail.email == req.token.emailSent &&
      UserDetail.password === req.token.passSent
  );
  console.log("Verify-check-token", checkToken);
  {
    if (checkToken) {
      next();
    } else {
      console.log("Authorization error in verification module");
    }
  }
}
module.exports = { ExtractToken, verificationModule };
