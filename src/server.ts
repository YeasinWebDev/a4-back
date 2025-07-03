import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { bookRoute } from "./modules/book/book.routes";
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(bookRoute)

app.get("/", (req, res) => {
  res.status(200).send("pong");
});


async function server() {
  try {
    await mongoose.connect(process.env.MONGO_URL || "");
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log("Server is running on port 3000"));
  } catch (error) {
    console.log(error, "Failed to connect to MongoDB");
  }
}

server();
