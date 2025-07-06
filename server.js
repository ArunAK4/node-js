import express from "express";
import path from "path";
import bodyParser from "body-parser";

import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";

import postsRouter from "./routes/posts.js";

// Is import Module, common js objects are not defined in ES6
const __dirname = path.resolve();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for static files
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Logger Middleware
app.use(logger);

app.get("/", (req, res) => {
  //   res.json({ data: { message: "Hello World!!!" } });
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Routes Middleware
app.use("/api/posts", postsRouter);

// Error handler route
app.use((req, res, next) => {
  res.status(404).json({ error: { message: "Not Found" } });
});
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Server is running on port http://localhost:${PORT}`)
);
