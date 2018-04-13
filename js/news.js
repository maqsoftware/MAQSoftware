/*jslint plusplus: true */

"use strict";
var oNewsPager = {
    template: '<div><div class="post-meta"><span>@date</span></div><div class="post-header"><h2>@title</h2>' +
                    //    '<div class="social-media-share">' +

                    //    '<div class="fb-share-button share-button" data-href="@newslink" data-summary="summary" data-description="description" data-desc="desc" data-layout="button_count" data-size="small" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=@fbunewslink&amp;src=sdkpreparse&amp;t=thisisdynamictitle">Share</a></div>' +



                    //    '<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" data-url="@twitternewslink" class="twitter-share-button share-button" data-text="@linktitle" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>' +



                    //    '<span class="linkedin-share-button share-button">' +
                    //        '<script src="//platform.linkedin.com/in.js" type="text/javascript"> lang: en_US</script>' +
                    //        '<script type="IN/Share" data-title="data-title" data-url="@linkedinnewslink" data-counter="right"></script>' +
                    //    '</span>' +
                    //    '<a href="http://www.linkedin.com/shareArticle?mini=true&summary=@lnsummary&url=@lnurl&submitted-image-url=https://vijayagowrisankar.files.wordpress.com/2017/12/23.png?w=611&title=@lntitle&source=@lnsource" rel="nofollow">Share on LinkedIn</a>' +
                    //    '<span onClick=facebookShare("http://stravisocapture.000webhostapp.com/fbtest.html","thisismycustomtitle","thisiscustomdescription","https://vijayagowrisankar.files.wordpress.com/2017/12/23.png?w=611")>Share on Facebook</span>' +

                    //'</div>' +
                '</div>',
    templatePostMedia: '<div class="post-media"><img alt="News" title="@tooltip" src="@newsimagesrc"></div>',
    templatePostContent: '<div class="post-entry">@content</div></div>',
    pageIndex: 0,
    pagesize: 6
}, id, highlightid, sClickedHighlightTitle, iClickedHighlightID, sArticle,
iTotalNews = 0,
iIterator = 0,
iMaxPageIndex,
oNewsData = null,
oNewsContainer,
sScrollElement = "body,html",
sLoadingClass = "Loading",
    oItalicBookName = [
                    "What I Did Not Learn in B-School: Insights for New Managers"
                    , "What I Did Not Learn at IIT: Transition from Campus to Workplace"
                    , "What I Did Not Learn at IIT - Transitioning from Campus to Workplace"
    ], iCount, iTotal = oItalicBookName.length, iTotalHighlight = 6, oNewsHighlightTitle = [iTotalHighlight], oHighlightNewsID = [iTotalHighlight]
    , bIsNewsHighlightLoaded = false, bIsNewsLoaded = false;

// below function we had created for facebook share POC
//function facebookShare(sURL, sTitle, sDescription, sImageURL) {
//    FB.ui({
//        method: 'share_open_graph',
//        action_type: 'og.shares',
//        action_properties: JSON.stringify({
//            object: {
//                'og:url': sURL, // your url to share
//                'og:title': sTitle,
//                'og:description': sDescription,
//                'og:image': sImageURL
//            }
//        })
//    },
//            // callback
//            function (response) {
//                if (response && !response.error_message) {
//                    // then get post content
//                    alert('successfully posted. Status id : ' + response.post_id);
//                } else {
//                    alert('Something went error.');
//                }
//            });
//}

