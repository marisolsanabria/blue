const jwt = require("jsonwebtoken");

module.exports = (req,res,next) => {

try{
  const token= req.headers.authorization.split(" ")[1];
  //el verify es como la decodificación
  const decodedToken= jwt.verify(token,"Blue_secret_for_logIn");
  req.userData={email:decodedToken.email,userId:decodedToken.userId};
  next();
}catch (err) {
    res.status(401).json({message: "Autenticación fallida"})
}
};