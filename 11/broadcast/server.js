/**
 * 广播所有客户端
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
io.on('connection', (socket) => {
  console.log('id', socket.id);
  // socket.broadcast.emit('hi');  // 广播给其他人，除了自己
  console.log('a user connected');
  // 注册断开连接事件
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  // 注册接收消息事件
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    // 触发事件
    io.emit('chat message', msg);
  });
});

// 监控端口
server.listen(1234);