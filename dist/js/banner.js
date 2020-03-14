//编写轮播这个功能 模块化(同一个类型功能的函数，放在一起)
define(["jquery"], function($){
    function bannerTab(){
        var timer = null;
                var iNow = 1;
                var ul1 = $('.banner ul li');
                timer = setInterval(function () {
                    iNow++;
                    $.tab();
                }, 3000);
                $('.banner').mouseenter(function () {
                    clearInterval(timer);
                }).mouseleave(function () {
                    timer = setInterval(function () {
                        iNow++;
                        $.tab();
                    }, 2000);
                });
                $('.slide-prev').click(function () {
                    if (iNow <= 0) {
                        iNow = 4;
                    }
                    iNow--;
                    $.tab();
                    return false;
                })
                $('.slide-next').click(function () {
                    if (iNow >= 3) {
                        iNow = -1;
                    }
                    iNow++;
                    $.tab();
                    return false;
                })
                $.extend({
                    tab: function () {
                        if (iNow == 4) {
                            iNow = 0;
                        }
                        // ul1.eq(iNow).addClass('active').siblings().removeClass('active');
                        ul1.stop(true).eq(iNow).animate({
                            opacity:1
                        }, 800, 'linear');
                        ul1.eq(iNow).siblings().animate({
                            opacity:0
                        },2000,'linear');
                    }
                })
    }
    function tab1(){
        $('.link_3 li').mouseenter(function(){
            _this = $(this);
            setTimeout(function () {
                _this.find('.intro').stop(true,false).slideDown('2000').addClass('active').parent().siblings().find('.active').slideToggle('2000').removeClass('active');
            },500); 
        })
    }
    return {
        bannerTab: bannerTab,
        tab1:tab1
    }
})