/**
 * v8-profiler-next
 */
const fs = require('fs');
const v8Profiler = require('v8-profiler-next');
const title = 'test';
// 兼容 vscode 中的 cpuprofile 解析
v8Profiler.setGenerateType(1);
v8Profiler.startProfiling(title, true);
// 1分钟后运行
setTimeout(() => {
  const profile = v8Profiler.stopProfiling(title);
  // 导出CPU分析文件
  profile.export(function (error, result) {
    fs.writeFileSync(`${title}.cpuprofile`, result);
    profile.delete();
  });
}, 60 * 1000);

/**
 * 加密计算
 */
const crypto = require('crypto');
const password = 'test'
const salt = crypto.randomBytes(128).toString('base64')
crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex')
