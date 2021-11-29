const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  nombre: { type: String, required: true },
  categoria: { type: String, required: true},
  cantidad: { type: Number},
  precio: { type: Number}
  
});

module.exports = mongoose.model("Producto", postSchema);