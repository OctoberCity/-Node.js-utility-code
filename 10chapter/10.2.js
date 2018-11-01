// 创建TCP客户端
const net =require("net");
const PORT =8089;
const HOST ="127.0.0.1";
//创建连接
const client=net.connect(PORT,HOST,(err)=>{
	if(err){
		console.log("连接失败哎");
	}
	console.log("创建客户端连接");
	//发送消息给客户端
	client.write("我客户端给发消息了"); 
});

//给client添加传输数据时间
client.on("data",(data)=>{
   console.log("服务端给我发送的回应数据：");
   console.log(data.toString());
});

//客户端数据此次发送完毕
client.on("end",(data)=>{
	console.log("客户端连接断开");
});

//测试时请将10.1.js服务端运行，然后再运行10.1.js,否则会报错