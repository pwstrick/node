// /Users/code/web/node/08/throw.js:2
//   throw 'test error';
//   ^
// test error
// (Use `node --trace-uncaught ...` to show where the exception was thrown)

// /Users/code/web/node/08/throw.js:2
//   throw new Error('test error');
//   ^
// Error: test error
//     at test (/Users/code/web/node/08/throw.js:2:9)
//     at Object.<anonymous> (/Users/code/web/node/08/throw.js:7:1)
//     at Module._compile (node:internal/modules/cjs/loader:1108:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1137:10)
//     at Module.load (node:internal/modules/cjs/loader:988:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:828:14)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:76:12)
//     at node:internal/main/run_main_module:17:47
function test() {
//   throw 'test error';
  throw new Error('test error');
}
// function main() {  
//   setImmediate(() => test());
// }
test();
