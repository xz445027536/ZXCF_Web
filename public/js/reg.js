function reguser(){
  var $uname=uname.value;
  var $upwd=upwd.value;
  var $qpwd=qpwd.value;
  var $phone=phone.value;
  var $eamil=email.value;
  //创建xhr异步对象
  var xhr=new XMLHttpRequest();
  //绑定监听，接收响应
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status===200){
      var result=xhr.responseText;
      if(result=="1"){
        alert("恭喜！注册成功！");
      }else{
        alert("注册失败！");
      }
    }
  }
  //打开连接，创建请求
  xhr.open("post","/user/register",true);
  //创建请求主体
  var formdata=`uname=${$uname}&upwd=${$upwd}&phone=${$phone}&email=${$eamil}`;
  console.log(formdata);
  //设置请求头信息
  xhr.setRequestHeader("Content-Type","application/X-www-form-urlencoded");
  //发送请求
  xhr.send(formdata);
}