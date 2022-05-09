/**
 * GET、POST请求的服务器
 */
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
    // <Buffer 7b 22 6e 61 6d 65 22 3a 22 66 72 65 65 64 6f 6d 22 7d>
    console.log(buf);
  });
  res.end('strick');
})
server.listen(1234);

