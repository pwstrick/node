/**
 * 路由
 */
const http = require('http');
const server = http.createServer((req, res) => {
  // 实例化 URL 类
  const url = new URL(req.url, 'http://localhost:1234');
  const { pathname } = url;
  // 简易路由
  if(pathname === '/') {
    res.end('main');
  }else if(pathname === '/test') {
    res.end('test');
  }
});
server.listen(1234);


 
 