const EventEmitter = require('events');
const demo = new EventEmitter();
demo.on('error', err => {
  console.error(err);
});
demo.emit('error', new Error('error'));
console.log('strick');