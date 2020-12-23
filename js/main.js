var btb = $(".rightNav");
var temps;
btb.hover(function () {
    var thisObj = $(this);
    temps = setTimeout(function () {
        thisObj.find("a").each(function (i) {
            var tA = $(this);
            setTimeout(function () {
                tA.animate({
                    right: "0"
                }, 200);
            }, 50 * i);
        });
    }, 200);
}, function () {
    if (temps) {
        clearTimeout(temps);
    }
    $(this).find("a").each(function (i) {
        var tA = $(this);
        setTimeout(function () {
            tA.animate({
                right: "-110"
            }, 200);
        }, 50 * i);
    });
});

// product页面轮播图

// 点击按钮,实现图片的切换
var index = 1; //设置偏移几倍的量
var bigImg = $(".res-g-C1");
var sImg = $(".res-g-c1");
var next = $(".res-g-right")[0];
var prev = $(".res-g-left")[0];
var resU = $(".res-gallery ul");
var resL = $(".res-gallery li");
var resMask = $(".res-mask");
if(next){
    resU.css({
        "width": 500 * resL.length,
        left: -500
    });
    
    function ProAnimate(offset) {
        resU.css({
            transition: "1s",
            left: -(parseInt(offset)) * index + "px"
        });
    }
    next.onclick = function () {
        if (index == resL.length - 2) {
            index = 0;
        }
        index++;
        ProAnimate(bigImg.outerWidth())
    };
    
    prev.onclick = function () {
        if (index == 1) {
            index = resL.length - 1;
        }
        index--;
        ProAnimate(bigImg.outerWidth())
    };
    
    function play() {
        timer = setInterval(function () {
            next.onclick();
            yellowBorder()
        }, 1500);
    }
    play();
    $(next).hover(function () {
        clearInterval(timer)
    }, function () {
        play()
    });
    $(prev).hover(function () {
        clearInterval(timer)
    }, function () {
        play()
    });
    
    // 黄色框跟随
    function yellowBorder() {
        resMask.css({
            left: (index - 1) * (100) + (index * 37) - 6
        })
        if (index == 3) {
            resMask.css({
                left: (index - 1) * (100) + (index * 37) - 12
            })
        }
        if (index == 1) {
            resMask.css({
                left: 37
            })
        }
    }
    
    
    // 点击图片跳转
    function ImgSkip() {
        for (var i = 0; i < $(".sm-img div").length; i++) {
            $(".sm-img div")[i].onclick = function () {
                clearInterval(timer)
                index = parseInt(this.getAttribute('index'))
                ProAnimate(bigImg.outerWidth())
                play()
                yellowBorder()
            }
        }
    }
    ImgSkip()
    
    
    // 下拉固定
    $(document).scroll(function () {
        var stop = $(window).scrollTop();
        if (stop > $(".detail-tab").offset().top) {
            $(".d-tab-top").css({
                "position": "fixed",
                "top": 0
            });
    
            // 鼓浪屿
            var item1 = ($(".item1").offset().top)-20, //提前一点
                item2 = ($(".item2").offset().top)-20,
                item3 = ($(".item3").offset().top)-20,
                item4 = ($(".item4").offset().top)-20,
                divList = $(".d-tab-top div");
            if(stop >item1 && stop < item2) {
                $(divList).removeClass("dtt-itemNow");
                $(divList[1]).addClass("dtt-itemNow");
            }else if(stop >item2 && stop < item3) {
                $(divList).removeClass("dtt-itemNow");
                $(divList[2]).addClass("dtt-itemNow");
            }else if(stop >item3 && stop < item4) {
                $(divList).removeClass("dtt-itemNow");
                $(divList[3]).addClass("dtt-itemNow");
            }else if(stop>item4) {
                $(divList).removeClass("dtt-itemNow");
                $(divList[4]).addClass("dtt-itemNow");
            }else {
                $(divList).removeClass("dtt-itemNow");
                $(divList[0]).addClass("dtt-itemNow");
            }
    
        } else {
            $(".d-tab-top").css({
                "position": "static",
            });
        }
    });
}
// 设置ul的宽度
