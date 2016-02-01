import database from '../database';
import Post from './Post';

const Comment = database.Model.extend({
  tableName: 'comments',
  hasTimestamps: true,
  post: function() {
    return this.belongsTo(Post);
  },
});

export default Comment;
