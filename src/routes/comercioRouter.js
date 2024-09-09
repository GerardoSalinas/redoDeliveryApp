const { obtenerComercios, obtenerComercio, crearComercio, editarComercio, eliminarComercio } = require('./../services/comercioService.js'); 
const { Router } = require('express')
const comercioRouter = Router();

//todos los comercios
comercioRouter.get("/comercios", obtenerComercios);

//crea un nuevo comercio
comercioRouter.post("/comercio/crear", crearComercio);

//edita un comercio
comercioRouter.put("/comercio/editar/:id",editarComercio);

//elimina un comercio
comercioRouter.delete("/comercio/eliminar/:id", eliminarComercio);

//obtiene un comercio en especifico
comercioRouter.get("/comercio/:id", obtenerComercio);


module.exports = comercioRouter;