const { DataTypes, ForeignKeyConstraintError } = require('sequelize');
const sequelize = require('./../dbConnection');
const Comercio = require('./Comercio');
// const Orden = require('./Orden');
// const Producto_Orden = require('./Producto_Orden');

const Producto = sequelize.define('Producto',
  {
    // Model attributes are defined here
    ID: {
        type: DataTypes.STRING(5),
        primaryKey: true,
    },
    Nombre: {
        type: DataTypes.STRING,
    },
    Descripcion: {
        type: DataTypes.STRING,
    },
    Precio: {
        type: DataTypes.DECIMAL,
    },
    Imagen: {
        type: DataTypes.STRING,
    },
  },
  {
    tableName: 'Productos',
    timestamps: false,
  },
);

// Producto.belongsTo(Comercio, {
//   foreignKey: {
//     name: 'ID',
//     type: DataTypes.STRING(5),
//   }
// });

// Producto.belongsToMany(Orden, { through: Producto_Orden });

module.exports = Producto;