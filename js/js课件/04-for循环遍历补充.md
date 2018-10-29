# 循环遍历补充知识：

for...in es5得遍历方法，**遍历键名**

```js
let arr = [1, 2, 3, 5]
for(let i in arr){
    console.log(i)
}
//挨个打印对象每个属性得键名 0 1 2 3
let obj ={a:1,b:2}
for(let i in obj){
    console.log(i)
}
//挨个打印对象每个属性得键名：a b

```

但是存在缺陷

```js
let adiv = document.querySelectorAll("div")
for(let i in adiv){
    console.log(i)
}
//会出现length keys等对象本身得属性，所以不建议用
```

for...of es6得遍历返回可枚举**对象键值**得方法

```js
let arr = [1, 2, 3, 5]
for(let i of arr){
    console.log(i)//1, 2, 3, 5
}
for(let i of "asd"){
    console.log(i)//"a" "s" "d"
}
```

可枚举对象: 数组 字符串 （Map Set...)

但是在对象上是不行得（不要求掌握）

```js
let obj = {a:1, b:2}
for(let i of obj){
    console.log(i)
}
//不行，会报错
//需要添加一个可枚举属性，将对象变成一个可枚举对象。
obj[Symbol.iterator] = Array.prototype[Symbol.iterator]
obj[0] = "a"
obj[1] = "b"
obj["length"] = 2
//并且对象里面得值是需要按序号设置，并且还要有一个长度length
for(let i of obj){
    console.log(i)
}
//"a" "b"
```

