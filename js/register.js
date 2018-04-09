

//自调用函数
// function:定义函数
(function main() {
//   获取DOM元素
//    定义一个变量VAR
//    变量：用于存储数据，相当于容器
    var usernameIpt=document.getElementById('username-ipt');
    var passwordIpt=document.getElementById('password-ipt');
    var registerBtn=document.getElementById('register-btn');
     //打印输出
    //  console.log(usernameIpt);
    // console.log(passwordIpt);
    // console.log(registerBtn);
//    为注册按钮添加点击事件，实现注册功能
    registerBtn.onclick=function () {
        // alert("点击注册按钮")
    //    ！：取反,  &&:与 同时为真才为真;   ||:或  一个为真就为真，同时为假才为假
    //判断用户是否输入账号和密码
        if(!usernameIpt.value||!passwordIpt.value) {
            alert("对不起！注册失败，请输入账号或密码。")
        }
        else {
        //    将用户信息存入本地
        //   localStorage:本地存储
        //    sessionStorage:临时存储，
          localStorage.username=usernameIpt.value;
            localStorage.password=passwordIpt.value;
            sessionStorage.loginstate=true;
            // //是否显示欢迎
            // sessionStorage.isWelcome=true;
            alert("恭喜你！注册成功")
            location.href="index.html";
        }

    }
}())