## 03events 事件模块 

#### events 事件模块

​	const events = require("events")

#### EventEmitter类

​	const EventEmitter = events.EventEmitter

​	let a = new EventEmitter()

##### 	on  手动绑定事件     

​		a.on("自己定义",fuction(){})

​		a.emit("自己定义",函数触发时候的参数)

​		a.off("自己定义",fn函数名)  解绑事件

##### 	newListener		a.on("newListener",()=>{})  自动触发

​	
