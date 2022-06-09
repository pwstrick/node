/**
 * 适配器
 */
const http = require('http');
const fs = require('fs');
const { Server } = require("socket.io");
const { createAdapter } = require("@socket.io/redis-adapter");
const { Cluster } = require("ioredis");

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
const pubClient = new Cluster([
  {
    host: "127.0.0.1",
    port: 6379,
  }
]);
const subClient = pubClient.duplicate();
io.adapter(createAdapter(pubClient, subClient));
io.of("/orders").on('connection', (socket) => {
  socket.join("one room");
  // 注册接收消息事件
  socket.on('chat message', (msg) => {
    console.log('orders message: ' + msg);
    socket.to("one room").emit('chat message', msg);
  });
});

// 监控端口
server.listen(1234);