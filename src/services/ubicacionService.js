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
        const nuevaUbicacion = await ubicacion.create({ latitud, longitud, descripcion });
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

//listo
async function editarUbicacion(req,res){
    try {
        const body = req.body;
        const { id }= req.params
        const existence = await ubicacion.findOne({ where: { ID: id } });
        let infoMessage = "la ubicacion que se quiere editar no existe"
        if (existence != null){
            await ubicacion.update({
                id: existence.id,
                latitud: body.latitud,
                longitud: body.longitud,
                descripcion: body.descripcion,
            },
            { where: { ID: id } 
            });
            infoMessage = "ubicacion editada exitosamente";
        }
        res.status(200).json({ message: infoMessage });
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