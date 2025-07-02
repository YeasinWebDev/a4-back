
import mongoose, { Schema, Document, Model } from "mongoose";
import { IBook } from "./book.interface";


const bookSchema = new Schema<IBook>({
    title: String,
    author: String,
    genre:String,
    isbn: String,
    available: Boolean
})


export const Book = mongoose.model("Book", bookSchema);