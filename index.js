var http = require('https');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World Of me!');
}).listen(8080);
