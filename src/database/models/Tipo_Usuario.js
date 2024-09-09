const { DataTypes } = require('sequelize');
const sequelize = require('./../dbConnection');

const Tipo_Usuario = sequelize.define('Tipo_Usuario',
  {
    // Model attributes are defined here
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tipo: {
      type: DataTypes.STRING(30),
    },
  },
  {
    tableName: 'Tipos_Usuarios',
    timestamps: false,
  },
);


module.exports = Tipo_Usuario;
