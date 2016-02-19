
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function (table) {
    table.increments();
    table.integer('user_id').unsigned().defaultTo(0);
    table.string('title').notNullable();
    table.string('slug');
    table.text('body');
    table.string('is_activated').defaultTo(0);
    table.timestamps();
    table.dateTime('deleted_at');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
