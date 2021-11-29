const express = require("express");
const app=express();

const productoRoutes= require("./routes/producto");

//import de las routes 

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Configuración de la conexión a la bd

app.use("/api/productos",productoRoutes)

module.exports = app;

