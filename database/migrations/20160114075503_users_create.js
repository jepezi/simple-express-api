
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.integer('is_admin').unsigned().defaultTo(0);
    table.string('email').unique().notNullable();
    table.string('password', 60);
    table.string('first_name');
    table.string('last_name');
    table.string('gender', 20);
    table.string('avatar');
    table.string('locale', 25);
    table.string('age', 20);
    table.string('activation_code');
    table.dateTime('activated_at');
    table.string('remember_token', 100);
    table.timestamps();
    table.dateTime('lastseen_at');
    table.dateTime('deleted_at');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
