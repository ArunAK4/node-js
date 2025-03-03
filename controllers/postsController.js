import postsList from "../data/post.js";

export const getPosts = (req, res, next) => {
  const posts = postsList;
  const { limit } = req.query;

  if (limit) {
    if (!isNaN(limit) && limit > 0) {
      return res.status(302).json({ data: posts.slice(0, limit) });
    } else if (isNaN(limit) || limit <= 0) {
      const error = new Error("Limit must be a number and greater than 0");
      return next(error);
    }
  }

  res.status(302).json({ data: posts });
};

export const getPostById = (req, res, next) => {
  const id = parseInt(req.params.id);

  if (isNaN(id) || id <= 0) {
    const error = new Error("Id Params Must be number and greater than 0");
    return next(error);
  }

  const post = postsList.find((post) => post.id === parseInt(id));

  if (!post) {
    const error = new Error(`Post not found with id ${id}`);
    return next(error);
  }

  res.status(302).json({ data: post });
};

export const createPost = (req, res, next) => {
  const { title, content } = req.body;
  if (!title || !content) {
    const error = new Error("Error Occurred: Title and Content are required");
    return next(error);
  }

  postsList.push({
    id: postsList.length + 1,
    title,
    content,
  });
  res.status(201).json({ data: postsList.at(-1) });
};

export const updatePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;

  if (isNaN(id) || id <= 0) {
    const error = new Error("Id Params Must be number and greater than 0");
    return next(error);
  }

  if (!title || !content) {
    const error = new Error("Error Occurred: Title and Content are required");
    return next(error);
  }

  const post = postsList.find((post) => post.id === id);
  if (!post) {
    const error = new Error(`Post not found with id ${id}`);
    return next(error);
  }
  post.title = title;
  post.content = content;
  res.status(200).json({ data: post });
};

export const deletePost = (req, res, next) => {
  const id = parseInt(req.params.id);

  if (isNaN(id) || id <= 0) {
    const error = new Error("Id Params Must be number and greater than 0");
    return next(error);
  }

  const post = postsList.find((post) => post.id === id);
  if (!post) {
    const error = new Error(`Post not found with id ${id}`);
    return next(error);
  }

  postsList.splice(postsList.indexOf(post), 1);
  res.status(200).json({ data: post });
};
