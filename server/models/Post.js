import database from '../database';
import Comment from './Comment';

const Post = database.Model.extend({
  tableName: 'posts',
  hasTimestamps: true,
  comments: function() {
    return this.hasMany(Comment);
  },
});

export default Post;
