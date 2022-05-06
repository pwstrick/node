let buf = Buffer.from('strick')
console.log(buf[0]);    // 115
console.log(buf[1]);    // 116
console.log(buf);   // <Buffer 73 74 72 69 63 6b>

buf = Buffer.from('strick平')
console.log(buf);   // <Buffer 73 74 72 69 63 6b e5 b9 b3>
console.log(buf.toString());    // strick平

