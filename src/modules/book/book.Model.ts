import mongoose, { Schema, Model } from "mongoose";
import { IBook } from "./book.interface";
interface UpdateAvailable extends Model<IBook> {
  updateAvailable(bookId: string, available: boolean): Promise<IBook>;
}
const bookSchema = new Schema<IBook, UpdateAvailable>(
  {
    title: String,
    description: String,
    author: String,
    genre: String,
    isbn: String,
    copies: Number,
    available: Boolean,
  },
  { timestamps: true }
);

bookSchema.statics.updateAvailable = async function (bookId, available) {
  await this.findByIdAndUpdate(bookId, { available });
};

export const Book = mongoose.model<IBook, UpdateAvailable>("Book", bookSchema);
