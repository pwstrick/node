console.log('a starting');
exports.done = false;
globalVar = '全局变量'; // 在a模块中声明的全局变量
const b = require('./b.js');
console.log('在a模块中, b.done = %j', b.done);
exports.done = true;
console.log('a done');