const VError = require('verror');
function test(err) {
  const err3 = new VError(err, 'test()');
  console.log(err3.message);  // test(): main(): test error
  console.log(err3);
}
function main() {  
  setImmediate(() => {
    const err1 = new Error('test error');
    const err2 = new VError(err1, 'main()');
    test(err2);
  });
}
main();

// function test() {
//   throw new Error('test error');
// }
// function main() {  
//   setImmediate(() => {
//     test();
//   });
// }
// main();
