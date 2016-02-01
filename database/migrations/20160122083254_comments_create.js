
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function (table) {
    table.increments();
    table.integer('post_id').unsigned().defaultTo(0);
    table.string('name').notNullable();
    table.string('body');
    table.string('is_activated').defaultTo(0);
    table.timestamps();
    table.dateTime('deleted_at');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
