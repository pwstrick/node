console.log('main starting');
const a = require('./a.js');    // 先导入a模块
const b = require('./b.js');    // 再导入b模块
console.log('在main模块中, a.done = %j, b.done = %j', a.done, b.done);