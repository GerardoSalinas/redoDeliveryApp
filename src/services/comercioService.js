//falta inclui validacion del body en todos los metodos
const comercio = require('./../database/models/Comercio');

async function obtenerComercios(req,res){
    try {
        const comercios = await comercio.findAll();
        res.status(200).json({ comercios: comercios});
    } catch (error) {
        res.status(500).json({ errorMessage: error });
    }
};


async function obtenerComercio(req,res){
    try {
        const { id } = req.params;
        const comercio = await comercio.findOne({ where: { ID: id } });
        res.status(200).json({ comercio: comercio});
    } catch (error) {
        res.status(500).json({ errorMessage: error });
    }
};

async function crearComercio(req, res){
    try {
        const body = req.body;
        const nuevoComercio = await comercio.create({
            ID: body.id,
            nombre: body.nombre,
            imagen: body.imagen,
            ubicacion: body.ubicacion,
        });
        res.status(200).json({ nuevoComercio: nuevoComercio});
    } catch (error) {
        res.status(500).json({ errorMessage: error });
    }
};


async function eliminarComercio(req,res){
    try {
        const { id } = req.params;
        const comercio = await comercio.destroy({ where: { ID: id } });
        res.status(200).json({ comercios: comercio, message: "Comercio eliminado" });
    } catch (error) {
        res.status(500).json({ errorMessage: error });
    }
};


async function editarComercio(req,res){
    try {
        const body = req.body;
        //falta validacion del body
        const comercio = await comercio.update({
            ID: body.id,
            nombre: body.nombre,
            imagen: body.imagen,
            ubicacion: body.ubicacion,
        },
        { where: { ID: id } 
        });

        res.status(200).json({ comercios: comercio});
    } catch (error) {
        res.status(500).json({ errorMessage: error });
    }
};

module.exports = {
    obtenerComercios,
    obtenerComercio,
    crearComercio,
    eliminarComercio,
    editarComercio,
};
