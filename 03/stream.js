const http = require('http')
const fs = require('fs')

// http.createServer((req, res) => {
//   const readable = fs.createReadStream(__dirname + '/data.txt')
//   readable.pipe(res);
// }).listen(1234)

// http.createServer((req, res) => {
//   const readable = fs.createReadStream(__dirname + '/data.txt')
//   const writable = fs.createWriteStream(__dirname + '/tmp.txt')
//   // Error [ERR_STREAM_CANNOT_PIPE]: Cannot pipe, not readable
//   readable.pipe(writable).pipe(res);
// }).listen(1234)

// http.createServer((req, res) => {
//   const readable = fs.createReadStream(__dirname + '/data.txt')
//   readable.on('data', chunk => {
//     res.write(chunk);
//   });
//   readable.on('end',() => {
//     res.end();
//   })
//   readable.on('error', err => {
//     res.end('File not found');
//   });
// }).listen(1234)

