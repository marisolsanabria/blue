const jwt = require("jsonwebtoken");

module.exports = (req,res,next) => {

try{
  const token= req.headers.authorization.split(" ")[1];
  jwt.verify(token,"Blue_secret_for_logIn");
  next();
}catch (err) {
    res.status(401).json({message: "Autenticación fallida"})
}
};