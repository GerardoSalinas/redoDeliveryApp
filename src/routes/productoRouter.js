const { Router } = require('express')
const productoRouter = Router();

//todos los productos
productoRouter.get("/productos");

//crea un nuevo producto
productoRouter.post("/producto");

//edita un producto
productoRouter.put("/producto/:id");

//elimina un producto
productoRouter.delete("/producto/:id");

//obtiene un producto en especifico
productoRouter.get("/producto/:id");


module.exports = productoRouter;