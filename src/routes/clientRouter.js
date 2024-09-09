const { Router } = require('express')
const clientRouter = Router();
const sequelize = require('./../database/dbConnection');
const Tipo_Usuario = require('./../database/models/Tipo_Usuario');

async function testDBConnection (){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.log(`Unable to connect to the database: ${error}`);
    }
}

clientRouter.get("/all", async (req,res) => {
    try {
        const clients = await Tipo_Usuario.findAll();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({error: error.message });
    }
})



module.exports = clientRouter;