function renderNews() {
    var iStart, iEnd, entry1, sDate, oDatePart, oDate, sTitle, sRawTitle, sContent;
    oNewsContainer.removeClass(sLoadingClass);
    if (iTotalNews) {
        if (sArticle) {
            iTotal = oNewsData.getElementsByTagName('entry').length;
            for (iIterator = 0; iIterator < iTotal; iIterator++) {
                entry1 = oNewsData.getElementsByTagName('entry').item(iIterator);
                sTitle = entry1.getElementsByTagName('title')[0].childNodes[0].nodeValue;
                if (sTitle === sArticle) {
                    oNewsPager.pageIndex = parseInt(iIterator / oNewsPager.pagesize);
                    id = (iIterator + 1) % oNewsPager.pagesize;
                    id = id === 0 ? oNewsPager.pagesize : id;
                    sArticle = undefined;   // resetting so that same will not be loaded on pagination button clicks
                    break;
                }
            }
        }
        iStart = oNewsPager.pageIndex * oNewsPager.pagesize;
        if (iStart >= iTotalNews) {
            iStart = iTotalNews - 1;
            oNewsPager.pageIndex = iStart;
            if (iTotalNews > 1) {
                $("#Previous").removeClass("hidden");
                $("#Next").addClass("hidden");
            }
        } else if (iStart <= 0) {
            iStart = 0;
            oNewsPager.pageIndex = iStart;
            if (iTotalNews > 1) {
                $("#Next").removeClass("hidden");
                $("#Previous").addClass("hidden");
            }
        }
        iEnd = iStart + oNewsPager.pagesize;
        if (iEnd > iTotalNews) {
            iEnd = iTotalNews;
        }
        for (iIterator = iStart; iIterator < iEnd; iIterator++) {
            entry1 = oNewsData.getElementsByTagName('entry').item(iIterator);
            if (entry1) {
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
                sTitle = entry1.getElementsByTagName('title')[0].childNodes[0].nodeValue;
                sRawTitle = sTitle;
                sContent = entry1.getElementsByTagName('content')[0].childNodes[0].nodeValue;
                for (iCount = 0; iCount < iTotal; iCount++) {
                    sTitle = sTitle.replace(oItalicBookName[iCount], "<i class='SemiBold'>" + oItalicBookName[iCount] + "</i>");
                }

                $("#bloggerContent").html(sContent);
                var bloggerContent = document.getElementById("bloggerContent");
                var imgs = bloggerContent.getElementsByTagName('img');
                var img, src = "";
                var myTemplate = oNewsPager.template;
                if (typeof imgs !== "undefined" && imgs.length > 0) {
                    img = imgs[0];
                    src = img.src;
                    img.parentNode.removeChild(img);
                    myTemplate = myTemplate + oNewsPager.templatePostMedia;
                }
                myTemplate = myTemplate + oNewsPager.templatePostContent;

                sContent = $("#bloggerContent").html();

                var sContent = myTemplate.replace("@title", sTitle)
                                    .replace("@date", oDate)
                                    .replace("@content", sContent)
                                    .replace("@newsimagesrc", src)
                                    .replace("@fbunewslink", "https://maqsoftware.com/news?article=" + sRawTitle)
                                    .replace("@newslink", "https://maqsoftware.com/news?article=" + sRawTitle)
                                    .replace("@twitternewslink", encodeURI("https://maqsoftware.com/news?article=" + sRawTitle))
                                    .replace("@linkedinnewslink", encodeURI("https://maqsoftware.com/news?article=" + sRawTitle))
                                    .replace("@lnurl", encodeURI("https://maqsoftware.com/news?article=" + sRawTitle))
                                    .replace("@linktitle", sRawTitle.substr(0, 200))
                                    .replace("@lnsummary", sRawTitle.substr(0, 256))
                                    .replace("@lntitle", sRawTitle)
                                    .replace("@lnsource", "MAQ Software")
                                    .replace("@tooltip", getFirstNWordsWithEllipses(sTitle, 4));
                oNewsContainer.append(sContent);

            }
        }
        oNewsContainer.find("a").attr("target", "_blank");
        oNewsContainer.find("img").addClass("post - media");

        $('#LoadPageNews *').removeAttr('style');
        for (var iCount = 0; iCount < iTotalHighlight; iCount++) {
            for (iIterator = 0; iIterator < iTotalNews; iIterator++) {
                entry1 = oNewsData.getElementsByTagName('entry').item(iIterator);
                if (entry1) {
                    sTitle = entry1.getElementsByTagName('title')[0].childNodes[0].nodeValue;
                    if (sTitle === oNewsHighlightTitle[iCount]) {
                        oHighlightNewsID[iCount] = iIterator;
                        break;
                    }
                }
            }
        }
    }
}
function loadNews(sNewsData) {
    try {
        var parser = new DOMParser();
        oNewsData = parser.parseFromString(sNewsData, "text/xml");
        iTotalNews = oNewsData.getElementsByTagName('entry').length;
        if (iTotalNews || oNewsData.getElementsByTagName('content')) {
            iMaxPageIndex = Math.round(iTotalNews / oNewsPager.pagesize);
            $("#Pagination").show();
            renderNews();
        }
    } catch (ignore) {
    }
    bIsNewsLoaded = true;
}

