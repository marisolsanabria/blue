const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt= require("jsonwebtoken");

exports.signup =(req,res) =>{
    bcrypt.hash(req.body.password, 10).then((hash)=>{
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password:hash,
        });

        newUser.save().then((result)=>{
            res.status(201).json({message:"usuario creado con exito"});
        }).catch((error)=>{
            res.status(500).json({error: error});
        });

    });
};

exports.login= (req, res) => {

    let userGet;
    //buscar que el correo exista en la base de datos 
    User.findOne({email:req.body.email}).then((user) => {
        console.log(user);
        if(!user){
            return res.status(401).json({message:"Autenticación fallida"})
        }
        userGet=user;

        //ahora vamos a comparar las contraseñas
       
        return bcrypt.compare(req.body.password,user.password);
    }).then((result) => {
       if(!result){
           return res.status(401).json({message:"Autenticación falllda"})
       }
       //res.status(200).json({message:"Autenticación exitosa"});

       //calculamnos el token para verficar el que llega, para instalamos el npm i jsonwebtoken

       const token = jwt.sign({email: userGet.email, userId:userGet.id}, "Blue_secret_for_logIn",{expiresIn: "1hr"});
       console.log({token});
       res.status(200).json({ token:token });
       }).catch((err)=>{
           return res.status(401).jason({message:"Autenticación fallida"})
       });
};