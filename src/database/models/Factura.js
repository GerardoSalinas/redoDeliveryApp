const { DataTypes } = require('sequelize');
const sequelize = require('./../database/dbConnection');
const Orden = require('./Orden');

const Factura = sequelize.define('Factura',
  {
    // Model attributes are defined here
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Costo_Delivery: {
        type: DataTypes.DECIMAL(6,2),
    }
  },
  {
    tableName: 'Facturas',
    timestamps: false,
  },
);

Factura.belongsTo(Orden, { foreignKey: 'ID_Orden' });

module.exports = Factura;