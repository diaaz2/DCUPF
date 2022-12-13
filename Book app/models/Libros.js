const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Libros = sequelize.define("Libros",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    urlimg:{
      type: Sequelize.STRING,
      allowNull: false, 
   },
    titulo:{
       type: Sequelize.STRING,
       allowNull: false, 
    },
    ano:{
        type: Sequelize.STRING,
        allowNull: false, 
     },
     autor:{
        type: Sequelize.STRING,
        allowNull: false, 
     },
     categoria:{
        type: Sequelize.STRING,
        allowNull: false, 
     },
     editorial:{
        type: Sequelize.STRING,
        allowNull: false, 
     }
});

module.exports = Libros;