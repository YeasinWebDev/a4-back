import mongoose from "mongoose";
import { IBorrowBook } from "./borrow.interface";

const borrowSchema = new mongoose.Schema<IBorrowBook>(
  {
    quantity: Number,
    dueDate: Date,
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
  },
  { timestamps: true }
);

export const Borrow = mongoose.model("Borrow", borrowSchema);
