const express = require('express');

const router = express.Router();

const CategoriasController = require('../controllers/CategoriasController');

router.get("/categorias",CategoriasController.GetCategoriasList);
router.get("/add-categorias",CategoriasController.GetAddCategorias);
router.post("/add-categorias",CategoriasController.PostAddCategorias);
router.get("/edit-categorias/:categoriasId",CategoriasController.GetEditCategorias);
router.post("/edit-categorias",CategoriasController.PostEditCategorias);
router.post("/delete-categorias", CategoriasController.PostDeleteCategorias);

module.exports = router;