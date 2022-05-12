const str1 = JSON.stringify({ name: 'strick' });
console.log(str1);

function safeCyclesSet() {
  var seen = new Set();
  return function (key, val) {
    // 若 value 不存在或不是对象类型，则返回该值
    if (!val || typeof val !== "object") {
      return val;
    }
    // 若 seen 中包含该值，则返回 [Circular]
    if (seen.has(val)) {
      return "[Circular]";
    }
    seen.add(val);
    return val;
  };
}

function safeCyclesArray() {
  var seen = [];
  return function (key, val) {
    if (!val || typeof val !== "object") {
      return val;
    }
    if (seen.indexOf(val) !== -1) {
      return "[Circular]";
    }
    seen.push(val);
    return val;
  };
}

const man = {
  child: {}
}
man.child = man;
const str2 = JSON.stringify(man, safeCyclesSet());  // {"child":"[Circular]"}
console.log(str2);