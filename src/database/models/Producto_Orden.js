const { DataTypes, ForeignKeyConstraintError } = require('sequelize');
const sequelize = require('./../dbConnection');
const Orden = require('./Orden');
const Producto = require('./Producto');

const Producto_Orden = sequelize.define('Producto_Orden',
  {
    // Model attributes are defined here
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ID_Orden: {
        type: DataTypes.INTEGER,
        references: {
            model: Orden,
            key: 'ID',
        }
    },
    ID_Producto: {
        type: DataTypes.STRING(5),
        references: {
            model: Producto,
            key: 'ID',
        }
    },
  },
  {
    tableName: 'Productos_Ordenes',
    timestamps: false,
  },
);


module.exports = Producto_Orden;