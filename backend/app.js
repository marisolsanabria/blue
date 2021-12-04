const express = require("express");
const cors = new require("cors");
const app=express();
const mongoose=require("mongoose");

const productoRoutes= require("./routes/producto");

//import de las routes 

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// Configuración de la conexión a la bd
mongoose.connect(
    'mongodb+srv://marisolsanabria:Sanabria0000@cluster0.umcah.mongodb.net/blue?retryWrites=true&w=majority'
    ).then(()=>{
        console.log('Base de datos conectada');
    }).catch(()=>{
        console.log('Base de datos NO conectada');
    });


app.use("/api/productos",productoRoutes)

module.exports = app;

