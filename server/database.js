import config from './config';
export const knex = require('knex')(config.database);
export default require('bookshelf')(knex);
// bookshelf.plugin('registry');
