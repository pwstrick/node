const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  const readable = fs.createReadStream(__dirname + '/data.txt')
  readable.pipe(res);
}).listen(1234)

