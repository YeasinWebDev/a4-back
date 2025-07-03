import { Router } from "express";
import { borrowSummary, createBorrow } from "./borrow.controllers";


export const borrowRoute = Router()

borrowRoute.post('/borrow/:bookId', createBorrow)
borrowRoute.get('/borrow/summary', borrowSummary)