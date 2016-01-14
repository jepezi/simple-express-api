import path from 'path';
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.static('public'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Router
  app.use('/api/v1', require('../router'));

  // Catch-all
  app.get('*', function notFoundRoute(req, res, next) {
    var err = new Error('Oops! Not found.');
    err.status = 404;
    next(err);
  });

  // Error handlers
  app.use(function errorLogger(err, req, res, next) {
    const status = err.status ? err.status : 500;

    if (status >= 400) {
        console.error('Request headers:');
        console.error(JSON.stringify(req.headers));
        console.error('Request parameters:');
        console.error(JSON.stringify(req.params));
    }

    if (process.env.NODE_ENV === 'test' && status >= 500 ||
        process.env.NODE_ENV !== 'production'
    ) {
        console.log(err.stack);
    }

    next(err);
  });

  app.use(function errorResponder(err, req, res, next) {
    const status = err.status ? err.status : 500;
    const httpMessage = http.STATUS_CODES[status];

    // const message = status < 500 ? httpMessage + ': ' + err.message : httpMessage;
    const message = err.message;

    let response = {message: message};
    if (err.data) {
      response.errors = err.data;
    }

    res.status(status);
    res.send(response);
  });

  return app;
}

export default createApp
