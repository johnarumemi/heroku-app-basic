const express = require('express');
const router = express.Router();

const { Book } = require('../db');
const controllers = require('../controllers')

router.route('/')
    .get(controllers.getAllBooks)
    .post(controllers.createBook)

router.route('/:id').get(controllers.getBookById)

module.exports = router;
