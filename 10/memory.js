// 换算成 MB
function format (bytes) {
  return (bytes / 1024 / 1024).toFixed(2) + 'MB';
};
// 进程的内存使用
const mem = process.memoryUsage();    // 单位 字节
// {
//   rss: '20.05MB',
//   heapTotal: '3.86MB',
//   heapUsed: '3.02MB',
//   external: '0.24MB',
//   arrayBuffers: '0.01MB'
// }
console.log({
  rss: format(mem.rss),
  heapTotal: format(mem.heapTotal),
  heapUsed: format(mem.heapUsed),
  external: format(mem.external),
  arrayBuffers: format(mem.arrayBuffers)
});

const os = require('os');
// 系统的空闲内存
const freemem = os.freemem();
console.log(format(freemem));   // 178.58MB
// 系统所有的内存
const totalmem = os.totalmem();
console.log(format(totalmem));  // 16384.00MB = 16G