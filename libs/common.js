$(function(){
    /* 登录注册 */
    $('.login_log').click(function(){
        window.open("http://hr.ezhixin.com/login");
    })
    $('.login_test').click(function(){
        window.open("http://hr.ezhixin.com/login");
    })

    $('.header_m ul li:nth-child(1)').click(function(){
        window.open('http://www.ezhixin.com');
    })
    $('.header_m ul li:nth-child(2)').click(function(){
        window.open('./service.html')
    })
    $('.header_m ul li:nth-child(3)').click(function(){
        window.open('./aboutus.html');
    })
    $('.header_m ul li:nth-child(4)').click(function(){
        window.open('./faq.html');
    })
    $('.header_m ul li:nth-child(5)').click(function(){
        window.open( './news.html');
    })
    $('.header_m ul li:nth-child(6)').click(function(){
        window.open('./download.html');
    })
    //鼠标滑动显示active状态
    $('.header_m li').mouseover(function(){
        $(this).addClass('active');
        $(this).children('p').next().removeClass('header_display');
    })
    $('.header_m li').mouseleave(function(){
        $(this).removeClass('active');
        $(this).children('p').next().addClass('header_display');
    })

    // 点击logo回到首页
    $('.header_l').click(function(){
        window.location.href = 'http://www.ezhixin.com';
    })
    




    function change(){
    $('header').addClass('header_active');
    $('.header_m ul li').addClass('headerContent_active');
    $('.header_phone span').addClass('headerContent_active');
    $('.login_log span').addClass('login_active');
    $('.login_log').addClass('loginBorder_active');
    $('.logo1').hide();
    $('.logo').show();
    $('.headerphone').hide();
    $('.headerphone1').show();
}

    //滚动状态改变 悬浮置顶
    $(window).scroll(function () {
        var h = $(document).scrollTop();
        if (h > 20) {
            change();
        } else {
            $('header').removeClass("header_active");
            $('.header_m ul li').removeClass('headerContent_active');
            $('.header_phone span').removeClass('headerContent_active');
            $('.login_log span').removeClass('login_active');
            $('.login_log').removeClass('loginBorder_active');
            $('.logo').hide();
            $('.logo1').show();
            $('.headerphone1').hide();
            $('.headerphone').show();
        }
    })

   
})
