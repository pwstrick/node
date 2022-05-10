const fs = require('fs');

// exists
fs.exists('./data.txt', isExist => {
  console.log(isExist);
});

fs.stat('./data.txt', (err, stats) => {
  console.log(stats.isDirectory());
  console.log(stats.isFile());
});