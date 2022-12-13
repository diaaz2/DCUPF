const { create } = require("express-handlebars");
const Libros = require("../models/Libros");

exports.GetBibliotecaList = (req,res,next) =>{

Libros.findAll().then(result =>{

    const libros = result.map((result) => result.dataValues);

    console.log(libros);

    res.render("biblioteca/biblioteca",
    {
        pageTitle:"Home", 
        homeActive:true,
        libros: libros,
    });
}).catch((err) => {
    console.log(err);
});
};

