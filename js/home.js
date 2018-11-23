var sLoadingClass = "Loading",
            oItalicBookName = [
                            "What I Did Not Learn in B-School: Insights for New Managers"
                            , "What I Did Not Learn at IIT: Transition from Campus to Workplace"
                            , "What I Did Not Learn at IIT - Transitioning from Campus to Workplace"
            ], iCount, iTotal = oItalicBookName.length, iCounterFlag = 0; // a is flag variable for counter animation on home page

function loadNewsMainPage() {
    $.ajax({
        url: 'https://www.blogger.com/feeds/2523158019509365490/posts/default/-/News',
        type: 'GET',
        dataType: 'jsonp',
        success: function (sResponse_news) {
            loadBlogMainPage(sResponse_news);
        }
    });
}

function loadBlogMainPage(sResponse_news) {
    $.ajax({
        url: 'https://www.blogger.com/feeds/3262801613185975083/posts/default/',
        type: 'GET',
        dataType: 'jsonp',
        success: function (sResponse_blog) {
            loadNewsMain(sResponse_news,sResponse_blog);
        }
    });
}


function loadNewsMain(sResponse_news, sResponse_blog) {
    try {
        var parser = new DOMParser();
        oNewsData = parser.parseFromString(sResponse_news, "text/xml");
        oBlogData = parser.parseFromString(sResponse_blog, "text/xml");
        tp1 = oNewsData.getElementsByTagName('entry');
        //tp2 = parser.parseFromString(oNewsData.getElementsByTagName('entry').outerHtml(), "text/xml");
        iTotalNews = oNewsData.getElementsByTagName('entry').length;//+ oBlogData.getElementsByTagName('entry').length;
        oData = parser.parseFromString((oNewsData.getElementsByTagName('entry') + oBlogData.getElementsByTagName('entry')).toString(), "text/xml");
        //oNewsData.
        renderNewsMain();
    } catch (ignore) {
    }
}
function renderNewsMain() {

    var iStart, iEnd, entry1_news, entry1_blog, sDate_news, SDate_blog, oDatePart, oDate, iTotalNews = 0, iNumber;
    //debugger;
    if (typeof oNewsData !== "undefined" || typeof oBlogData !== "undefined" ) {
        iEnd_news = oNewsData.getElementsByTagName('entry').length;
        iEnd_blog = oBlogData.getElementsByTagName('entry').length;
        href_news = "/news";
        href_blog = "/blog";

        for (iStart = 0, n = 0, b = 0; iStart < 3 && iStart < iEnd_blog + iEnd_news  ; iStart++) {
            iNumber = iStart + 1;
            entry1_news = oNewsData.getElementsByTagName('entry').item(n);
            entry1_blog = oBlogData.getElementsByTagName('entry').item(b);

            if (entry1_news != null && entry1_blog != null) {
                sDate_news = entry1_news.getElementsByTagName('published')[0].childNodes[0].nodeValue.toLowerCase().split("t");
                oDate_news = format_date(sDate_news);
                sDate_blog = entry1_blog.getElementsByTagName('published')[0].childNodes[0].nodeValue.toLowerCase().split("t");
                oDate_blog = format_date(sDate_blog);

                if (oDate_news > oDate_blog) {
                    entry1 = entry1_news;
                    oDate = oDate_news;
                    href = href_news;
                    n++;
                }
                else {
                    entry1 = entry1_blog;
                    oDate = oDate_blog;
                    href = href_blog;
                    b++;
                }
            }
            else if (entry1_news == null) {
                sDate_blog = entry1_blog.getElementsByTagName('published')[0].childNodes[0].nodeValue.toLowerCase().split("t");
                oDate_blog = format_date(sDate_blog);
                entry1 = entry1_blog;
                oDate = oDate_blog;
                href = href_blog
                b++;
            }
            else if (entry1_blog == null) {
                sDate_news = entry1_news.getElementsByTagName('published')[0].childNodes[0].nodeValue.toLowerCase().split("t");
                oDate_news = format_date(sDate_news);
                entry1 = entry1_news;
                oDate = oDate_news;
                href = href_news;
                n++;
            }
            else
                break;
        
            $("#newsdate" + iNumber).html(oDate.format());
            var content = entry1.getElementsByTagName('content')[0].childNodes[0].nodeValue;
            $("#bloggerContent").html(content);
            var bloggerContent = document.getElementById("bloggerContent");
            var imgs = bloggerContent.getElementsByTagName('img');
            var img, src = "";

            if (typeof imgs !== "undefined" && imgs.length > 0) {
                img = imgs[0];
                src = img.src;
            }

            var title = entry1.getElementsByTagName('title')[0].childNodes[0].nodeValue;
            var STag = entry1.getElementsByTagName('category')[0].attributes["term"].nodeValue.toUpperCase() + " | ";
            //var href = entry1.getElementsByTagName('link')[2].attributes["href"].nodeValue;

            for (iCount = 0; iCount < iTotal; iCount++) {
                title = title.replace(oItalicBookName[iCount], "<i class = 'SemiBold'>" + oItalicBookName[iCount] + "</i>");
            }

            $("#stag" + iNumber).html(STag);
            $("#newstitle" + iNumber).html(title);
            $("#newsimg" + iNumber).attr('src', src);
            $("#img_href" + iNumber).attr('href', href);
            $("#newstitle" + iNumber).attr('href', href);
        }
    }
    //$('.subData *').removeAttr('style');
    //$('.subData').dotdotdot();
}

function setSliderNavigationButton() {
    var iHeight = $(".home-slider").height() + $("#header").height();
    var iPrevHeight = 51;
    var iTop = (iHeight - iPrevHeight) / 2;
    iTop -= 8;
    $(".fullwidth-slider .owl-controls .owl-buttons .owl-prev, .fullwidth-slider .owl-controls .owl-buttons .owl-next").css({ 'top': iTop + 'px' });
    $(".fullwidth-slider .owl-nav .owl-prev, .fullwidth-slider .owl-nav .owl-next").css({ 'top': iTop + 'px' });
}

function format_date(sDate_news)
{
    oDatePart = [];
    if (sDate_news[0]) {
        oDatePart = sDate_news[0].split("-");
    }
    oDate = null;
    if (oDatePart.length === 3) {
        oDate = new Date(oDatePart[0], (oDatePart[1] - 1), oDatePart[2]);
    } else {
        oDate = new Date(sDate_news[0]);
    }
    //oDate = oDate.format();
    return oDate
}