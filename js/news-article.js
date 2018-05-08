/*jslint plusplus: true */
"use strict";
var oNewsArticlePager = {
    template: '<div> <div class="post-meta"><span>@date</span></div><div class="post-header" id="post-share"></div><div class="post-media"><img alt="News" title="@tooltip" src="@newsimagesrc"></div><div class="post-entry">@content</div></div>',
    socialMediatemplate: "<h2>@title</h2> <div class='social-media-share'><div class='fb-share-button share-button' data-href='@newslink' data-layout='button_count' data-size='small' data-mobile-iframe='true'><a class='fb-xfbml-parse-ignore' target='_blank' href='https://www.facebook.com/sharer/sharer.php?u=@fbunewslink&amp;src=sdkpreparse'> <span class='fb-share-button share-button'> Share </span> </a></div> <a href='https://twitter.com/share?ref_src=twsrc%5etfw' data-via='maqsoftware' data-url='@twitternewslink' class='twitter-share-button share-button' data-text='@linktitle' data-show-count='true'></a> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script><span class='linkedin-share-button share-button'><script src='//platform.linkedin.com/in.js' type='text/javascript'> lang: en_us</script><script type='in/share' data-counter='right'></script></span> <a href='http://www.linkedin.com/sharearticle?mini=true&summary=@lnsummary&url=@lnurl&submitted-image-url=@newsimagesrc&image-url=https://maqsoftware.com/img/Banners/news.jpg&image=https://maqsoftware.com/img/Banners/news.jpg?w=611&title=@lntitle&source=@lnsource' rel='nofollow'></a></div>",
    pageIndex: 0,
    pagesize: 6
}, id, highlightid, sClickedHighlightTitle, iClickedHighlightID,
iTotalNews = 0,
iIterator = 0,
iMaxPageIndex,
oNewsData = null,
oEntryData = null,
oNewsContainer = $("#LoadPageNews"),
oShareContainer = $(".post-header"),
sScrollElement = "body,html",
sLoadingClass = "Loading",
    oItalicBookName = [
                    "What I Did Not Learn in B-School: Insights for New Managers"
                    , "What I Did Not Learn at IIT: Transition from Campus to Workplace"
                    , "What I Did Not Learn at IIT - Transitioning from Campus to Workplace"
    ], iCount, iTotal = oItalicBookName.length, iTotalHighlight = 6, oNewsHighlightTitle = [iTotalHighlight], oHighlightNewsID = [iTotalHighlight];
var newsTitle;
function readQueryParams() {
    var params = (new URL(document.location)).searchParams;
    newsTitle = unescape(params.get("title"));
    if (typeof newsTitle !== 'undefined' && newsTitle !== 'null' && newsTitle !== "" && newsTitle !== 'false') {
        loadNewsGrid();
    }
    else {
        window.location.href = "/news.html";
    }
}

window.onload = readQueryParams;

function loadNewsGrid() {
    var iTop;
    oNewsContainer.html("").addClass(sLoadingClass);
    $.ajax({
        url: 'https://www.blogger.com/feeds/2523158019509365490/posts/default/-/News',
        type: 'GET',
        dataType: 'jsonp',
        success: function (sResponse) {
            loadNews(sResponse);
        },
        complete: function () {
            oNewsContainer.removeClass(sLoadingClass);
        }
    });
}
function loadNews(sNewsData) {
    try {
        var parser = new DOMParser();
        var requiredNewsIndex;
        oNewsData = parser.parseFromString(sNewsData, "text/xml");
        oEntryData = oNewsData.getElementsByTagName('entry');
        iTotalNews = oEntryData.length;
        for (var iCount = 0; iCount < iTotalNews; iCount++) {
            if (newsTitle === oEntryData[iCount].getElementsByTagName('title')[0].textContent) {
                requiredNewsIndex = iCount;
                break;
            }
        }
        oEntryData = oEntryData[requiredNewsIndex];
        if (iTotalNews || oNewsData.getElementsByTagName('content')) {
            oNewsContainer.html("").addClass(sLoadingClass);
            renderNews();
        }
    } catch (ignore) {
    }
}
function renderNews() {
    var iStart, iEnd, entry1, sDate, oDatePart, oDate, sTitle, sContent, sRawTitle;
    if (iTotalNews) {

        entry1 = oEntryData;
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

            if (typeof imgs !== "undefined" && imgs.length > 0) {
                img = imgs[0];
                src = img.src;
                img.parentNode.removeChild(img);
            }
            sContent = $("#bloggerContent").html();
            oNewsContainer.addClass(sLoadingClass);
            oNewsContainer.append(oNewsArticlePager.template.replace("@date", oDate).replace("@content", sContent).replace(/@newsimagesrc/g, src).replace("@tooltip", getFirstNWordsWithEllipses(sRawTitle, 4)));
            var pageURL = document.location.href;
            setTimeout(function () {
                $(".post-header").append(oNewsArticlePager.socialMediatemplate.replace(/@title/g, sTitle).replace(/@newsimagesrc/g, src).replace("@fbunewslink", pageURL).replace("@newslink", pageURL).replace("@twitternewslink", pageURL).replace("@linkedinnewslink", pageURL)


                                .replace("@lnurl", pageURL)
                                .replace("@linktitle", sRawTitle.substr(0, 200))
                                .replace("@lnsummary", sRawTitle.substr(0, 256))
                                .replace("@lntitle", sRawTitle)
                                .replace("@lnsource", "MAQ Software"));

                FB.XFBML.parse();
            }, 1000);
           
        }

        oNewsContainer.find("a").attr("target", "_blank");
        oNewsContainer.find("img").addClass("post - media");


        $('#LoadPageNewsArticle *').removeAttr('style');


    }
}
