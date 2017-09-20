window.onload = tab;

function tab() {
    var wrap = document.querySelector('.wrap');
    var pic = document.querySelector('.pic');
    var point=document.querySelector('.point').getElementsByTagName('li');
    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    var index = 0;
    var timer = null;
    function autoPlay() {
        timer = setInterval(function () {
            index++;
            if (index >= point.length) {
                index = 0;
            }
            togglePic(index);
        }, 2000);
    }
    function togglePic(curIndex) {
        for (var j = 0; j < point.length; j++) {
            point[j].className = '';
            pic.style.marginTop = '0px';
        }
        pic.style.marginTop = -460 * curIndex + 'px';
        point[curIndex].className = 'active';
    }
    for (var i = 0; i < point.length; i++) {
        point[i].id = i;
        point[i].addEventListener('click', function () {
            togglePic(this.id);
            index=this.id;
        });
    }
    autoPlay();
    wrap.addEventListener('mouseover',function () {
        clearInterval(timer);

    });
    wrap.addEventListener('mouseout',function () {
        autoPlay();
    });
    prev.onclick = function() {
        index -= 1;
        if (index < 0) {
            index = 4;
        }
        togglePic(index);
    };
    next.onclick = function() {
        index += 1;
        if (index > 4) {
            index = 0;
        }
        togglePic(index);
    };
}