const express = require('express');

const router = express.Router();

const postsRoutes = require('./posts');
const commentsRoutes = require('./comments');
router.use(postsRoutes);
router.use(commentsRoutes);

module.exports = router;
