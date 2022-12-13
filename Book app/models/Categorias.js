const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Categorias = sequelize.define("Categorias",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    titulo:{
       type: Sequelize.STRING,
       allowNull: false, 
    },
    descripcion:{
        type: Sequelize.STRING,
        allowNull: false, 
     },
     cantidadlibros:{
        type: Sequelize.STRING,
        allowNull: false, 
     }
});

module.exports = Categorias;