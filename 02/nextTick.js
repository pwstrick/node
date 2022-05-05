// setTimeout
setTimeout(() => {
  Promise.resolve().then(function() {
    console.log('promise');
  });
  process.nextTick(() => {
    console.log('setTimeout nextTick');
  });
  console.log('setTimeout');
}, 0);
// nextTick
process.nextTick(() => {
  console.log('nextTick');
});
