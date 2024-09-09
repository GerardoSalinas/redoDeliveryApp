const { DataTypes } = require('sequelize');
const sequelize = require('./../dbConnection');
const Persona = require('./Persona')
const Tipo_Usuario = require('./Tipo_Usuario')

const Usuario = sequelize.define('Usuario',
  {
    // Model attributes are defined here
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Nombre: {
        type: DataTypes.STRING(30),
    },
    Contrasenia: {
        type: DataTypes.STRING,
    },
  },
  {
    tableName: 'Usuarios',
    timestamps: false,
  },
);

Usuario.belongsTo(Persona, { foreignKey: 'ID_Persona' });
// Usuario.belongsTo(Persona);
Usuario.belongsTo(Tipo_Usuario, { foreignKey: 'ID_tipo_usuario' });
// Usuario.belongsTo(Tipo_Usuario);

module.exports = Usuario;