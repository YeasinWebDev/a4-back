import { Types } from "mongoose";

export interface IBorrowBook{
 quantity: number,
 dueDate: Date,
 bookId: Types.ObjectId
}