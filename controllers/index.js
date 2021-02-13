const { Book } = require('../db');

const getAllBooks = async (req, res, next) => {
    const books = await Book.findAll()

    if (books.length > 0){
        // books found
        console.log('books found')
        res.status(200).json(books)
    } else {
        // books not found
        res.status(404).send(`no books founds at ${req.originalUrl}`)
    }
}

const getBookById = async () => {

    return Book.find
}
const createBook = async (author, title) => {

    return Book.build({author, title}).save()
}


module.exports = {
    getAllBooks,
    getBookById,
    createBook
}