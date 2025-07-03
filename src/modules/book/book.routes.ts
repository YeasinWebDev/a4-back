import { Router } from "express";
import { AllBooks, CreateBook, deleteBook, getSingleBook, updateBook } from "./book.controllers";


export const bookRoute = Router()


bookRoute.post('/create-book', CreateBook)
bookRoute.get('/books', AllBooks)
bookRoute.get('/books/:id', getSingleBook)
bookRoute.put('/edit-book/:id', updateBook)
bookRoute.delete('/:bookId', deleteBook)