# Simple Express API Server for development

```
npm i
```
## Config

- Edit MySQL setting in `knexfile.js`
- Edit `apiPort` in `server/apiServer.js` (default 9001)

## npm scripts

```bash
# Make migration file
$ npm run make:migrate users_create
# Make seed file
$ npm run make:seed users
# Run latest migration
$ npm run migrate
# Rollback
$ npm run rollback
# Run seed files
$ npm run seed

```

## run server

```
$ npm start
```
