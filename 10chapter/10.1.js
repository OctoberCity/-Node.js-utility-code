// 创建基本TCP服务器
const net = require("net");
const PORT =8089;
const HOST ="127.0.0.1";
console.log("创建基本TCP服务器");
net.createServer((sock)=>{
	sock.on("data",(data)=>{
		console.log("传输给我的数据buffer",data);
		console.log("传输给我的数据string",data.toString());
		//传输回应消息给客户端
	    sock.write("数据已经接受完毕");
	});
    sock.on("close",(data)=>{
    	console.log("传输关闭");
    });
}).listen(PORT,HOST);