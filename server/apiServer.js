import createApp from './utils/createApp';
const apiPort = 9001;
const app = createApp();
app.listen(apiPort, function onAppListening(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('==> 🚧  API server listening on port %s', apiPort);
  }
});
