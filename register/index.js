var username_ = document.getElementById("username");
var password_ = document.getElementById("password");
var checkpwd = document.getElementById("checkpwd");
var name_ = document.getElementById("name");
var gender = document.getElementById("gender");
var cid = document.getElementById("cid");
var email = document.getElementById("email");
var number = document.getElementById("number");
var submit = document.getElementById("submit");
var item_ = document.querySelectorAll(".item");
var test1 = false;
var test2 = false;
var test3 = false;
var test4 = false;
var test5 = false;
var test6 = false;
var test7 = false;
username_.addEventListener("blur", function () {
    var pattern = /^[a-zA-Z]\w{5,19}$/;
    if (username_.value == "" || !pattern.test(username_.value)) {
        item_[0].innerHTML = "6-20位字母、数字或“_”，字母开头";
    } else {
        item_[0].innerHTML = "OK";
        test1 = true;
    }
});
password_.addEventListener("blur", function () {
    var pattern = /^\S{6,18}$/;
    if (password_.value == "" || !pattern.test(password_.value)) {
        item_[1].innerHTML = "6-18位，包含数字、字母或符号，中间不能有空格";
    } else {
        item_[1].innerHTML = "OK";
        tset2 = true;
    }
});
checkpwd.addEventListener("blur", function () {
    if (checkpwd.value == "") {
        item_[2].innerHTML = "请设置密码";
    } else {
        if (checkpwd.value !== password_.value) {
            item_[2].innerHTML = "两次输入密码不一致";
        } else if (checkpwd.value === password_.value) {
            item_[2].innerHTML = "OK";
            test3 = true;
        }
    }
});
name_.addEventListener("blur", function () {
    var pattern = /^[\u4E00-\u9FA5]{2,4}$/;
    if (name_.value == "" || !pattern.test(name_.value)) {
        item_[3].innerHTML = "真实姓名为两位到四位的中文";
    } else {
        item_[3].innerHTML = "OK";
        test4 = true;
    }
});
cid.addEventListener("blur", function () {
    var pattern = /^\d{17}[\d|x]$/
    if (cid.value == "" || !pattern.test(cid.value)) {
        item_[4].innerHTML = "请输入18位的身份证号码";
    } else {
        item_[4].innerHTML = "OK";
        test5 = true;
    }
});
email.addEventListener("blur", function () {
    var pattern = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if (email.value == "" || !pattern.test(email.value)) {
        item_[5].innerHTML = "邮件格式不正确";
    } else {
        item_[5].innerHTML = "OK";
        test6 = true;
    }
});
number.addEventListener("blur", function () {
    var pattern = /^^1[3|4|5|8][0-9]\d{4,8}$/
    if (number.value == "" || !pattern.test(number.value)) {
        item_[6].innerHTML = "电话号码不正确";
    } else {
        item_[6].innerHTML = "OK";
        test7 = true;
    }
});
submit.addEventListener("click", function () {
    if (test1==false||test2==false||test3==false||test4==false||test5==false||test6==false || test7==false){
        alert("填写有误，请检查")
    } else {
        alert("验证成功");
    }
});