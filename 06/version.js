const fs = require('fs');
// 回调
fs.readFile('./data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('callback', data);    // strick
});

// 同步
const data = fs.readFileSync('./data.txt', 'utf8');
console.log('async', data);    // strick

// Promise
const { promises } = fs;
async function readFilePromise() {
  const data = await promises.readFile('./data.txt', 'utf8');
  console.log('promise', data);    // strick
}
readFilePromise();