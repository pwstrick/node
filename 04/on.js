const EventEmitter = require('events');
const demo = new EventEmitter();
const listener1 = () => {    // 监听函数
  console.log('strick');
};
const listener2 = () => {    // 监听函数
  console.log('freedom');
};
// 注册
demo.on('begin', listener1);
demo.on('begin', listener2);
demo.emit('begin');



EventEmitter.prototype.emit = function emit(type, ...args) {
  const handler = events[type];
  // 若 handler 是函数，则直接运行
  if (typeof handler === 'function') {
    handler.apply(this, args);
  } else {
    const len = handler.length;
    // 数组克隆，防止在 emit 时移除事件对其进行干扰
    const listeners = arrayClone(handler);
    // 遍历数组
    for (let i = 0; i < len; ++i) {
      listeners[i].apply(this, args);
    }
  }
  return true;
};