const express = require('express');

const router = express.Router();

router.use(express.json());

router.get('/posts', (req, res) => {
  res.status(200).send(req.store.posts);
});

router.post('/posts', (req, res) => {
  let postBody = req.body;
  let postId = req.store.posts.length - 1;

  req.store.posts.push(postBody);

  res.status(201).send({ id: postId });
});

router.put('/posts/:postId', (req, res) => {
  req.store.posts[req.params.postId] = req.body;
  res.status(200).send(req.store.posts[req.params.id]);
});

router.delete('/posts/:postId', (req, res) => {
  req.store.posts.splice(req.params.postId, 1);
  res.sendStatus(204);
});

module.exports = router;
