#设置连接服务器编码
SET NAMES UTF8;
#丢弃数据库 
DROP DATABASE IF EXISTS zxcf;
#创建数据库，并设置存储编码
CREATE DATABASE zxcf CHARSET=UTF8;
#进入数据库
USE   zxcf
#创建用户信息表zxcf_user
CREATE TABLE zxcf_user(
  uid INT PRIMARY KEY AUTO_INCREMNT,  #用户编号
  uname VARCHAR(16),  #用户名
  upwd  VARCHAR(32),  #密码
  phone VARCHAR(11),  #手机号
  email VARCHAR(64),  #用户邮箱
  gender  INT ,#性别：1代表男,0代表女
);
