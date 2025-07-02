import { Router } from "express";
import { AllBooks, CreateBook, deleteBook, updateBook } from "./book.controllers";


export const bookRoute = Router()


bookRoute.post('/create', CreateBook)
bookRoute.get('/all', AllBooks)
bookRoute.put('/:bookId', updateBook)
bookRoute.delete('/:bookId', deleteBook)