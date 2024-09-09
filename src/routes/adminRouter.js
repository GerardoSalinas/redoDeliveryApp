const { Router } = require('express')
const adminRouter = Router();


adminRouter.get("/all", (req,res) => {
    res.status(200).json({message: 'Prueba de router de admin'});
})

module.exports = adminRouter;