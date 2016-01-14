import config from '../knexfile';
export const knex = require('knex')(config.development);
export default require('bookshelf')(knex);
