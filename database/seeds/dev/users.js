var bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({
      id: 1,
      is_admin: 1,
      email: 'aaa@aaa.com',
      password: bcrypt.hashSync('111', 8),
      first_name: 'First',
      last_name: 'Last',
    })
  );
};
