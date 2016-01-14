import database from '../database';

const Post = database.Model.extend({
  tableName: 'posts',
  hasTimestamps: true,
});

export default Post;
