const path = require('path');

let result;

// 读取路径的最后一部分
result = path.basename('../06/data.txt')    // data.txt
console.log(result);
// 读取路径的目录部分
result = path.dirname('../06/data.txt');    // ../06
console.log(result);
// 读取路径的文件扩展名
result = path.extname('../06/data.txt');    // .txt
console.log(result);
// 判断是否是绝对路径
result = path.isAbsolute('../06/data.txt');     // false
console.log(result);
// 将多个部分合并成一个完整的路径
result = path.join('../', '06', 'data.txt');    // ../06/data.txt
console.log(result);
// 当包含类似 .、.. 或 // 等相对的说明符时，就尝试计算实际的路径
result = path.normalize('/../06/data.txt');     // /06/data.txt
console.log(result);
// 解析成路径对象
// { root: '', dir: '../06', base: 'data.txt', ext: '.txt', name: 'data' }
result = path.parse('../06/data.txt');
console.log(result);
// 基于当前目录，返回从第一个路径到第二个路径的相对路径
result = path.relative('../', '../06/data.txt');    // 06/data.txt
console.log(result);
// 将相对路径计算成绝对路径
result = path.resolve('../06/data.txt');        // /Users/code/web/node/06/data.txt
console.log(result);