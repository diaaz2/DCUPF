const { create } = require("express-handlebars");
const Categorias = require("../models/Categorias");

exports.GetCategoriasList = (req,res,next) =>{

Categorias.findAll().then(result =>{

    const categorias = result.map((result) => result.dataValues);

    console.log(categorias);

    res.render("categorias/categorias-list",
    {
        pageTitle:"Categorias", 
        homeActive:true,
        categorias: categorias,
    });
}).catch((err) => {
    console.log(err);
});
};

exports.GetAddCategorias = (req,res,next) =>{
    res.render("categorias/add-categorias",
    {
        pageTitle:"Añadir Categorias", 
        homeActive:true, 
        editMode: false
    });
};

exports.PostAddCategorias = (req,res,next) =>{
    // const titulo = req.body.titulo;
    // const año = req.body.año;
    // const autor = req.body.autor;
    // const categoria = req.body.categoria;
    // const editorial = req.body.editorial;

    console.log({...req.body})
    const created_categoria = Categorias.create({...req.body})
    console.log(created_categoria);
    if(created_categoria){
        res.redirect("/categorias"); 
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


exports.GetEditCategorias = async (req,res,next) =>{
    const edit = req.query.edit;
    const categoriasId = req.params.categoriaId;

    if(!edit){
        return res.redirect("/categorias");
    }

    
    const found_categorias = Categorias.findOne({where:{id:categoriasId}})
    console.log(await found_categorias)
    found_book.then(result =>{

        const categorias = result.dataValues;

        if(!categorias){
            return res.redirect("/categorias");
        }
        res.render("categorias/add-categorias",{
            pageTitle:"Edit Categorias",
            homeActive:true, 
            editMode: edit,
            categorias:categorias
        });

    })
    .catch((err) => {
    console.log(err);
    });


};

exports.PostEditCategorias = (req,res,next) =>{

    const titulo = req.body.titulo;
    const descripcion = req.body.descripcion;
    const cantidadlibros = req.body.cantidadlibros;
    const categoriasId = req.body.categoriasId;


    Categorias.update(
        { titulo:titulo, descripcion:descripcion,  cantidadlibros:cantidadlibros},
        {where: { id: categoriasId } } 
        ).then(result=>{
            return res.redirect("/categorias");
        })
        .catch((err) => {
            console.log(err);
            });



    return res.redirect("/categorias");
};

exports.PostDeleteCategorias = (req,res,next) =>{

    const categoriasId = req.body.categoriasId;


    Categorias.destroy({where:{id:categoriasId}});


    return res.redirect("/categorias");
};