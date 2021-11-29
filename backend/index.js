const express = require("express");
const app=express();
const port=3000;

const productos = [
    { 
        referencia: "1a2b3c",
        cantidad: 8,
        precio: 55000
    },
    { 
        referencia: "8g5h6j",
        cantidad: 50,
        precio: 35000
    }
]



app.use(express.json());
app.use(express.urlencoded({extended: false}));

  app.get('/api/productos', function (req, res) {
    res.status(200).json(productos);
  });

  app.post('/api/productos', function (req, res) {
      console.log(req.body);
      productos.push(req.body);
    res.status(201).json("post creado");
  });
  
  
app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
  });

  app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
  });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

  
  

 