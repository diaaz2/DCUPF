const { create } = require("express-handlebars");
const Libros = require("../models/Libros");

exports.GetBookList = (req,res,next) =>{

Libros.findAll().then(result =>{

    const libros = result.map((result) => result.dataValues);

    console.log(libros);

    res.render("libros/book-list",
    {
        pageTitle:"Users", 
        homeActive:true,
        libros: libros,
    });
}).catch((err) => {
    console.log(err);
});
};

exports.GetAddLibro = (req,res,next) =>{
    res.render("libros/add-libro",
    {
        pageTitle:"Añadir Libro", 
        homeActive:true, 
        editMode: false
    });
};

exports.PostAddLibro = (req,res,next) =>{
    // const titulo = req.body.titulo;
    // const año = req.body.año;
    // const autor = req.body.autor;
    // const categoria = req.body.categoria;
    // const editorial = req.body.editorial;

    const created_book = Libros.create({...req.body})
    console.log(created_book);
    if(created_book){
        res.redirect("/"); 
    } else {
        console.log(err);
    }

// .then((result) =>{
    
//     res.redirect("/");  
// })

// .catch((err) => {
//     console.log(err);
// });

};


exports.GetEditLibro = async (req,res,next) =>{
    const edit = req.query.edit;
    const libroId = req.params.libroId;

    if(!edit){
        return res.redirect("/");
    }

    
    const found_book = Libros.findOne({where:{id:libroId}})
    console.log(await found_book)
    found_book.then(result =>{

        const libro = result.dataValues;

        if(!libro){
            return res.redirect("/");
        }
        res.render("libros/add-libro",{
            pageTitle:"Edit Libro",
            homeActive:true, 
            editMode: edit,
            libro:libro
        });

    })
    .catch((err) => {
    console.log(err);
    });


};

exports.PostEditLibro = (req,res,next) =>{


    const urlimg = req.body.urlimg;
    const titulo = req.body.titulo;
    const ano = req.body.ano;
    const autor = req.body.autor;
    const categoria = req.body.categoria;
    const editorial = req.body.editorial;
    const libroId = req.body.libroId;

    Libros.update(
        {urlimg:urlimg, titulo:titulo, ano:ano, autor: autor, categoria: categoria, editorial:editorial},
        {where: { id:libroId } } 
        ).then(result=>{
            return res.redirect("/");
        })
        .catch((err) => {
            console.log(err);
            });



    return res.redirect("/");
};

exports.PostDeleteLibro = (req,res,next) =>{

    const LibroId = req.body.libroId;


    Libros.destroy({where:{id:LibroId}});


    return res.redirect("/");
};