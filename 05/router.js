const http = require('http');
const getRawBody = require('raw-body');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  console.log(req.url);          // /test?name=freedom
  req.on('data', d => {
    console.log(d.toString());   // {"name":"freedom"}
  });
  getRawBody(req).then(function (buf) {
    console.log(buf);
  });
  res.end('strick');
})
server.listen(1234);

