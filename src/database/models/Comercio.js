const { DataTypes } = require('sequelize');
const sequelize = require('./../dbConnection');
const ubicacion = require('./Ubicacion');
const Producto = require('./Producto');
const Ubicacion = require('./Ubicacion');

const Comercio = sequelize.define('Comercio',
  {
    // Model attributes are defined here
    ID: {
        type: DataTypes.STRING(5),
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING(30),
    },
    imagen: {
        type: DataTypes.STRING,
    },
    id_ubicacion: {
      type: DataTypes.INTEGER,
      references: {
        model: Ubicacion,
        key: 'ID'
      }
    },
  },
  {
    tableName: 'Comercios',
    timestamps: false,
  },
);

// Comercio.belongsTo(ubicacion, {
//     foreignKey: {
//         name: 'ID_Ubicacion'
//     }
// });

Comercio.hasMany(Producto, {
  foreignKey: {
    name: 'ID',
    type: DataTypes.STRING(5),
  }
});



module.exports = Comercio;