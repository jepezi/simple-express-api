import createPromiseHandler from '../utils/createPromiseHandler';
import {Post} from '../models';


////////////////////
// Route Handlers //
////////////////////

/**
 * Get all posts
 */
export const getPosts = createPromiseHandler((req, res) => {
  return Post
    .query('orderBy', 'created_at', 'desc')
    .fetchAll({withRelated: ['comments']})
    .then(collection => collection.toJSON())
  // return Post.fetchAll()
  //   .then(posts => posts.toJSON())
});

/**
 * Get post by ID
 */
export const getPost = createPromiseHandler((req, res) => {
  if (!req.params.id) {
    throw new Error('No id supplied.');
  }

  return Post.where('id', req.params.id).fetch({withRelated: ['comments']})
    .then(model => {
      if (!model) {
        throw new Error('Post does not exist.');
      }
      return model.toJSON()
    })
});

/**
 * Update post
 */
export const updatePost = createPromiseHandler((req, res) => {
  if (!req.params.id) {
    throw new Error('No id supplied.');
  }

  return Post.forge({id: req.params.id}).save({
    title: req.body.title,
    body: req.body.body
  })
    .then(model => {
      if (!model) {
        throw new Error('Post does not exist.');
      }
      return model.toJSON()
    })
});

/**
 * Create new post
 */
export const createPost = createPromiseHandler((req, res) => {
  return Post.forge().save({
    title: req.body.title,
    body: req.body.body
  })
    .then(model => {
      if (!model) {
        throw new Error('Cannot create post.');
      }
      return model.toJSON()
    })
});
