const EventEmitter = require('events');
const demo = new EventEmitter();
const listener = () => {    // 监听函数
  console.log('strick');
};
// 注册
demo.on('begin', listener);
demo.emit('begin');

// 移除
demo.off('begin', listener);
demo.emit('begin');