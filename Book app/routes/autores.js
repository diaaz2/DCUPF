const express = require('express');

const router = express.Router();

const BookController = require('../controllers/BookController');

router.get("/autores",BookController.GetBookList);
router.get("/add-autores",BookController.GetAddLibro);
router.post("/add-autores",BookController.PostAddLibro);
router.get("/edit-autores/:libroId",BookController.GetEditLibro);
router.post("/edit-autores",BookController.PostEditLibro);
router.post("/delete-autores", BookController.PostDeleteLibro);

module.exports = router;