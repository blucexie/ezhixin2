
var browser = {
    versions: function () {
        var u = navigator.userAgent,
            app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
            weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
            qq: u.match(/\sQQ/i) == " qq" //是否QQ
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    //判断iPhone|iPad|iPod|iOS
    $('.downLoadBtn').attr('href', "itms-apps://itunes.apple.com/cn/app/id1321810579")
}
else if (/(Android)/i.test(navigator.userAgent)) {
    //判断Android
    $('.downLoadBtn').attr('href', "market://details?id=com.funinhr.app")
}

//默认新闻渲染
var startIndex = 0;
$.ajax({
    type: 'post',
    url: 'https://api.funinhr.com/api/news/getList',
    dataType: 'json',
    data: { pageStart: startIndex },
    success: function (data) {
        startIndex = startIndex + 5;
        $('.news').attr('index', startIndex);
        var contentList = '';
        $(data).each(function (i, v) {
            var time = v.time;
            var timeMonth = time.substr(6, 1)
            var timeData = time.substr(8, 2)
            var description = v.description;
            var title = v.title;
            var descriptionLength = description.length;
            var titleLength = title.length;
            if (titleLength>20) {
                title = title.substring(0,20) + '...';
            }
            if (descriptionLength>37) {
                description = description.substring(0, 37) + '...' + '<span>' + '点击全文》' + '</span>';
            }else{
                description = '<span>' + '点击全文》' + '</span>';
            }
            var content =
                '<li>'
                + '<div class="news_l">'
                + '<div>'
                + timeData
                + '</div>'
                + '<p>' + timeMonth + '</p>'
                + '</div>'
                + '<div class="news_r">'
                + '<p>' + title + '</p>'
                + '<p class="news_content">' + description + '</p>'
                + '</div>'
                + '</li>'
            
            contentList += content;
        })
        $('.news ul').html(contentList);
    }
})

//手机内容切换轮播
$(function () {
    $(".carousel-content").carousel({
        carousel: ".carousel", //轮播图容器
        indexContainer: ".img-index", //下标容器
        prev: ".carousel-prev", //左按钮
        next: ".carousel-next", //右按钮
        timing: 3000, //自动播放间隔
        animateTime: 700, //动画时间
        autoPlay: true, //是否自动播放 true/false
        direction: "left", //滚动方向 right/left
    });
});

//三重信息安全保障
var swiper = new Swiper('.section4 .swiper-container', {
    autoplay: {
        disableOnInteraction: false
    },
    speed: 500,
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.section4 .swiper-pagination',
        clickable: true,
    },
});

//新闻中心判断省略
$('.news_content').each(function () {
    var textLength = $(this).text().length;
    if (textLength > 37) {
        var html = $(this).text().substring(0, 37) + '...' + '<span>' + '点击全文》' + '</span>';
        $(this).html('').html(html);
    } else {
        var html = $(this).text() + '<span>' + '点击全文》' + '</span>';
        $(this).html('').html(html);
    }
})

//返回顶部
$(window).scroll(function () {
    var h = $(window).scrollTop();
    if (h > 500) {
        $('.toTop').fadeIn(500);
    } else {
        $('.toTop').fadeOut(500);
    }
})
$('.toTop').click(function () {
    $("html,body").animate({ scrollTop: 0 }, 500);
})

//查看更多(待完善)

$('.more_content').click(function () {
    var index = Number($('.news').attr('index'));
    $.ajax({
        type: 'post',
        url: 'https://api.funinhr.com/api/news/getList',
        dataType: 'json',
        data: { pageStart: index },
        success: function (data) {
            if(data.length<5){
                $('.more_content').hide();
                var moreContent = '<div class="more_content1">'+'回到首页'+'</div>';
                $('.more').append(moreContent);
            }
            $('.news ul li').each(function () {
                $(this).remove();
            })
            index = index + 5;
            $('.news').attr('index', index);
            var contentList = '';
            $(data).each(function (i, v) {
                var time = v.time;
                var timeMonth = time.substr(6, 1)
                var timeData = time.substr(8, 2)
                var description = v.description;
                var title = v.title;
                var descriptionLength = description.length;
                var titleLength = title.length;
                if (titleLength>20) {
                    title = title.substring(0,20) + '...';
                }
                if (descriptionLength>37) {
                    description = description.substring(0, 37) + '...' + '<span>' + '点击全文》' + '</span>';
                }else{
                    description = '<span>' + '点击全文》' + '</span>';
                }
                var content =
                    '<li>'
                    + '<div class="news_l">'
                    + '<div>'
                    + timeData
                    + '</div>'
                    + '<p>' + timeMonth + '</p>'
                    + '</div>'
                    + '<div class="news_r">'
                    + '<p>' + title + '</p>'
                    + '<p class="news_content">' + description + '</p>'
                    + '</div>'
                    + '</li>'
                
                contentList += content;
            })
            $('.news ul').html(contentList);
        }
    })
})

$('.more').on('click','.more_content1',function(){
    $('.more_content').show();
    $(this).remove();
    var returnIndex = 0;
    $('.news').attr('index',returnIndex);
    $.ajax({
        type: 'post',
        url: 'https://api.funinhr.com/api/news/getList',
        dataType: 'json',
        data: { pageStart: returnIndex },
        success: function (data) {
            returnIndex = returnIndex + 5;
            $('.news').attr('index',returnIndex);
            $('.news ul li').each(function () {
                $(this).remove();
            })
            var contentList = '';
            $(data).each(function (i, v) {
                var time = v.time;
                var a = Number(time.substr(5,1));
                var timeMonth;
                if(a<1){
                   timeMonth = time.substr(6, 1)
                }else{
                   timeMonth = time.substr(5, 2)
                }
                var timeData = time.substr(8, 2)
                var description = v.description;
                var title = v.title;
                var descriptionLength = description.length;
                var titleLength = title.length;
                if (titleLength>20) {
                    title = title.substring(0,20) + '...';
                }
                if (descriptionLength>37) {
                    description = description.substring(0, 37) + '...' + '<span>' + '点击全文》' + '</span>';
                }else{
                    description = '<span>' + '点击全文》' + '</span>';
                }
                var content =
                    '<li>'
                    + '<div class="news_l">'
                    + '<div>'
                    + timeData
                    + '</div>'
                    + '<p>' + timeMonth + '</p>'
                    + '</div>'
                    + '<div class="news_r">'
                    + '<p>' + title + '</p>'
                    + '<p class="news_content">' + description + '</p>'
                    + '</div>'
                    + '</li>'
                
                contentList += content;
            })
            $('.news ul').html(contentList);
        }
    })
})
