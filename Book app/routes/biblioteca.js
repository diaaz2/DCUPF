const express = require('express');

const router = express.Router();

const BibliotecaController = require('../controllers/BibliotecaController');

router.get("/biblioteca",BibliotecaController.GetBibliotecaList);

module.exports = router;