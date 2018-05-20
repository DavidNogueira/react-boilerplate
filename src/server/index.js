import WebServer from './web.server'
let webServer = new WebServer();
console.log('entrou');
webServer.start()
  .then(() => {
    console.log('Web server started!')
  })
  .catch(err => {
    console.error(err)
    console.error('Failed to start web server')
  });