const http = require('http');
const data = JSON.stringify({
  name: 'freedom'
});
const options = {
  hostname: 'localhost',
  port: 1234,
  path: '/test',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};
const req = http.request(options, res => {
  console.log(res.statusCode);
  res.on('data', d => {
    console.log(d.toString());   // strick
  });
});
req.write(data);
req.end();