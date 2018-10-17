## 01javascript基础

##### javascript历史

​	1995布兰登艾奇花了10天创建了JavaScript

##### 为什么用JavaScript

​	减少客户验证,减少带宽,减少服务器压力

##### JavaScript注释方法

​	单行注释  //

​	多行注释 /* */

​	\<script type="text/javascript">		type是标签语言类型默认是是JavaScript    可以不写type

##### JavaScript写在哪里

​	写在body里面	\<script>\</script>

​	写在head里面	

​	外部引用			\<script  src="">\</script>

​	在script中不能使用script标签要使用转义符号		转义符号\\

##### JavaScript弹窗

​	alert()	window.alert	浏览器弹出

##### 语言:特定词汇,语言规律(语法),

##### 主体:变量(名词代词),拿一个名词指代他

​	声明变量

##### 保留字:var  let  const alert

##### 变量	

​	1."盒子",存储一些内容的

​	2.我们自己去定义的	

###### 声明变量:变量在使用之前一定要声明

​	var   let   const	都可以声明变量

##### 变量的作用

​	let = 

69

​	存储内容   用等号=进行赋值    等号左边是变量名,等号右边是要赋的值

##### 通过js获取页面的元素

​	页面的元素是存储在文档对象模型中的	

​	文档对象模型		document

​	通过Id

​		document.getElementById("")	获取元素

​		console.log();	在控制台输出变量

​	通过class	选择所以满足条件的元素,形成一个数组返回出来

​		document.getElementsByClassName()

​		数组从0开始		class[0]

​	通过标签名

​		document.getElementsByTagName()

​	通过name	有names属性的元素节点   input		

​		document.getElementsByName()

##### 添加内容

​		.innerHTML		支持标签解析

​		.innerText		不支持标签解析(纯文本)

##### 修改样式

​	.style.cssText="";		直接写入行内样式

​	.style.css属性(width)	属性中的-减号需要去掉后面单词首字母大写

##### 事件绑定

​	事件  	随机出现,条件=>触发事件

​	onclick = function(){}		点击事件

​	onload = function(){}		加载完毕

​	

​	