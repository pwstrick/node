const fs = require('fs');
function errorCallback(err, data) {
// [Error: ENOENT: no such file or directory, open './data.txt'] {
//   errno: -2,
//   code: 'ENOENT',
//   syscall: 'open',
//   path: './data.txt'
// }
  console.log(err);
}
fs.readFile('./data.txt', errorCallback);