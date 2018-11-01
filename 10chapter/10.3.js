// 另外一种创建TCP服务的方式
const net =require("net");
const HOST = "127.0.0.1";
const PORT = 8089;

//没有和10.1.js中一样用回调函数来处理；
const server=net.createServer();
//监听端口号
server.listen(PORT,HOST);
console.log("本服务监听的服务地址是：",server.address());

//采用显式connection的事件建立连接
server.on("connection",(socket)=>{
	console.log("连接我的是"+socket.remoteAddress+socket.remotePort);
});