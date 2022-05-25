/**
 * CPU负载
 */
const os = require("os");
const loadavg = os.loadavg();
console.log(loadavg);

/**
 * CPU使用率
 */
function getCPUInfo() {
  const cpus = os.cpus();
  console.log(cpus)
  /**
   * user：CPU在用户模式下花费的毫秒数
   * nice：CPU在良好模式下花费的毫秒数
   * system：CPU在系统模式下花费的毫秒数
   * idle： CPU在空闲模式下花费的毫秒数
   * irq：CPU在中断请求模式下花费的毫秒数
   */
  let user = 0, nice = 0, sys = 0, idle = 0, irq = 0, total = 0;
  // 遍历 CPU
  for (const cpu in cpus) {
    const times = cpus[cpu].times;
    user += times.user;
    nice += times.nice;
    sys += times.sys;
    idle += times.idle;
    irq += times.irq;
  }
  total += user + nice + sys + idle + irq;
  return {
    idle,
    total,
  };
}
const cpu = getCPUInfo();
// CPU 使用率
const usage = (1 - cpu.idle / cpu.total) * 100;
console.log(usage);

