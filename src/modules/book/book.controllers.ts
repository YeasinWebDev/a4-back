import { Request, Response } from "express";
import { Book } from "./book.Model";

export const CreateBook = async (req: Request, res: Response) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: book,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to create book",
      error: error.message,
    });
  }
};

export const AllBooks = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 6;
    const totalPage = (await Book.countDocuments()) / limit;
    const skip = (page - 1) * limit;
    const books = await Book.find().skip(skip).limit(limit).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      message: "Books fetched successfully",
      data: { books, totalPage: Math.ceil(totalPage) },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch books",
      error: error.message,
    });
  }
};

export const getSingleBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Book fetched successfully",
      data: book,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch book",
      error: error.message,
    });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const { _id, ...updateData } = req.body;
    const book = await Book.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });
    console.log("data", book);

    if(book?.copies === 0){
      Book.updateAvailable(req.params.id, false)
    }else{
      Book.updateAvailable(req.params.id, true)
    }

    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: book,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to update book",
      error: error.message,
    });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.bookId);
    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: book,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to delete book",
      error: error.message,
    });
  }
};
