// 服务器端绑定事件
// 获得连接数是多少
//server调用方法，其实是触发了相应的事件
const net  =require("net");
const PORT=8089;
const HOST ="127.0.0.1";
const server =net.createServer();
let connectNumber =0;


//监听listen事件
server.listen(PORT,HOST);
server.on("listening",()=>{
	console.log("监听的端口号是");
	console.info();
}); 

//监听close事件
server.on("close",()=>{
	console.log("服务关闭了");
});

//监听connection事件
server.on("connection",(socket)=>{
	//通过计数器去计算连接数
	++connectNumber;
	// 通过方法去获得连接数
	server.getConnections((err,count)=>{
		if(err){console.log(err.message);}
		console.log("使用getConnections获得的连接数目是",count);
	});
   	console.log("是哪个我连接了？是他"+socket.remoteAddress+socket.remotePort);
   	console.log("当前连接我的人数是：==="+connectNumber);
    server.close();
})

