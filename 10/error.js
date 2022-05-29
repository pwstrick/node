/**
 * 进程奔溃
 */
const test = { };
setTimeout(() => {
  console.log(test.obj.name);
}, 1000);