const { Book } = require('../db');
const faker = require('faker');

const getAllBooks = async (req, res, next) => {
    const books = await Book.findAll()

    if (books !== null && books.length > 0){
        // books found
        console.log('books found')
        res.status(200).json(books)
    } else {
        // books not found
        res.status(404).send(`no books founds at ${req.originalUrl}`)
    }
}

const getBookById = async (req, res, next) => {

    const id = Number(req.params.id);

    const book = await Book.findByPk(id)

    if (book){
        res.status(200).json(book)
    } else {
        res.status(404).send(`resource for ${req.originalUrl} not found`)
    }

}

const createBook = async (req, res, next) => {

    const { author, title } = req.body;


    // Creates and saves book to database
    const book = await Book.create({
        author: `${faker.name.firstName()} ${faker.name.lastName()}`,
        title: faker.random.words(5),
        createdAt: new Date(),
        updatedAt: new Date()
    });

    res.json(book.toJSON())
    //console.log(book.toJSON())

}


module.exports = {
    getAllBooks,
    getBookById,
    createBook
}