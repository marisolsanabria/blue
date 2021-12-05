const bcrypt = require("bcrypt");
const User = require("../models/user");

exports.signup =(req,res) =>{
    bcrypt.hash(req.body.password, 10).then((hash)=>{
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password:hash,
        });

        newUser.save().then((result)=>{
            res.status(201).json({message:"usuario creado con exito"});
        });

    });
};