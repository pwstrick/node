// 同步代码
function try1() {
  try{
    func();
  }catch(e) {
    console.log(e);
    console.log('try-catch end');
  }
}
// async/await
async function test() {
  func();
}
async function try2() {
  try{
    await test();
  }catch(e) {
    console.log(e);
    console.log('async try-catch end');
  }
}
// async function try3() {
//   try{
//     process.nextTick(function () {
//       func();
//     });
//   }catch(e) {
//     // console.log(e);
//     console.log('nextTick try-catch end');
//   }
// }
try1();
try2();
// try3();