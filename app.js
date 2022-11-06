const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors()); //cors is dont allow to send the diferent browser
app.use("/books", router); // localhost:5000/books

mongoose
  .connect("mongodb://localhost:27017/bookStore")
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5300);
  })
  .catch((err) => console.log(err));