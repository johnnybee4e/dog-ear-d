var express = require("express");
var router = express.Router();
const admin = require("firebase-admin");
const database = admin.database();
const ref = database.ref("books");

router.post("/book", (req, res, next) => {
  const newBook = {
    title: req.body.title,
    author: req.body.author,
    publisher: req.body.publisher,
    pages: req.body.pages
  };
  ref.push(newBook);
  res.json(newBook);
});

module.exports = router;
