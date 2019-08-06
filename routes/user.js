//引入express模块
const express=require("express");
//引入连接池
const pool=require("../pool.js");
//创建用户路由器
let router=express.Router();

//1.创建用户注册路由
router.post("/register",(req,res)=>{
  //获取用户填入的数据
  var $uname=req.body.uname;
  var $upwd=req.body.upwd;
  var $phone=req.body.phone;
  var $eamil=req.body.email;
  //执行SQL语句
  var sql="insert into zxcf_user set uname=?,upwd=?,phone=?,email=?";
  pool.query(sql,[$uname,$upwd,$phone,$eamil],(err,result)=>{
    if(err) throw err;
    res.send("1");
  });
});

//2.创建用户登录路由
router.get("/login/:uname&:upwd",function(req,res){
  //获取用户填入的数据
  var $uname=req.params.uname;
  var $upwd=req.params.upwd;
  //执行SQL语句
  var sql="select * from zxcf_user where uname=? and upwd=?";
  pool.query(sql,[$uname,$upwd],function(err,result){
    //判断是否登录成功
    if(result.length >0){
      res.send("1");
    }else{
      res.send("0");
    }
  });
});









//导出理由器
module.exports=router;