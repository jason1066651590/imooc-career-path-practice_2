$(function () {
    var timer = null;
    var index = 0;
    // 自动播放函数
    function autoPLay(){
        timer=setInterval(function(){
            index++;
            if(index>=$('.point>li').length){
                index=0;
            }
            togglePic(index);
        },2000);
    }
    //小圆点和图片同步切换
    function togglePic(curIndex) {
        $('.point>li').each(function (curIndex) {
            $(this).removeClass('active');
        }).eq(curIndex).addClass('active');
        $('.pic').css('margin-top',function () {
            return -460*curIndex;
        });
    }
    //点击小圆点切换图片
    $('.point>li').each(function (index) {
        return $(this).attr('id',index);
    }).on('click',function () {
        togglePic($(this).attr('id'));
        index=$(this).attr('id');
    });
    //鼠标停留在tab切换页上的任何位置，图片轮播停止和鼠标离开tab切换页时，图片轮播停止
    $('.wrap').mouseover(function () {
        clearInterval(timer);
    }).mouseout(function () {
        autoPLay();
    });
    //左边小箭头的点击事件
    $('.prev').click (function() {
        index--;
        if (index < 0) {
            index = 4;
        }
        togglePic(index);
    });
    //右边小箭头的点击事件
    $('.next').click (function() {
        index++;
        if (index > 4) {
            index = 0;
        }
        togglePic(index);
    });
    //调用自动播放函数
    autoPLay();
})