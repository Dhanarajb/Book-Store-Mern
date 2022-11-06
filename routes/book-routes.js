const express = require("express");
const router = express.Router();
const Book = require("../model/Book");
const booksController = require("../controllers/books-controller");

router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);
router.get("/:id", booksController.getById);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

// router.get('/',async(req,resp)=>{
//     let books;
//     try{
//         books= await Book.find();
//     }catch(error){
//         console.log(error)
//     }
//     if(!books){
//         return resp.status(404).json({message: "no products found"})
//     }
//     return resp.status(200).json({books})
// })

module.exports = router;