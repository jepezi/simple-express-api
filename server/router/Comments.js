import createPromiseHandler from '../utils/createPromiseHandler';
import {Comment} from '../models';


////////////////////
// Route Handlers //
////////////////////

/**
 * Get all comments
 */
export const getComments = createPromiseHandler((req, res) => {
  return Comment
    .query('orderBy', 'created_at', 'desc')
    .fetchAll({withRelated: ['post']})
    .then(collection => collection.toJSON())
  // return Post.fetchAll()
  //   .then(posts => posts.toJSON())
});

/**
 * Get a comment by ID
 */
export const getComment = createPromiseHandler((req, res) => {
  if (!req.params.id) {
    throw new Error('No id supplied.');
  }

  return Comment.where('id', req.params.id).fetch()
    .then(model => {
      if (!model) {
        throw new Error('Comment does not exist.');
      }
      return model.toJSON()
    })
});

/**
 * Create new comment
 */
export const createComment = createPromiseHandler((req, res) => {
  return Comment.forge().save({
    name: req.body.name,
    body: req.body.body
  })
    .then(model => {
      if (!model) {
        throw new Error('Cannot create comment.');
      }
      return model.toJSON()
    })
});
