
process.on('unhandledRejection', (reason, promise) => {
  console.log(reason);
  // console.log(promise);
});
// 第一种触发方式
Promise.resolve().then((res) => {
  return JSON.pasre(res);   // 注意错别字 pasre
});
// 第二种触发方式
Promise.reject(new Error('资源尚未加载'));