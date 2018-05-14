
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
    }

    var h = $(document).scrollTop();
    console.log(h);
    if(h<20){
        $('header').removeClass("header_active");
        $('.header_m ul li').removeClass('headerContent_active');
        $('.header_phone span').removeClass('headerContent_active');
        $('.login a').removeClass('login_active');
        $('.login span').removeClass('login_active');
        $('.login').removeClass('loginBorder_active');
        $('.logo').hide();
        $('.logo1').show();
    }else{
        if(h>20){
            change();
        } 
        if(h>100){
            $('.advantage').animate({'opacity':1},1200);  
            change();   
        }
        if(h>800){
            $('.back_service ').animate({'opacity':1},1200);
            change();   
        }
        if(h>1670){
            $('.flow').animate({'opacity':1},1200);
            change();   
        }
        if(h>2300){
            $('.sence').animate({'opacity':1},1200);
            change();   
        }
        if(h>3100){
            $('.service').animate({'opacity':1},1200);
            change();   
        }
        if(h>4100){
            $('.news_banner').animate({'opacity':1},1200);
            change();   
        }
    }

    //header 滚动状态改变 悬浮置顶
    $(window).scroll(function(){
        var h = $(document).scrollTop();
        console.log(h);
        if(h>20){
            change();
            if(h>100){
                $('.advantage').animate({'opacity':1},1200);     
            }
            if(h>800){
                $('.back_service ').animate({'opacity':1},1200);
            }
            if(h>1670){
                $('.flow').animate({'opacity':1},1200);
            }
            if(h>2300){
                $('.sence').animate({'opacity':1},1200);
            }
            if(h>3100){
                $('.service').animate({'opacity':1},1200);
            }
            if(h>4100){
                $('.news_banner').animate({'opacity':1},1200);
            }
        }else{
            $('header').removeClass("header_active");
            $('.header_m ul li').removeClass('headerContent_active');
            $('.header_phone span').removeClass('headerContent_active');
            $('.login a').removeClass('login_active');
            $('.login span').removeClass('login_active');
            $('.login').removeClass('loginBorder_active');
            $('.logo').hide();
            $('.logo1').show();
        }
    })

    //banner 部分轮播图
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

     //news 部分旋转木马
     $('#slide3d').slideCarsousel({ slideType: '3d', indicatorEvent: 'mouseover' });

    //背调服务翻转
    $('.front').mouseover(function(){
        $(this).removeClass('fanzhuan1').addClass('fanzhuan2');
		$(this).next().addClass('fanzhuan1');
	})
    $('.back').mouseleave(function(){
        $(this).removeClass('fanzhuan1').addClass('fanzhuan2');
        $(this).prev().addClass('fanzhuan1');
    })

});



