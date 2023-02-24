const cors       = require('cors')
const express    = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD

router.get    ("/clientes",      cors(), controller.readClientes);   // Read All
router.get    ("/clientes/:id",  cors(), controller.readCliente);    // Read
router.delete ("/clientes/:id",  cors(), controller.deleteCliente);  // Delete
router.put    ("/clientes/:id",  cors(), controller.updateCliente);  // Update
router.post   ("/clientes",      cors(), controller.createCliente);  // Create

router.get    ("/coches",     cors(), controller.readCoches);  // Read All
router.get    ("/coches/:id", cors(), controller.readCoche);   // Read
router.delete ("/coches/:id", cors(), controller.deleteCoche); // Delete
router.put    ("/coches/:id", cors(), controller.updateCoche); // Update
router.post   ("/coches",     cors(), controller.createCoche); // Create


module.exports = router;