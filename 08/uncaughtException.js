// ReferenceError: func is not defined
//     at /Users/code/web/node/08/uncaughtException.js:7:5
//     at processTicksAndRejections (node:internal/process/task_queues:78:11)
process.on('uncaughtException', (err) => {
  console.log(err);
});

try{
  process.nextTick(function () {
    func();
  });
}catch(e) {
  console.log('nextTick end');
}

setTimeout(() => {
  console.log('setTimeout end');
}, 500);