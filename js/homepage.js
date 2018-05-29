
$(function () {

    var userAgent = navigator.userAgent; 
     var isChrome = (userAgent.indexOf("Chrome") > -1 || userAgent.indexOf("Safari") > -1)&&userAgent.indexOf("Edge") == -1&&userAgent.indexOf("QQBrowser") == -1 ; 
    if(isChrome){
        $('video').remove();
    }

    var flagTrouble = true;
    var flagIntro = true;
    var flagAdvantage = true;
    var flagService = true;
    var flagFlow = true;
    var flagSence = true;
    var flagPartner = true;
    var flagNews = true;

    function topShow(){
        var h = $(document).scrollTop();
        if(h>100 && flagTrouble){          
            $('.common_trouble').animate({left:[-1500,'easeInOutBack'],'opacity':1},900);
            $('.trouble_out').animate({'left':-1500},500);
            $('.trouble_within').animate({'top':169,'opacity':1},800);
            flagTrouble = false;
        }
        if(h>700 && flagIntro){         
            $('.common_intro').animate({'left':[-1500,'easeInOutBack'],'opacity':1},900);
            $('.intro_tontent ul li:eq(0)').delay(200).animate({'top':0,'opacity':1},900);
            $('.intro_tontent ul li:eq(1)').delay(400).animate({'top':0,'opacity':1},900);
            $('.intro_tontent ul li:eq(2)').delay(600).animate({'top':0,'opacity':1},900);
            $('.intro_tontent ul li:eq(3)').delay(800).animate({'top':0,'opacity':1},900);
            flagIntro = false;
        }
        if(h>1300 && flagAdvantage){
            $('.common_advantage').animate({'left':[-1500,'easeInOutBack'],'opacity':1},900);
            $('.advantage_out').animate({'left':-1500},500);
            flagAdvantage = false;
        }
        if(h>1700 && flagService){
            $('.common_service').animate({'left':[-1500,'easeInOutBack'],'opacity':1},900);
            $('.service_out').delay(500).fadeIn(3000);
            flagService = false;
        }
        if(h>2500 && flagFlow){
            $('.common_flow').animate({'left':[-1500,'easeInOutBack'],'opacity':1},900);
            $('.flow_intro').animate({'right':-1500},700);
            $('.flow_out').animate({'left':-1500},500);
            flagFlow = false;
        }
        if(h>3000 && flagSence){
            $('.common_sence').animate({'left':[-1500,'easeInOutBack'],'opacity':1},900);
            $('.sence_out').animate({'left':-1500},700);
            flagSence = false;
        }
        if(h>3600 && flagPartner){
            $('.common_partner').animate({'left':[-1500,'easeInOutBack'],'opacity':1},900);
            $('.partner_out').animate({'left':-1500},700);
            flagPartner = false;
        }
        if(h>4200 && flagNews){
            $('.common_news').animate({'left':[-1500,'easeInOutBack'],'opacity':1},900);
            $('.news_out').animate({'left':-1500},700);
            flagNews = false;
        }
    }
     
    //百叶窗
    topShow();   
    $(window).scroll(function () {
        topShow();  
    })

        

   

    //二、banner 部分轮播图
    var swiper = new Swiper('.swiper-container', {
        autoplay: {
            disableOnInteraction: false
        },
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        loop:true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });


    
    //六、背调服务翻转

    $('.back_service_content').mouseover(function(){
        $(this).parent().removeClass('fanzhuan1').addClass('fanzhuan2'); //front
        $(this).parent().addClass('fanzhuanmargin'); //front 
        $(this).parent().next().addClass('fanzhuan1'); //back
        $(this).parent().parent().siblings('li').children('.front').removeClass('fanzhuan2').addClass('fanzhuan1'); 
        $(this).parent().parent().siblings('li').children('.front').removeClass('fanzhuanmargin');
        $(this).parent().parent().siblings('li').children('.back').removeClass('fanzhuan1').addClass('fanzhuan2');
	})
    $('.back_service_content1').mouseleave(function(){
        $(this).parent().prev().addClass('fanzhuan1').removeClass('fanzhuan2'); //front
        $(this).parent().prev().removeClass('fanzhuanmargin'); //front
        $(this).parent().removeClass('fanzhuan1'); //back
        $(this).parent().parent().siblings('li').children('.front').removeClass('fanzhuan2').addClass('fanzhuan1');
        $(this).parent().parent().siblings('li').children('.back').removeClass('fanzhuan1').addClass('fanzhuan2');
    })

    // 十、新闻咨询
   
    var startIndex = 0;
    var pageLimit = 4;
    $.ajax({
        type: 'post',
        url: 'https://api.funinhr.com/api/news/getList',
        dataType: 'json',
        data: { pageStart: startIndex,pageLimit:pageLimit },
        success: function (data) {
            startIndex = startIndex + 6;
            $('.news_out').attr('index', startIndex);
            var contentList = '';
            $(data).each(function (i, v) {
                var cid = v.cid;
                var time = v.time;
                var description = v.description;
                var title = v.title;
                var newsUrl = v.newsUrl;    
                var descriptionLength = description.length;
                var titleLength = title.length;
                if (titleLength>26) {
                    title = title.substring(0,26) + '...';
                }
                if (descriptionLength>20) {
                    description = description.substring(0, 20) + '...';
                }
                var content =
                        '<li cid="'+cid+'" newsUrl="'+newsUrl+'">'+
                            '<p class="newsTitle">'+title+'</p>'+
                            '<p>'+time+'<span>'+description+'</span>'+'</p>'+
                        '</li>'
                contentList += content;
            })
            $('.news_r ul').html(contentList);
        }
    })

    $('.news_r').on('click','.newsTitle',function(){
        var newsUrl = $(this).parent().attr('newsUrl');
        window.location.href = newsUrl;
    })

    //背调跳转
    $('.back_service_b1').click(function(){
        window.location.href = "http://hr.ezhixin.com/login"
    })

});



