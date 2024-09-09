const { DataTypes } = require('sequelize');
const sequelize = require('./../dbConnection');
const Producto = require('./Producto');
const Producto_Orden = require('./Producto_Orden');

const Orden = sequelize.define('Orden',
  {
    // Model attributes are defined here
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    estado: {
        type: DataTypes.STRING(30),
    },
    fecha_hora: {
        type: DataTypes.DATE,
    },
  },
  {
    tableName: 'Ordenes',
    timestamps: false,
  },
);

Orden.belongsToMany(Producto, { through: Producto_Orden });


module.exports = Orden;