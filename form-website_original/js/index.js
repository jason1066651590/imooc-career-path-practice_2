// 声明变量，定义自己的命名空间
var myspace={};
//往命名空间添加属性
myspace.header_list=document.querySelector(".nav_3_1");
myspace.header_list_content=document.querySelector(".nav_3_2");
myspace.username=document.querySelector("#username");
myspace.pwd=document.querySelector("#pwd");
myspace.checkpwd=document.querySelector("#checkpwd");
myspace.myname=document.querySelector("#name");
myspace.certificate=document.querySelector("#certificate");
myspace.cert_num=document.querySelector("#cert_num");
myspace.email=document.querySelector("#email");
myspace.num=document.querySelector("#num");
myspace.visitor=document.querySelector("#visitor");
myspace.item=document.getElementsByClassName("item");
myspace.item_rect=document.getElementsByClassName("rect");
myspace.next=document.getElementById("next");
myspace.name_rule=document.querySelector(".name_rule");
myspace.item_content=document.querySelector(".item_content");
myspace.form=document.querySelector("form");
myspace.test1=false;
myspace.test2=false;
myspace.test3=false;
myspace.test4=false;
myspace.test5=false;
myspace.test6=false;
myspace.test7=false;
myspace.test8=false;
myspace.test9=false;
//顶部我的imooc绑定鼠标滑过显示二级菜单事件
myspace.header_list.addEventListener("mouseover",function(){
    if(myspace.header_list_content.style.display="none") {
        myspace.header_list_content.style.display="block";
    }
});
myspace.header_list.addEventListener("mouseout",function(){
    if(myspace.header_list_content.style.display="block") {
        myspace.header_list_content.style.display="none";
    }
});
//表单的姓名填写规则绑定鼠标滑过显示二级菜单事件
myspace.name_rule.addEventListener("mouseover",function(){
    if(myspace.item_content.style.visibility="hidden") {
        myspace.item_content.style.visibility = "visible";
    }
});
myspace.name_rule.addEventListener("mouseout",function(){
    if(myspace.item_content.style.visibility="visible"){
        myspace.item_content.style.visibility="hidden";
    }
});
//用户名的判断验证
myspace.username.addEventListener("blur",function(){
    var reg=/^[a-zA-Z]\w{5,29}$/;
    var str=myspace.username.value;
    if(str===""||!reg.test(str)){
        myspace.item[0].innerHTML="6-30位字母、数字或'_'，字母开头";
        myspace.item[0].style.color="red";
    }else{
        myspace.item[0].innerHTML="用户名输入正确";
        myspace.item[0].style.color="green";
        myspace.test1=true;
    }
});
//密码的判断验证
myspace.pwd.addEventListener("blur",function(){
    var reg_1=/^\S{6,20}$/;
    var reg_2=/^[a-zA-Z]{6,20}|[0-9]{6,20}|[^a-zA-Z0-9\s]{6,20}$/;
    var reg_3=/^[a-zA-Z0-9]{6,20}|[^a-zA-Z\s]{6,20}|[^0-9\s]{6,20}$/;
    var str=myspace.pwd.value;
    if(str===""||!reg_1.test(str)){
        myspace.item[1].style.visibility="visible";
        myspace.item[1].innerHTML="6-20位字母、数字或符号";
        myspace.item[1].style.color="red";
    }else{
        myspace.item[1].innerHTML="<span class=\"rect\"></span><span class=\"rect\"></span><span class=\"rect\"></span>";
        if(reg_2.test(str)){
            myspace.item[1].style.visibility="visible";
        }else if(reg_3.test(str)){
            myspace.item[1].style.visibility="visible";
            myspace.item_rect[1].style.backgroundColor="orange";
        }else if(reg_1.test(str)){
            myspace.item[1].style.visibility="visible";
            myspace.item_rect[1].style.backgroundColor="orange";
            myspace.item_rect[2].style.backgroundColor="green";
        }
        myspace.test2=true;
    }
});
//确认密码的判断验证
myspace.checkpwd.addEventListener("blur",function(){
    var str=myspace.checkpwd.value;
    if(str===""){
        myspace.item[2].innerHTML="输入框不能为空";
        myspace.item[2].style.color="red";
    }else if(str!==myspace.pwd.value){
        myspace.item[2].innerHTML="两次密码输入不一致，请重新输入";
        myspace.item[2].style.color="red";
    }else{
        myspace.item[2].innerHTML="两次输入一致";
        myspace.item[2].style.color="green";
        myspace.test3=true;
    }
});
//姓名的判断验证
myspace.myname.addEventListener("blur",function(){
    var reg=/^[a-zA-Z\u4E00-\u9FA5]{3,30}$/;
    var str=myspace.myname.value;
    if(str===""||!reg.test(str)){
        myspace.item[3].innerHTML="姓名只能包含中文或者英文,且字符在3-30个之间";
        myspace.item[3].style.color="red";
    }else{
        myspace.item[3].innerHTML="姓名输入正确";
        myspace.item[3].style.color="green";
        myspace.test4=true;
    }
});
//证件类型的判断验证
myspace.certificate.addEventListener("blur",function(){
    if(myspace.certificate.value===""){
        myspace.item[4].innerHTML="请选择证件类型";
        myspace.item[4].style.color="red";
    }else{
        myspace.item[4].innerHTML="选择成功";
        myspace.item[4].style.color="green";
        myspace.test5=true;
    }
});
//证件号码的判断验证
myspace.cert_num.addEventListener("blur",function(){
    var reg=/^\d{17}[0-9xX]$/;
    var str=myspace.cert_num.value;
    if(str===""||!reg.test(str)){
        myspace.item[5].innerHTML="请输入18位身份证号码";
        myspace.item[5].style.color="red";
    }else{
        myspace.item[5].innerHTML="号码输入正确";
        myspace.item[5].style.color="green";
        myspace.test6=true;
    }
});
//邮箱的判断验证
myspace.email.addEventListener("blur",function(){
    var reg=/^[0-9a-zA-Z_\-]+@[a-zA-Z0-9_-]+\.[0-9a-zA-Z_-]+$/;
    var str=myspace.email.value;
    if(str===""||!reg.test(str)){
        myspace.item[6].innerHTML="请输入正确的邮箱";
        myspace.item[6].style.color="red";
    }else{
        myspace.item[6].innerHTML="邮箱格式正确";
        myspace.item[6].style.color="green";
        myspace.test7=true;
    }
});
//手机号码的判断验证
myspace.num.addEventListener("blur",function(){
    var reg=/^1[^12][0-9]{9}$/;
    var str=myspace.num.value;
    if(str===""||!reg.test(str)){
        myspace.item[7].innerHTML="您输入的手机号码不是有效的格式！";
        myspace.item[7].style.color="red";
    }else{
        myspace.item[7].innerHTML="手机格式正确";
        myspace.item[7].style.color="green";
        myspace.test8=true;
    }
});
//旅客类型的判断验证
myspace.visitor.addEventListener("blur",function(){
    if(myspace.visitor.value===""){
        myspace.item[8].innerHTML="请选择旅客类型";
        myspace.item[8].style.color="red";
    }else{
        myspace.item[8].innerHTML="选择成功";
        myspace.item[8].style.color="green";
        myspace.test9=true;
    }
});
//下一步提交的判断验证
myspace.next.addEventListener("click",function(){
    if(myspace.test1===false||myspace.test2===false||myspace.test3===false||myspace.test4===false||myspace.test5===false||myspace.test6===false || myspace.test7===false || myspace.test8===false || myspace.test9==false){
        myspace.form.action="#";
    }else{
        myspace.form.action="http://www.imooc.com";
    }
});





