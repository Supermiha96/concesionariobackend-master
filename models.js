const mongoose = require('mongoose');

const Cliente = mongoose.model('Cliente',
  new mongoose.Schema({ nombre: String, apellidos: String })
);

const Coche = mongoose.model('Coche',
  new mongoose.Schema({ nombre: String, precio: Number })
);

module.exports = {
  Cliente,
  Coche
};