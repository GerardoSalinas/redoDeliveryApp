const ubicacion = require('./../database/models/Ubicacion');

//listo
async function obtenerUbicaciones(req,res){
    try {
        const ubicaciones = await ubicacion.findAll();
        res.status(200).json(ubicaciones);
    } catch (error) {
        console.log(error);
        res.status(500).json({ errorMessage: 'Internal server error. Please try again later.' });
    }
};

//listo
async function obtenerUbicacion(req,res){
    try {
        const { id } = req.params;
        const ubicacionActual = await ubicacion.findOne({ where: { ID: id } });
        res.status(200).json(ubicacionActual);
    } catch (error) {
        console.log(error);
        res.status(500).json({ errorMessage: error });
    }
};

//listo
async function crearUbicacion(req, res){
    try {
        const { latitud, longitud, descripcion } = req.body;
        const nuevaUbicacion = await ubicacion.create({latitud, longitud, descripcion});
        res.type('application/json');
        res.status(200).json(nuevaUbicacion);
    } catch (error) {
        console.log(error);
        res.status(500).json({ errorMessage: 'Internal server error. Please try again later.' });
    }
};

//listo
async function eliminarUbicacion(req,res){
    try {
        const { id } = req.params;
        const existence = await ubicacion.count({ where: { ID: id } });
        let infoMessage = "la ubicacion no existe";
        if (existence > 0){
            await ubicacion.destroy({ where: { ID: id } });
            infoMessage = "ubicacion eliminada";
        }
        res.status(200).json({ message: infoMessage });
    } catch (error) {
        console.log(error);
        res.status(500).json({ errorMessage: error });
    }
};


async function editarUbicacion(req,res){
    try {
        const body = req.body;
        //falta validacion del body
        const existence = await ubicacion.count({ where: { ID: id } });
        if (existence > 0){
            const ubicacionEditada = await ubicacion.update({
                ID: body.id,
                nombre: body.nombre,
                imagen: body.imagen,
                ubicacion: body.ubicacion,
            },
            { where: { ID: id } 
            });
    
            res.status(200).json({ ubicacion: ubicacionEditada});
        }
        res.status(200).json({ message: "no se pudo editar el registro porque no existe" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ errorMessage: error });
    }
};

module.exports = {
    obtenerUbicaciones,
    obtenerUbicacion,
    crearUbicacion,
    eliminarUbicacion,
    editarUbicacion,
};