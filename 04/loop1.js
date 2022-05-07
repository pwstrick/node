const EventEmitter = require('events');
const demo = new EventEmitter();
const listener = () => {
  console.log('strick');
};
demo.on('loop', () => {
  demo.emit('loop');
  listener();
});
demo.emit('loop');  // 报错
