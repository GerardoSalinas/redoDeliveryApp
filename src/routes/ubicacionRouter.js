const { obtenerUbicaciones, obtenerUbicacion, crearUbicacion, editarUbicacion, eliminarUbicacion } = require('./../services/ubicacionService.js'); 
const { Router } = require('express');
const { body, validationResult } = require("express-validator");
const ubicacionRouter = Router();

//obtiene un ubicacion en especifico
ubicacionRouter.get("/obtener/:id", obtenerUbicacion);

//todos los ubicacions
ubicacionRouter.get("/obtener", obtenerUbicaciones);

//crea un nuevo ubicacion
ubicacionRouter.post("/crear", crearUbicacion);

//edita un ubicacion
ubicacionRouter.put("/editar/:id", editarUbicacion);

//elimina un ubicacion
ubicacionRouter.delete("/eliminar/:id", eliminarUbicacion);


module.exports = ubicacionRouter;