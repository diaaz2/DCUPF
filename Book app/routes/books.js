const express = require('express');

const router = express.Router();

const BookController = require('../controllers/BookController');

router.get("/",BookController.GetBookList);
router.get("/add-libro",BookController.GetAddLibro);
router.post("/add-libro",BookController.PostAddLibro);
router.get("/edit-libro/:libroId",BookController.GetEditLibro);
router.post("/edit-libro",BookController.PostEditLibro);
router.post("/delete-libro", BookController.PostDeleteLibro);

module.exports = router;