const mock = require('./mock.json');

exports.seed = function(knex, Promise) {
  var tables = [
    'posts',
    'comments'
  ];

  return Promise.reduce(tables, function (_, table) {
    var records = mock[table];
    return Promise.all(records.map(function (record) {
      return knex(table).insert(record);
    }));
  }, null);
};
