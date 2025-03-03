import express from "express";
import path from "path";

import postsRouter from "./routes/posts.js";

// Is import Module, common js objects are not defined in ES6
const __dirname = path.resolve();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for static files
app.use(express.static(path.join(__dirname, "public")));

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

app.listen(PORT, () =>
  console.log(`Server is running on port http://localhost:${PORT}`)
);
