//引入express模块
const express=require("express");
//引入中间件body-parser
const bodyParser=require("body-parser");
//创建web服务器
var app=express();
//设置监听端口
app.listen(8080);
//设置托管静态页面到public目录下
app.use(express.static("public"));
//使用body-paeser中间件
app.use(bodyParser.urlencoded({
  extended:false
}));
//使用user路由
app.use("/user",userRouter);