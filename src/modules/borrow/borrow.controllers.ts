import { Request, Response } from "express";
import { Borrow } from "./borrow.Model";
import { Book } from "../book/book.Model";

export const createBorrow = async (req: Request, res: Response) => {
  try {
    const { bookId, quantity } = req.body;
    const book = await Book.findById(bookId);
    if (!book) throw new Error("Book not found");
    const borrow = await Borrow.create(req.body);
    book.copies -= quantity;
    await book.save();
    if (book.copies === 0) {
      Book.updateAvailable(bookId, false);
    }
    res.status(201).json({
      success: true,
      message: "Borrow created successfully",
      data: borrow,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to create borrow",
      error: error.message,
    });
  }
};

export const borrowSummary = async (req: Request, res: Response) => {
  try {
     let data = await Borrow.aggregate([
      {
        $group: {
          _id: "$bookId",
          totalQuantity: { $sum: "$quantity" },
        },
      },
      {
        $lookup: {
          from: "books",
          localField: "_id",
          foreignField: "_id",
          as: "book",
        },
      },
      {
        $project: {
          _id: 0,
          totalQuantity: 1,
          title: { $arrayElemAt: ["$book.title", 0] },
          isbn: { $arrayElemAt: ["$book.isbn", 0] },
        },
      }
     ])

    res.status(200).json({
      success: true,
      message: "Borrow summary fetched successfully",
      data: data,
    });
  } catch (error:any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch borrow summary",
      error: error.message,
    });

  }
}