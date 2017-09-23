var canrousel=document.querySelector('.main_carousel');
var pic_wrap=document.querySelector('.pic_wrap');
var pic=document.querySelector('.pic_wrap').getElementsByTagName('a');
var dot=document.querySelector('.main_dot').getElementsByTagName('span');
var prev=document.querySelector('.main_prev');
var next=document.querySelector('.main_next');
var index=0;
var tiemr=null;
// 自动播放函数
function autoPlay() {
    timer=setInterval(function () {
        index++;
        if(index>=dot.length){
            index=0;
        }
        togglePic(index);
        animate(index);
    },2000);
}
//切换图片和小球
function togglePic(curIndex) {
    for(var j=0;j<dot.length;j++){
        dot[j].className='';
        pic_wrap.style.marginTop='0px';
    }
    dot[curIndex].className='active';
    pic_wrap.style.marginTop=-460*curIndex+'px';
}
//轮播图切换动画
function animate(curIndex){
    for(var j=0;j<dot.length;j++){
        pic[j].className='';
    }
    pic[curIndex].className='animate';
}
// 点击小球切换轮播图
for(var i=0;i<dot.length;i++){
    dot[i].id=i;
    dot[i].addEventListener('click',function () {
        togglePic(this.id);
        index=this.id;
        animate(this.id);
    })
}
// 调用自动播放函数
autoPlay();
//鼠标滑入轮播图，停止自动播放
canrousel.addEventListener('mouseover',function () {
    clearInterval(timer);
});
//鼠标离开轮播图，继续自动播放
canrousel.addEventListener('mouseout',function () {
    autoPlay();
});
//点击切换到上一张轮播图
prev.addEventListener('click',function () {
    index--;
    if(index<0){
        index=dot.length-1;
    }
    togglePic(index);
    animate(index);
});
//点击切换到下一张轮播图
next.addEventListener('click',function () {
    index++;
    if(index>=dot.length){
        index=0;
    }
    togglePic(index);
    animate(index);
});
