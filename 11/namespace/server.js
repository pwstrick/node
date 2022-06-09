/**
 * 命名空间
 */
const http = require('http');
const fs = require('fs');
const { Server } = require("socket.io");

// HTTP服务器
const server = http.createServer((req, res) => {
  // 实例化 URL 类
  const url = new URL(req.url, 'http://localhost:1234');
  const { pathname } = url;
  // 路由
  if(pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fs.readFileSync('./index.html'));
  }else if(pathname === '/socket.io.js') {
    res.writeHead(200, { 'Content-Type': 'application/javascript' });
    res.end(fs.readFileSync('../socket.io.js'));
  }
});

// Socket
const io = new Server(server);
io.of("/orders").on('connection', (socket) => {
  // 注册接收消息事件
  socket.on('chat message', (msg) => {
    console.log('orders message: ' + msg);
    socket.emit('chat message', msg);
  });
});
io.of("/users").on('connection', (socket) => {
  // 注册接收消息事件
  socket.on('chat message', (msg) => {
    console.log('users message: ' + msg);
    socket.emit('chat message', msg);
  });
});

// 监控端口
server.listen(1234);