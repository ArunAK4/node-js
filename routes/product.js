const express = require("express");
const path = require("node:path");

const router = express.Router();
// Get and other HTTP methods looks for exact match other than routes
router.get("/", (req, res, next) => {
  res.sendFile(path.resolve("./views/products/index.html"));
});

router.get("/new", (req, res, next) => {
  res.sendFile(path.resolve("./views/products/new.html"));
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  res.redirect("/products");
});

module.exports = router;
