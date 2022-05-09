/**
 * 搭建最基础的服务器
 */
const http = require('http');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('strick');
})
server.listen(1234);

