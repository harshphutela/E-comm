const UserData = require("../assets/userData");
function userAuth(req, res, next) {
  const check = UserData.find(
    (UserDetail) =>
      UserDetail.email === req.body.emailSent &&
      UserDetail.password === req.body.passSent
  );
  console.log(check);
  if (check == undefined) {
    console.log("Not auth");
    res.send("NOT")
  } else {
    console.log("Auth");
    next();
  }
}
module.exports = userAuth;
