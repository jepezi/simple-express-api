import express from 'express';
// import * as FacebookConnect from './FacebookConnect';
// import * as Auth from './Auth';
import * as Posts from './Posts';

const router = express.Router();

////////////
// Routes //
////////////

// router.use('/auth/fb/connect', FacebookConnect);
// router.use('/auth/login', Auth.Login);
// router.use('/auth/logout', Auth.Logout);
// router.use('/auth/loadAuth', Auth.decodeTokenFromCookie, Auth.Load);
router.get('/posts', Posts.getPosts);
router.get('/posts/:id', Posts.getPost);

export default router;
