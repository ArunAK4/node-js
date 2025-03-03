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

export default router;
