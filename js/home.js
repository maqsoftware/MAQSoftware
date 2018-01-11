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
        success: function (sResponse) {
            loadNewsMain(sResponse);
        }
    });
}
function loadNewsMain(sNewsData) {
    try {
        var parser = new DOMParser();
        oNewsData = parser.parseFromString(sNewsData, "text/xml");
        iTotalNews = oNewsData.getElementsByTagName('entry').length;
        renderNewsMain();
    } catch (ignore) {
    }
}
function renderNewsMain() {

    var iStart, iEnd, entry1, sDate, oDatePart, oDate, iTotalNews = 0, iNumber;
    //debugger;
    if (typeof oNewsData !== "undefined") {
        iEnd = oNewsData.getElementsByTagName('entry').length;
        for (iStart = 0; iStart < 6 && iStart < iEnd; iStart++) {
            iNumber = iStart + 1;
            entry1 = oNewsData.getElementsByTagName('entry').item(iStart);
            sDate = entry1.getElementsByTagName('published')[0].childNodes[0].nodeValue.toLowerCase().split("t");
            oDatePart = [];
            if (sDate[0]) {
                oDatePart = sDate[0].split("-");
            }
            oDate = null;
            if (oDatePart.length === 3) {
                oDate = new Date(oDatePart[0], (oDatePart[1] - 1), oDatePart[2]);
            } else {
                oDate = new Date(sDate[0]);
            }
            oDate = oDate.format();
            $("#newsdate" + iNumber).html(oDate);
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

            for (iCount = 0; iCount < iTotal; iCount++) {
                title = title.replace(oItalicBookName[iCount], "<i class = 'SemiBold'>" + oItalicBookName[iCount] + "</i>");
            }

            $("#newstitle" + iNumber).html(title);
            $("#newsimg" + iNumber).attr('src', src);
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