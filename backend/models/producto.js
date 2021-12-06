const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  nombre: { type: String, required: true },
  categoria: { type: String, required: true},
  cantidad: { type: Number, required: true},
  precio: { type: Number, required: true},
  author:{type: mongoose.Schema.Types.ObjectId,ref:"User",required: true},
  
});

module.exports = mongoose.model("Producto", postSchema);
