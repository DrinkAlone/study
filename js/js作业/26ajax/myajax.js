const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function (req,res) {
    console.log(req.query);
    res.header("Access-Control-Allow-Origin","*");
    res.send("这是get请求")
});
app.post("/",function (req,res) {
    console.log(req.body);
    res.header("Access-Control-Allow-Origin","*");
    res.send("这是post请求")
});
app.listen(8000,function () {
    console.log("项目启动");
});