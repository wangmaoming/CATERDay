//自调用函数
// function:定义函数
(function main() {
//判断用户是否登陆，如果没有登陆就跳转登录页面
    if(!sessionStorage.loginstate){
        location.href="login.html";
        // window.open("login.html","_blank");
        //终止函数
        return;
    }
//     //判断是否显示欢迎
// if(sessionStorage.isWelcome){
//     alert('欢迎'+localStorage.username+'!'  );
//     sessionStorage.isWelcome=false;
// }
//获取元素
//     document.querySelector()
//     document.querySelectorAll()
//    获取DOM元素
    var oPrev=document.querySelector(".prev");
    var oNext= document.querySelector(".next");
    var oWrap=document.querySelector(".wrap");
    var oImgs=document.querySelectorAll('.imgs>img');
    var oIdots= document.querySelectorAll('.idot');
//    记录当前显示图片/小圆点下标
    var curImgIdx=0;
    // 定义定时器
    var _timer=null;
    outoplay();
//    点击上一张
    oPrev.onclick=function () {
        if(curImgIdx==0){
            curImgIdx=5;

        }
        else {
            curImgIdx--;

        }
console.log(curImgIdx);
    //    切换图片
    //    调用函数：函数名+（）
        tab()
        changeIdot()
    }
    //点击下一张
    oNext.onclick=function () {
        if(curImgIdx==5){
            curImgIdx=0;
        }else {

            curImgIdx++;
        }
        console.log(curImgIdx);
        //    切换图片
        //    调用函数：函数名+（）
        tab()
        changeIdot()
    }
//    点击小圆点，切换图片。为小圆点添加点击事件
    for(var i=0 ;i < oIdots.length;i++){
        //为小圆点添加标识，记录小圆点所在的下标位置
        oIdots[i].idx=i;
        oIdots[i].onclick=function () {
            //如果用户点击当前正在显示的图片，则限制交互
            if(this.idx==curImgIdx){
                return;
            }
            // alert(this.idx)
             curImgIdx=this.idx;
             tab();
            changeIdot();

        }

    }
    //    用户移入轮播图，清除定时器
    oWrap.onmouseenter=stop;
    //    用户移出轮播图，启动定时器
    oWrap.onmouseleave=outoplay;

//    自动播放
    function outoplay() {
        //setInterval(回调函数，时间函数)
        //1s=1000

       _timer= setInterval(function () {
        //每隔3秒执行一次下一页函数
            oNext.onclick();
        },2000);
    }
    function stop() {
      //  清除定时器
      clearInterval(_timer)
    }

//切换图片的显示
//    函数定义之后需要调用
    function tab() {
        //循环取消上一次显示图片的class
        for (var i=0; i<oImgs.length; i++){
            if( oImgs[i].classList.contains("active")){
                oImgs[i].classList.remove("active");
                //删除循环
                break
            }
        }
        //为当前显示图片添加class
        oImgs[curImgIdx].classList.add("active");

    }
//    切换小圆点
    function  changeIdot() {
        for (var i = 0; i < oIdots.length; i++) {
            if (oIdots[i].classList.contains("active")) {
                oIdots[i].classList.remove("active");
                break
            }
     }
      oIdots[curImgIdx].classList.add("active");
    }
}())