function loadNewsHighlightSection() {
    $.ajax({
        url: 'https://www.blogger.com/feeds/2523158019509365490/posts/default/-/Highlight',
        type: 'GET',
        dataType: 'jsonp',
        success: function (sResponse) {
            loadNewsHighlight(sResponse);
        },
        error: function () {
            bIsNewsHighlightLoaded = true;
        }
    });
}
function loadNewsHighlight(sNewsData) {
    try {
        var parser = new DOMParser();
        oNewsData = parser.parseFromString(sNewsData, "text/xml");
        iTotalNews = oNewsData.getElementsByTagName('entry').length;
        renderNewsHighlight();
    } catch (ignore) {
    }
    bIsNewsHighlightLoaded = true;
}
function renderNewsHighlight() {

    var iStart, iEnd, entry1//, sDate
        , oDatePart, oDate, iTotalNews = 0, iNumber;
    if (typeof oNewsData !== "undefined") {
        iEnd = oNewsData.getElementsByTagName('entry').length;
        for (iStart = 0; iStart < iTotalHighlight && iStart < iEnd; iStart++) {
            iNumber = iStart + 1;
            entry1 = oNewsData.getElementsByTagName('entry').item(iStart);
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
            var sRawTitle = title;
            oNewsHighlightTitle[iStart] = title;
            for (iCount = 0; iCount < iTotal; iCount++) {
                title = title.replace(oItalicBookName[iCount], "<i class = 'SemiBold'>" + oItalicBookName[iCount] + "</i>");
            }

            $("#newshighlighttitle" + iNumber).html(title);
            $("#newshighlightimg" + iNumber).attr('src', src);
            $("#newshighlightimg" + iNumber).attr('title', getFirstNWordsWithEllipses(title, 4));
            $(".newslink" + iNumber).attr('href', "/news?article=" + sRawTitle);
        }
    }
}

function loadNewsGrid() {
    var iTop, iCounter;
    oNewsContainer.html("").addClass(sLoadingClass);
    $.ajax({
        url: 'https://www.blogger.com/feeds/2523158019509365490/posts/default/-/News',
        type: 'GET',
        dataType: 'jsonp',
        success: function (sResponse) {
            loadNews(sResponse);
            if (typeof highlightid !== "undefined" && highlightid !== "") {
                //debugger;
                //while (!bIsNewsHighlightLoaded) {
                //    setTimeout(
                //      function () {
                //          // wait
                //      }, 2000);
                //    continue;
                //}
                highlightid = parseInt(iClickedHighlightID % oNewsPager.pagesize);
                iTop = $("#LoadPageNews").children('div').eq(highlightid).offset().top - 65;
                console.log('top: ' + iTop + ' - ' + (highlightid));
                $(sScrollElement).animate({
                    scrollTop: iTop
                }, 500);
            } else if (typeof id !== "undefined" && id !== "") {
                //debugger;
                iCounter = 1;
                while (!bIsNewsHighlightLoaded || !bIsNewsLoaded) {
                    setTimeout(
                      function () {
                          iCounter++;
                      }, 2000);
                    if (iCounter >= 10) {
                        break;
                    }
                    continue;
                }

                setTimeout(
                      function () {
                          id = id % oNewsPager.pagesize;
                          id = id === 0 ? oNewsPager.pagesize : id;
                          //-$("#highlights").offset().top
                          iTop = $("#LoadPageNews").children('div').eq(id - 1).offset().top - 65; // 65 for header
                          console.log('top: ' + iTop + ' - ' + (id - 1));
                          $(sScrollElement).animate({
                              scrollTop: iTop
                          }, 500);
                      }, 1000);

            }
            initHighlightCarousal();
        },
        complete: function () {
            oNewsContainer.removeClass(sLoadingClass);
        }
    });
}

