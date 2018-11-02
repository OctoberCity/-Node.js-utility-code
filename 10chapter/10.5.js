const net =require("net");

const HOST ="127.0.0.1";
const PORT ="8089";
const clientList=[];

const server =net.createServer();

//监听连接时间
server.on("connection",(socket)=>{
  //将连接的client加入列表 
  clientList.push(socket);
  socket.name=socket.remoteAddress+":"+socket.remotePort;
  broadcast("hi!welcome to the chart room"+socket.name,socket);
  socket.write("hello "+socket.name);

  //监听 socket的data时间
  socket.on("data",(data)=>{
    broadcast(socket.name+"say:"+data.toString(),socket);
  });

  //监听连接结束时间
  socket.on("end",()=>{
  	console.log(socket.name+"下线l");
  });

});

//广播方法
function broadcast(content,client){
    //排除自己
   clientList.forEach((item,index)=>{
   	//排除自己
   	if(item !== client){ 
   		//判断是否还没有能写
   		if(clientList[index].writable){
             clientList[index].write(content);
   		}else{
    	//删除没用的客户端
           clientList[index].destory();
        //删除数组里的改客户端
           clientList.splice(clientList.indexOf(item),1);
   		}
   	}
   });
}

// 监听端口
server.listen(PORT,HOST);

server.on("listening",()=>{
	console.log("now ,everything be success by node.js");
});