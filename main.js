
// 导入内置模块
const http = require('http')
const path = require('path')
const fs = require('fs')
// 读取的地址
const filePath = path.join(__dirname, 'data.json')
// 创建服务
const serxer = http.createServer((req, res) => {
    // 判断访问地址及访问方式 req.method是请求方式
  if (req.url === '/someword' && req.method=== 'GET') {
      fs.readFile(filePath, 'utf8', (err, data) => {
          // json是一个字符串需要先转换成数组
          let arr = JSON.parse(data)
          // 设置响应头
          res.setHeader('content-type', 'application/json;charset=utf-8')
          // 转换成字符串 返回结果
          res.end(JSON.stringify(arr[parseInt(10*Math.random())]))
      }) 
    } 
});
// 设置端口号
serxer.listen(8089, () => {
  console.log(8089);
});
 
// 通过终端输入 ipconfig 查看IP地址
 
// 常见错误 端口占用 通过`netstat -a -n -o` 命令查看端口占用情况