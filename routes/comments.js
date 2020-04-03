const express = require('express');

const router = express.Router();

router.use(express.json());

router.get('/posts/:postId/comments', (req, res) => {
  res.status(200).send(req.store.posts[req.params.postId].comments);
});

router.post('/posts/:postId/comments', (req, res) => {
  let commentBody = req.body;
  let commentId = req.store.posts[req.params.postId].comments.length - 1;

  req.store.posts[req.params.postId].comments.push(commentBody);
  res.status(201).send({ id: commentId });
});

router.put('/posts/:postId/comments/:commentId', (req, res) => {
  let postId = req.params.postId;
  let commentId = req.params.commentId;

  req.store.posts[postId].comments[commentId] = req.body;
  res.status(200).send(req.store.posts[postId].comments[commentId]);
});

router.delete('/posts/:postId/comments/:commentId', (req, res) => {
  let postId = req.params.postId;
  let commentId = req.params.commentId;

  store.posts[postId].comments.splice(commentId, 1);
  res.sendStatus(204);
});

module.exports = router;
