# 📚 Minimal Library Management System - [Backend].(https://a4-back.vercel.app/) | [Frontend](https://a4-front-teal.vercel.app)

This is the **backend** for the Minimal Library Management System built using **Node.js**, **Express**, **TypeScript**, and **MongoDB**. It provides a clean and simple RESTful API for managing books and borrow operations — without authentication, filters, or payment integration.

---

## 🚀 Features

### 1. 📘 Book Management
- **Create Book**  
  `POST /books/create`  
  Create a new book with:
  - Title
  - Author
  - Genre
  - ISBN
  - Description
  - Copies
  - Available (optional, defaults to `true`)

- **Get All Books**  
  `GET /books?page=1`  
  Returns paginated list of books.

- **Get Single Book**  
  `GET /books/:bookId`  
  Returns a single book by ID.

- **Update Book**  
  `PUT /books/:bookId`  
  Updates book data (title, author, genre, etc.).

- **Delete Book**  
  `DELETE /books/:bookId`  
  Deletes a book by ID.

### 2. 📦 Borrow Book
- **Create Borrow Record**  
  `POST /borrows/create`  
  Borrow a book with:
  - `bookId`
  - `quantity` (must not exceed available copies)
  - `dueDate`

  ➤ Updates the book’s available `copies` after borrowing.  
  ➤ If remaining copies = 0 → marks the book as unavailable.

### 3. 📈 Borrow Summary
- **Get Borrow Summary**  
  `GET /borrows/summary`  
  Aggregates borrow records to show:
  - Book Title
  - ISBN
  - Total Quantity Borrowed

---

## 🧩 Tech Stack

| Tech           | Description                     |
|----------------|---------------------------------|
| **Node.js**    | Server runtime                  |
| **Express.js** | Web framework                   |
| **TypeScript** | Strongly typed JavaScript       |
| **MongoDB**    | NoSQL database                  |
| **Mongoose**   | ODM for MongoDB                 |
| **Dotenv**     | Environment variable management |
| **Cors**       | Middleware for CORS             |

---


---

## 🛠️ Getting Started

```bash
# Clone the repository
git clone https://github.com/YeasinWebDev/a4-back.git

# Navigate to the project folder
cd a4-back

# Install dependencies
npm install

# Start the development server
npm run dev
```


## 📧 Contact
If you have any questions or suggestions, feel free to reach out!

* Portfolio : [Yeasin Arafat](https://yeasin-arafat-portfolio.netlify.app)
* LinkedIn: [Yeasin Arafat](https://www.linkedin.com/in/yeasinarafat121)



