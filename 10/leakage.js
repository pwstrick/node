/**
 * 内存泄漏
 */
const heapdump = require('heapdump');
// 内存泄漏前的快照
heapdump.writeSnapshot('prev.heapsnapshot');
// 全局缓存
const cached = [];
for(let i = 0; i < 10; i++)
  cached.push(new Array(1000000));
// 内存泄漏后的快照
heapdump.writeSnapshot('next.heapsnapshot');