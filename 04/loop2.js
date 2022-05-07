const EventEmitter = require('events');
const demo = new EventEmitter();
const listener = () => {
 console.log('strick');
};
demo.on('loop', () => {
  demo.on('loop', listener);
  listener();
});
demo.emit('loop');  // strick
demo.emit('loop');  // strick strick
