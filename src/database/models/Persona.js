const { DataTypes } = require('sequelize');
const sequelize = require('./../dbConnection');
const Ubicacion = require('./Ubicacion');

const Persona = sequelize.define('Persona',
  {
    // Model attributes are defined here
    DNI: {
        type: DataTypes.STRING(13),
        primaryKey: true,
    },
    primernombre: {
        type: DataTypes.STRING(30),
    },
    segundonombre: {
        type: DataTypes.STRING(30),
    },
    primerapellido: {
        type: DataTypes.STRING(30),
    },
    segundoapellido: {
        type: DataTypes.STRING(30),
    },
    telefono: {
        type: DataTypes.STRING(30),
    },
    correo: {
        type: DataTypes.STRING(30),
    },
  },
  {
    tableName: 'Personas',
    timestamps: false,
  },
);

Persona.belongsTo(Ubicacion, {
    foreignKey: 'ID_Ubicacion'
});


module.exports = Persona;