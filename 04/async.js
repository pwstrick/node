const EventEmitter = require('events');
const demo = new EventEmitter();
demo.on('async', (a, b) => {
  setImmediate(() => {
    console.log(a, b);
  });
});
demo.emit('async', 'a', 'b');