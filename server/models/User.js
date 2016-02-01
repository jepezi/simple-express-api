import database from '../database';

const User = database.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
});

export default User;
