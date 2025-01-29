// Express Learning
// Basic Structure of Express
const express = require("express");
const path = require("node:path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3001;

const productRoutes = require("./routes/product");

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// Serving Static files
app.use(express.static(path.resolve("./public")));

// Middleware Concept
// This always runs first
// app.use((req, res, next) => {
//   console.log("Middleware 1 invoked!!!");
//   next();
// });
app.use("/products", productRoutes);
// This is look for a path starting from '/' and ignore only '/users/...' path
// because the /users middleware is on top of that and its listening for that request.
app.get("/", (req, res, next) => {
  res.sendFile(path.resolve("./views/index.html"));
});

// 404 Page
app.use((req, res, next) => {
  res.status(404).sendFile(path.resolve("./views/404.html"));
});

// Start and Listen to app
app.listen(PORT, (error) => {
  if (error) {
    console.log("Error occurred on starting the express app", error);
  } else {
    console.log(`Started app Successfully at http://localhost:${PORT}`);
  }
});
