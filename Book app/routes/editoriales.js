const express = require('express');

const router = express.Router();

const BookController = require('../controllers/BookController');

router.get("/editoriales",BookController.GetBookList);
router.get("/add-editoriales",BookController.GetAddLibro);
router.post("/add-editoriales",BookController.PostAddLibro);
router.get("/edit-editoriales/:libroId",BookController.GetEditLibro);
router.post("/edit-editoriales",BookController.PostEditLibro);
router.post("/delete-editoriales", BookController.PostDeleteLibro);

module.exports = router;