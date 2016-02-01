import express from 'express';
// import * as FacebookConnect from './FacebookConnect';
import * as Auth from './Auth';
import * as Posts from './Posts';
import * as Comments from './Comments';

const router = express.Router();

////////////
// Routes //
////////////

// Login
router.post('/login', Auth.postLogin);

// Posts
router.get('/posts', Posts.getPosts);
router.post('/posts', Posts.createPost);
router.get('/posts/:id', Posts.getPost);
router.post('/posts/:id', Posts.updatePost);

// Comments
router.get('/comments', Comments.getComments);
router.get('/comments/:id', Comments.getComment);

export default router;
