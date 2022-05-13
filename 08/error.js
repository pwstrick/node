const e = new Error('test error');
// test error
console.log(e.message);
// Error: test error
console.log(e.toString());
// Error: test error
//     at Object.<anonymous> (/Users/pwstrick/code/web/node/08/error.js:1:11)
//     at Module._compile (node:internal/modules/cjs/loader:1108:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1137:10)
//     at Module.load (node:internal/modules/cjs/loader:988:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:828:14)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:76:12)
//     at node:internal/main/run_main_module:17:47
console.log(e.stack);



