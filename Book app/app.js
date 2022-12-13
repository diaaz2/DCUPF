const path = require('path');
const express = require('express');
const expressHbs = require("express-handlebars");
const sequelize = require("./util/database");
const libros = require("./models/Libros")
const categorias = require("./models/Categorias")

const errorController = require("./controllers/ErrorController");

const app = express();


app.engine("hbs",expressHbs.engine({
    layoutDir:"views/layouts/",
    defaultLayout:"main-layout",
    extname:"hbs"
}));

app.set("view engine","hbs");
app.set("views","views");

app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,"public")));

const bookRouter = require('./routes/books');
const bibliotecaRouter = require('./routes/biblioteca');
const autoresRouter = require('./routes/autores');
const categoriasRouter = require('./routes/categorias');
const editorialesRouter = require('./routes/editoriales');

app.use(bookRouter);
app.use(bibliotecaRouter);
app.use(autoresRouter);
app.use(categoriasRouter);
app.use(editorialesRouter);

app.use(errorController.Get404);

sequelize.sync().then(result => {
    app.listen(5000);
}).catch(err => {
    console.log(err);
});
