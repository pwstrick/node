console.log('b starting');
exports.done = false;
const a = require('./a.js');
console.log('在b模块中, a.done = %j', a.done);
console.log('globalVar: ', globalVar);
exports.done = true;
console.log('b done');