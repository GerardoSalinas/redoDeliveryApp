const { DataTypes } = require('sequelize');
const sequelize = require('./../dbConnection');

const Ubicacion = sequelize.define('Ubicacion',
  {
    // Model attributes are defined here
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    latitud: {
        type: DataTypes.DECIMAL(18,15),
    },
    longitud: {
        type: DataTypes.DECIMAL(18,15),
    },
    descripcion: {
        type: DataTypes.STRING,
    },
  },
  {
    tableName: 'Ubicaciones',
    timestamps: false,
  },
);

module.exports = Ubicacion;