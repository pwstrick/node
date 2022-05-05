setTimeout(() => {
  console.log('timeout')
}, 0);
setImmediate(() => {
  console.log('immediate')
});

const fs = require('fs')
fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('io timeout');
  }, 0)
  setImmediate(() => {
    console.log('io immediate')
  })
});

