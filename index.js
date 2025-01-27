// Express Learning
// Basic Structure of Express
const express = require("express");

const app = express();
const PORT = 3001;

// Middleware Concept
// This always runs first
app.use((req, res, next) => {
  console.log("Middleware 1 invoked!!!");
  next();
});

// This will trigger only for /users and all other nested paths
app.use("/products", (req, res, next) => {
  console.log("Product Route Triggered!!!");
  res.send("<h1>Users Page</h1>");
});

// This is look for a path starting from '/' and ignore only '/users/...' path
// because the /users middleware is on top of that and its listening for that request.
app.use("/", (req, res, next) => {
  console.log("Common Route");
  res.send("<h1>Hello Express!!!</h1>");
});

// Start and Listen to app
app.listen(PORT, (error) => {
  if (error) {
    console.log("Error occurred on starting the express app", error);
  } else {
    console.log(`Started app Successfully at http://localhost:${PORT}`);
  }
});