function initHighlightCarousal() {
    $('.item4-carousel').owlCarousel({
        autoPlay: 2500,
        autoplay: 2500,
        slideSpeed: 800,
        slidespeed: 800,
        autoplaySpeed: 800,
        navSpeed: 800,
        paginationSpeed: 800,
        stopOnHover: true,
        items: 4,
        rewind: true,
        loop: true,
        itemsDesktop: [1170, 3],
        itemsDesktopSmall: [1024, 2],
        itemsTabletSmall: [768, 1],
        itemsMobile: [480, 1],
        pagination: false,  // Hide pagination buttons
        navigation: true,  // Show next and prev buttons
        nav: true,  // Show next and prev buttons
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots: false
        ,responsive: {
            0: {
                items: 1
            }
            ,
            570: {
                items: 2
            }
            ,
            855: {
                items: 3
            }
            , 1140: {
                items: 4
            }
        }
    });
}

function newsConstructor() {
    //debugger;
    try {
        loadNewsHighlightSection();
    } catch (ex) {
        // ignore
    }

    oNewsPager.pageIndex = 0;
    highlightid = "";
    oNewsContainer = $("#LoadPageNews");
    var iTop = 0;
    id = getParameterByName("id");
    sArticle = getParameterByName("article");
    if (typeof id !== "undefined" && id !== "") {
        $(sScrollElement).animate({
            scrollTop: iTop
        }, 500);
        oNewsPager.pageIndex = parseInt(id / oNewsPager.pagesize)

    }

    loadNewsGrid();

    $("#Pagination p").click(function () {
        var oCurrentElement = $(this),
            iClicked = oCurrentElement.attr("data-clicked");
        if (!oCurrentElement.hasClass("hidden")) {
            if (iClicked === "0") {
                oNewsPager.pageIndex--;
                $("#Next").removeClass("hidden");
                if (oNewsPager.pageIndex <= 0) {
                    oNewsPager.pageIndex = 0;
                    $("#Previous").addClass("hidden");
                }
            } else {
                oNewsPager.pageIndex++;
                if (oNewsPager.pageIndex >= iMaxPageIndex) {
                    oNewsPager.pageIndex = iMaxPageIndex;
                    $("#Next").addClass("hidden");
                } else {
                    $("#Previous").removeClass("hidden");
                }
            }
            oNewsContainer.html("").addClass(sLoadingClass);
            iTop = oNewsContainer.offset().top - 65; // -65 for header/padding
            $(sScrollElement).animate({ scrollTop: iTop }, 500);
            renderNews();
        }
    });

    //$(".news-highlight").unbind("click");
    //$(".news-highlight").click(function () {
    //    highlightid = $(this).attr("data-clicked");
    //    if (typeof highlightid !== "undefined" && highlightid !== "") {
    //        //$(sScrollElement).animate({ scrollTop: iTop }, 500);
    //        sClickedHighlightTitle = oNewsHighlightTitle[highlightid - 1];
    //        iClickedHighlightID = oHighlightNewsID[highlightid - 1];
    //        oNewsPager.pageIndex = parseInt((iClickedHighlightID + 1) / oNewsPager.pagesize);
    //        loadNewsGrid();
    //        if (oNewsPager.pageIndex <= 0) {
    //            oNewsPager.pageIndex = 0;
    //            $("#Previous").addClass("hidden");
    //        }
    //        if (oNewsPager.pageIndex >= iMaxPageIndex) {
    //            oNewsPager.pageIndex = iMaxPageIndex;
    //            $("#Next").addClass("hidden");
    //        } else {
    //            $("#Previous").removeClass("hidden");
    //        }
    //    }
    //});
};
