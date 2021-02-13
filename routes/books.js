const express = require('express');
const router = express.Router();

const { Book } = require('../db');
const controllers = require('../controllers')

router.route('/')
    .get(controllers.getAllBooks)

module.exports = router;
