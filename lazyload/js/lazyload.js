$(function () {
    var $win = $(window);
    var $img = $('.lazy');
    var timer = null;
    //绑定事件
    function bindEvent() {
        $win.on('scroll resize', function () {
            if (timer) return;
            timer = setInterval(function () {
                load();
                timer = null;
            }, 250);
        })
    }

    //位置检测
    function inVisibleArea(elem) {
        return $win.scrollTop() + $win.height()*3/4 >= $(elem).offset().top;
    }

    //显示图片
    function appear(elem) {
        elem.src = $(elem).data('src');
    }

    //加载图片
    function load() {
        $img.each(function () {
            if (inVisibleArea(this)) {
                appear(this);
            }
        })
    }

    // 调用加载图片函数
    load();
    // 调用绑定事件函数
    bindEvent();
})

