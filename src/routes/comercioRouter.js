const { obtenerComercios, obtenerComercio, crearComercio, editarComercio, eliminarComercio } = require('./../services/comercioService.js'); 
const { Router } = require('express')
const comercioRouter = Router();

//obtiene un comercio en especifico
comercioRouter.get("/obtener/:id", obtenerComercio);

//todos los comercios
comercioRouter.get("/obtener", obtenerComercios);

//crea un nuevo comercio
comercioRouter.post("/crear", crearComercio);

//edita un comercio
comercioRouter.put("/editar/:id",editarComercio);

//elimina un comercio
comercioRouter.delete("/eliminar/:id", eliminarComercio);



module.exports = comercioRouter;