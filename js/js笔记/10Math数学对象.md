## 10Math数学对象

​	sqrt()算数平方根,根号

​	pow(2,10)		2的10次方

​		x,y			y:负数表示求倒数      y:如果是分数,坟墓表示开几次方根

​	abs():绝对值		去掉数值的负号

​	floor()取整数     向下取整    选不超过这个数值的向下整数

​	ceil()取整数	向上取整		选取超过这个数值的向上整数

​	round()四舍五入

​	trunc()直接取整数			去掉小数部分		

​	max()最大值    math.max.apply(math,arr)		

##### 三角函数

​	360deg === math.pi*2

有角度计算边的的比值    已知边的比值可以求角度

##### 反三角函数

asin		acos	atan

##### 随机数

math.random()          返回了大于0小于1的随机数

return math.random()*(max-min)+min

min 和max是可能有小数的

​	求大于min并且小于max的任意一个整数

##### 计算机的精度问题:

​	当计算机进行小数运算的时候纯正精度问题

​	计算机底层:二进制存储的,存储整数很精确

​	存储小数就出现问题了

​	结论:尽量不要进行小数之间的加减或者比较.

​		咱们先转换成整数再转回来

##### parseInt()取整

接收两个参数:第一个是作用的主体  第二以什么方式解析

转换结果是10进制

可以以任何进制去转换字符串10进制的数,只需要填写解析方式

parseFloat()		1e6   1*10的6次方

##### 保留小数点

num.tofixed()

num.match(/.+\..{1}/g)

