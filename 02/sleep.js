// 同步函数，循环空转，浪费CPU性能
function sleep1(ms) {
  var start = Date.now(), expire = start + ms;
  while (Date.now() < expire);
}
// 异步函数，Promise + setTimeout
function sleep2(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// 返回一个 Promise 对象的定时器
function sleep3(ms) {
  const { promisify } = require('util');
  return promisify(setTimeout)(ms);
}
// Node.js >= 15，返回一个 Promise 对象的定时器
function sleep4(ms) {
  const { setTimeout } = require('timers/promises');
  return setTimeout(ms);
}
// 同步函数，阻塞事件循环，直至线程超时
function sleep5(ms) {
  const sharedBuf = new SharedArrayBuffer(4);
  const sharedArr = new Int32Array(sharedBuf);
  return Atomics.wait(sharedArr, 0, 0, ms);
}
async function main() {
  console.log(1);
  sleep1(1000);
  console.log(2);
  await sleep2(1000);
  console.log(3);
  await sleep3(1000);
  console.log(4);
  await sleep4(1000);
  console.log(5);
  await sleep5(1000);
  console.log(6);
}

main();
