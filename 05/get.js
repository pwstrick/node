const http = require('http');
const options = {
  hostname: 'localhost',
  port: 1234,
  path: '/test?name=freedom',
  method: 'GET'
};
const req = http.request(options, res => {
  console.log(res.statusCode);
  res.on('data', d => {
    console.log(d.toString());   // strick
  });
});
req.end();