import { Router } from "express";
import postsList from "../data/post.js";
const router = Router();

router.get("/", (req, res) => {
  const posts = postsList;
  const { limit } = req.query;

  if (limit) {
    if (!isNaN(limit) && limit > 0) {
      return res.status(302).json({ data: posts.slice(0, limit) });
    } else if (isNaN(limit) || limit <= 0) {
      return res.status(400).json({
        error: { message: "Limit must be a number and greater than 0" },
      });
    }
  }

  res.status(302).json({ data: posts });
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id) || id <= 0) {
    return res.status(404).json({
      error: { message: "Id Params Must be number and greater than 0" },
    });
  }

  const post = postsList.find((post) => post.id === parseInt(id));

  if (!post) {
    return res
      .status(400)
      .json({ error: { message: `Post not found with id ${id}` } });
  }

  res.status(302).json({ data: post });
});

router.post("/", (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      throw new Error();
    }
    postsList.push({
      id: postsList.length + 1,
      title,
      content,
    });
    res.status(201).json({ data: postsList.at(-1) });
  } catch {
    res
      .status(400)
      .json({ error: { message: "Error Occurred while saving data" } });
  }
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;

  if (isNaN(id) || id <= 0) {
    return res.status(404).json({
      error: { message: "Id Params Must be number and greater than 0" },
    });
  }

  if (!title || !content) {
    return res.status(400).json({
      error: { message: "Title and Content are required" },
    });
  }

  const post = postsList.find((post) => post.id === id);
  if (!post) {
    return res
      .status(404)
      .json({ error: { message: `Post not found with id ${id}` } });
  }
  post.title = title;
  post.content = content;
  res.status(200).json({ data: post });
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id) || id <= 0) {
    return res.status(404).json({
      error: { message: "Id Params Must be number and greater than 0" },
    });
  }

  const post = postsList.find((post) => post.id === id);
  if (!post) {
    return res
      .status(404)
      .json({ error: { message: `Post not found with id ${id}` } });
  }

  postsList.splice(postsList.indexOf(post), 1);
  res.status(200).json({ data: post });
});

export default router;
