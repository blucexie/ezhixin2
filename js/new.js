//默认新闻渲染
var startIndex = 0;
var pageLimit = 6;
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
            var hasMore = v.hasMore;
            if (hasMore == false) {
                $('.check_btn').remove();
            }
            var cid = v.cid;
            var time = v.time;
            var a = Number(time.substr(5,1));
            var timeMonth;
            if(a<1){
               timeMonth = time.substr(6, 1)
            }else{
               timeMonth = time.substr(5, 2)
            }
            var b = Number(time.substr(8,1));
            var timeData;
            if(b<1){
                timeData = time.substr(9, 1)
             }else{
                timeData = time.substr(8, 2)
             }
            var description = v.description;
            var title = v.title;
            var descriptionLength = description.length;
            var titleLength = title.length;
            var imgUrl = v.imgUrl;
            var newsUrl = v.newsUrl;
            if (titleLength>60) {
                title = title.substring(0,60) + '...';
            }
            if (descriptionLength>180) {
                description = description.substring(0, 180) + '...';
            }
            var content =
           
            '<li cid="'+cid+'" newsUrl="'+newsUrl+'">'+
                '<div class="data">'+
                    '<div class="data_l">'+'</div>'+
                    '<span>'+timeMonth+'</span>'+'<span>'+'月'+'</span>'+'<span>'+timeData+'</span>'+'<span>'+'日'+'</span>'+
                '</div>'+
                '<div class="news_box"> '+   
                        '<div class="news_l">'+
                            '<p class="newsTitle">'+title+'</p>'+
                            '<div class="cutOff">'+'</div>'+
                            '<p class="news_con">'+description+'</p>'+
                            '<span class="news_more">'+'查看全部》'+'</span>'+
                        '</div>'+
                        '<div class="news_r">'+
                            '<img src="'+imgUrl+'" alt="">'+
                        '</div>'+
                '</div>'+
            '</li>'
            
            contentList += content;
        })
        $('.news ul').html(contentList);
    }

  
})
$('.news').on('click','.news_more',function(){
    var newsUrl = $(this).parent().parent().parent().attr('newsUrl');
    window.location.href = newsUrl;
})


$('.check_btn').click(function () {
    var that = this;
    var contentUl = '';
    $.ajax({
        type: 'post',
        url: 'https://api.funinhr.com/api/news/getList',
        dataType: 'json',
        data: { pageStart: startIndex, pageLimit: pageLimit },
        success: function (data) {
            startIndex = startIndex + 6;
            $('.news_out').attr('index', startIndex);
            var contentList = '';
            $(data).each(function (i, v) {
                var cid = v.cid;
                var newsUrl = v.newsUrl;
                var hasMore = v.hasMore;
                if(hasMore==false){
                    $('.check_btn').remove();
                }
                var time = v.time;
                var a = Number(time.substr(5, 1));
                var timeMonth;
                if (a < 1) {
                    timeMonth = time.substr(6, 1)
                } else {
                    timeMonth = time.substr(5, 2)
                }
                var b = Number(time.substr(8, 1));
                var timeData;
                if (b < 1) {
                    timeData = time.substr(9, 1)
                } else {
                    timeData = time.substr(8, 2)
                }
                var description = v.description;
                var title = v.title;
                var descriptionLength = description.length;
                var titleLength = title.length;
                var imgUrl = v.imgUrl;
                if (titleLength > 60) {
                    title = title.substring(0, 60) + '...';
                }
                if (descriptionLength > 200) {
                    description = description.substring(0, 200) + '...';
                }
                var content =
                    '<li cid="' + cid + '" newsUrl="'+newsUrl+'">' +
                    '<div class="data">' +
                    '<div class="data_l">' + '</div>' +
                    '<span>' + timeMonth + '</span>' + '<span>' + '月' + '</span>' + '<span>' + timeData + '</span>' + '<span>' + '日' + '</span>' +
                    '</div>' +
                    '<div class="news_box"> ' +
                    '<div class="news_l">' +
                    '<p class="newsTitle">' + title + '</p>' +
                    '<div class="cutOff">' + '</div>' +
                    '<p class="news_con">' + description + '</p>' +
                    '<span class="news_more">' + '查看全部》' + '</span>' +
                    '</div>' +
                    '<div class="news_r">' +
                    '<img src="' + imgUrl + '" alt="">' +
                    '</div>' +
                    '</div>' +
                    '</li>'
                contentList += content;
            })
            var contentUl = '<ul>' + contentList + '</ul>'
            $('.news_content').append(contentUl);
        }
    })
})  