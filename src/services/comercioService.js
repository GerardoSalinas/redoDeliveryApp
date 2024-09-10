//falta inclui validacion del body en todos los metodos
const comercio = require('./../database/models/Comercio');
const ubicacion = require('./../database/models/Ubicacion');

//listo
async function obtenerComercios(req,res){
    try {
        const comercios = await comercio.findAll();
        res.status(200).json(comercios);
    } catch (error) {
        res.status(500).json({ errorMessage: error });
    }
};

//listo
async function obtenerComercio(req,res){
    try {
        const { id } = req.params;
        const comercioActual = await comercio.findOne({ where: { ID: id } });
        res.status(200).json(comercioActual);
    } catch (error) {
        res.status(500).json({ errorMessage: error });
    }
};

//listo
async function crearComercio(req, res){
    try {
        const body = req.body;
        //verfica si la ubicacion del comercio ya existe
        let ubicacionActual = await ubicacion.findOne({
            where: {
                Latitud: body.ubicacion.latitud, 
                Longitud: body.ubicacion.longitud 
            }
        });
        if (!ubicacionActual){
            ubicacionActual = await ubicacion.create({ 
                latitud: body.ubicacion.latitud, 
                longitud: body.ubicacion.longitud, 
                descripcion: body.ubicacion.descripcion 
            });
        }

        const nuevoComercio = await comercio.create({
            ID: body.id,
            nombre: body.nombre,
            imagen: body.imagen,
            id_ubicacion: ubicacionActual.ID,
        });
        
        res.status(200).json(nuevoComercio);
    } catch (error) {
        console.log(error);
        res.status(500).json({ errorMessage: error });
    }
};

//listo
async function eliminarComercio(req,res){
    try {
        const { id } = req.params;
        const comercioEliminado = await comercio.destroy({ where: { ID: id } });
        let infoMessage;
        (comercioEliminado === 0) ? infoMessage = "No se eliminaron comercios" : infoMessage = "Comercio eliminado";
        res.status(200).json({ registrosAfectados: comercioEliminado, message: infoMessage });
    } catch (error) {
        res.status(500).json({ errorMessage: error });
    }
};

//listo
async function editarComercio(req,res){
    try {
        const body = req.body;
        const { id } = req.params;
        const comercioExistente = await comercio.findByPk(id);
        if (comercioExistente){
            const idUbicacionActual = comercioExistente.get('id_ubicacion');
            const nuevaUbicacion = await ubicacion.update({
                latitud: body.ubicacion.latitud,
                longitud: body.ubicacion.longitud,
                descripcion: body.ubicacion.descripcion
            },{
                where: {
                    ID: idUbicacionActual
                }
            });
            const nuevoComercio = await comercio.update({
                ID: body.id,
                nombre: body.nombre,
                imagen: body.imagen,
                id_ubicacion: nuevaUbicacion.ID,
            }, 
            { 
                where:{
                    ID: id 
                } 
            });
            let infoMessage;
            (nuevoComercio === 0) ? infoMessage = "No se pudo editar el comercio" : infoMessage = "Comercio editado correctamente";
            res.status(200).json({ registrosAfectados: nuevoComercio, message: infoMessage });
        }
    } catch (error) {
        console.log(error);
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
