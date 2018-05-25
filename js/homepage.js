
$(function () {

    function change(){
        $('header').addClass('header_active');
        $('.header_m ul li').addClass('headerContent_active');
        $('.header_phone span').addClass('headerContent_active');
        $('.login a').addClass('login_active');
        $('.login span').addClass('login_active');
        $('.login').addClass('loginBorder_active');
        $('.logo1').hide();
        $('.logo').show();
        $('.headerphone').hide();
        $('.headerphone1').show();
    }
    $('.intro_tontent ul li:eq(0)').click(function(){
        alert(1);
    })
    function topShow(){
        var h = $(document).scrollTop();
        $('.common_trouble').animate({left:[-1500,'easeInOutBack'],'opacity':1},900);
        if(h>100){
                $('.trouble_out').animate({'left':-1500},500);
                $('.trouble_within').animate({'top':169,'opacity':1},800);
        }
        if(h>700){
            $('.common_intro').animate({'left':[-1500,'easeInOutBack'],'opacity':1},900);
            $('.intro_tontent ul li:eq(0)').delay(200).animate({'top':0,'opacity':1},900);
            $('.intro_tontent ul li:eq(1)').delay(400).animate({'top':0,'opacity':1},900);
            $('.intro_tontent ul li:eq(2)').delay(600).animate({'top':0,'opacity':1},900);
            $('.intro_tontent ul li:eq(3)').delay(800).animate({'top':0,'opacity':1},900);
      
        }
        if(h>1300){
            $('.common_advantage').animate({'left':[-1500,'easeInOutBack'],'opacity':1},900);
            $('.advantage_out').animate({'left':-1500},500);
        }
        if(h>1700){
            $('.common_service').animate({'left':[-1500,'easeInOutBack'],'opacity':1},900);
            $('.service_out').delay(500).fadeIn(4000);
        }
        if(h>2500){
            $('.common_flow').animate({'left':[-1500,'easeInOutBack'],'opacity':1},900);
            $('.flow_intro').animate({'right':-1500},700);
            $('.flow_out').animate({'left':-1500},500);
        }
        if(h>3000){
            $('.common_sence').animate({'left':[-1500,'easeInOutBack'],'opacity':1},900);
            $('.sence_out').animate({'left':-1500},700);
           
        }
        if(h>3600){
            $('.common_partner').animate({'left':[-1500,'easeInOutBack'],'opacity':1},900);
            $('.partner_out').animate({'left':-1500},700);
        }
        if(h>4200){
            $('.common_news').animate({'left':[-1500,'easeInOutBack'],'opacity':1},900);
            $('.news_out').animate({'left':-1500},700);
        }
    }
     
    //百叶窗
    topShow();   
    $(window).scroll(function () {
        topShow();   
    })

        

    //一、header部分
    //滚动状态改变 悬浮置顶
    $(window).scroll(function () {
        var h = $(document).scrollTop();
        if (h > 20) {
            change();
        } else {
            $('header').removeClass("header_active");
            $('.header_m ul li').removeClass('headerContent_active');
            $('.header_phone span').removeClass('headerContent_active');
            $('.login a').removeClass('login_active');
            $('.login span').removeClass('login_active');
            $('.login').removeClass('loginBorder_active');
            $('.logo').hide();
            $('.logo1').show();
            $('.headerphone1').hide();
            $('.headerphone').show();
        }
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

    //二、banner 部分轮播图
    var swiper = new Swiper('.swiper-container', {
        autoplay: true,
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
    
    
    //六、背调服务翻转
    $('.back_service_content').mouseover(function(){
        $(this).parent().addClass('fanzhuanmargin');

        $(this).parent().removeClass('fanzhuan1').addClass('fanzhuan2');
        $(this).parent().parent().siblings('li').children('.front').removeClass('fanzhuan2').addClass('fanzhuan1');
        $(this).parent().parent().siblings('li').children('.front').removeClass('fanzhuanmargin');
        $(this).parent().parent().siblings('li').children('.back').removeClass('fanzhuan1').addClass('fanzhuan2');
        $(this).parent().next().addClass('fanzhuan1');
	})
    $('.back_service_content1').mouseleave(function(){
        $(this).parent().prev().removeClass('fanzhuanmargin');
        $(this).parent().removeClass('fanzhuan1').addClass('fanzhuan2');
        $(this).parent().parent().siblings('li').children('front').removeClass('fanzhuan2').addClass('fanzhuan1');
        $(this).parent().parent().siblings('li').children('front').addClass('fanzhuanmargin');
        $(this).parent().parent().siblings('li').children('back').removeClass('fanzhuan1').addClass('fanzhuan2');
        $(this).parent().prev().addClass('fanzhuan1');
    })




});



