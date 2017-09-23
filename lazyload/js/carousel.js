$(function () {
    var $canrousel = $('.main_carousel');
    var $pic_wrap = $('.pic_wrap');
    var $pic = $('.pic_wrap a');
    var $dot = $('.main_dot span');
    var $prev = $('.main_prev');
    var $next = $('.main_next');
    var index = 0;
    var timer = null;

    // 自动播放函数
    function autoPlay() {
        timer = setInterval(function () {
            index++;
            if (index >= $dot.length) {
                index = 0;
            }
            togglePic(index);
            animate(index);
        }, 2000);
    }

    //切换图片和小球
    function togglePic(curIndex) {
        $dot.each(function () {
            $(this).removeClass('active');
        }).eq(curIndex).addClass('active');
        $pic_wrap.css('margin-top', -460 * curIndex + 'px');
    }

    //轮播图切换动画
    function animate(curIndex) {
        $pic.each(function () {
            $(this).removeClass('animate');
        });
        $pic.eq(curIndex).addClass('animate');
    }

    // 点击小球切换轮播图
    $dot.each(function (index) {
        $(this).attr('id', index);
    }).click(function () {
        var $id = $(this).attr('id');
        togglePic($id);
        animate($id);
        index = $id;
    });
    // 调用自动播放函数
    autoPlay();
    //鼠标滑入轮播图，停止自动播放
    $canrousel.mouseover(function () {
        clearInterval(timer);
    });
    //鼠标离开轮播图，继续自动播放
    $canrousel.mouseout(function () {
        autoPlay();
    });
    //点击切换到上一张轮播图
    $prev.click(function () {
        index--;
        if (index < 0) {
            index = $dot.length - 1;
        }
        togglePic(index);
        animate(index);
    });
    //点击切换到下一张轮播图
    $next.click(function () {
        index++;
        if (index >= $dot.length) {
            index = 0;
        }
        togglePic(index);
        animate(index);
    });
});