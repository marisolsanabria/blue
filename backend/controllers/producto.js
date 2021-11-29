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

exports.getProduct = (req,res) => {
    res.status(200).json(productos);
}

exports.addPostProduct = (req,res) => {
    console.log(req.body);
      productos.push(req.body);
    res.status(201).json("post creado");
}

exports.updatePostProduct = (req,res) => {
    res.send('Got a PUT request at /user');
}

exports.deletePostProduct = (req,res) => {
    res.send('Got a DELETE request at /user');
}



