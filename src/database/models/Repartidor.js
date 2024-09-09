const { DataTypes } = require('sequelize');
const sequelize = require('./../database/dbConnection');
const ubicacion = require('./Ubicacion');

const Repartidor = sequelize.define('Repartidor',
  {
    // Model attributes are defined here
    DNI: {
        type: DataTypes.STRING(13),
        primaryKey: true,
    },
    primerNombre: {
        type: DataTypes.STRING(30),
    },
    segundoNombre: {
        type: DataTypes.STRING(30),
    },
    primerApellido: {
        type: DataTypes.STRING(30),
    },
    segundoApellido: {
        type: DataTypes.STRING(30),
    },
    telefono: {
        type: DataTypes.STRING(8),
    },
    correo: {
        type: DataTypes.STRING(50),
    },
    disponible: {
        type: DataTypes.BOOLEAN,
    },
    habilitado: {
        type: DataTypes.BOOLEAN,
    },
    puntajePromedio: {
        type: DataTypes.DECIMAL(2,1),
    },
  },
  {
    tableName: 'Repartidores',
    timestamps: false,
  },
);

Repartidor.belongsTo(ubicacion, {
    foreignkey: {
        name: 'ID_Ubicacion'
    }
});

module.exports = Repartidor;