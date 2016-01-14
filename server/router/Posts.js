import createPromiseHandler from '../utils/createPromiseHandler';
import {Post} from '../models';


////////////////////
// Route Handlers //
////////////////////

export const getPosts = createPromiseHandler((req, res) => {
  return Post.fetchAll()
    .then(posts => posts.toJSON())
});

export const getPost = createPromiseHandler((req, res) => {
  if (!req.params.id) {
    throw new Error('Post does not exist.');
  }

  return Post.where('id', req.params.id).fetch()
    .then(post => {
      if (!post) {
        throw new Error('Post does not exist.');
      }
      return post.toJSON()
    })
});
