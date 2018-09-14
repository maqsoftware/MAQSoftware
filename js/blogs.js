/*jslint plusplus: true */

"use strict";
var oBlogsPager = {
    template: '<div><div class="post-meta"><span>@date</span></div><div class="post-header"><a href="@href"><h2>@title</h2></a></div></div><div class="blogpost-entry">@content</div><p class="blog-ellipsis"></p><a href="@href1" class="readmoreblog">Read more</a></div><div class="spacer-90"></div>',
    pageIndex: 0,
    pagesize: 6
}, id, highlightid, sClickedHighlightTitle, iClickedHighlightID,
iTotalBlogs = 0,
iIterator = 0,
iMaxPageIndex,
oBlogsData = null,
oBlogsContainer,
sScrollElement = "body,html",
sLoadingClass = "Loading",
     iCount, iTotalHighlight = 6, oBlogsHighlightTitle = [iTotalHighlight], oHighlightBlogsID = [iTotalHighlight];

function renderBlogs() {
    var iStart, iEnd, entry1, sDate, oDatePart, oDate, sTitle, sContent, sRawTitle, slink;
    oBlogsContainer.removeClass(sLoadingClass);
    if (iTotalBlogs) {
        iStart = oBlogsPager.pageIndex * oBlogsPager.pagesize;
        if (iStart >= iTotalBlogs) {
            iStart = iTotalBlogs - 1;
            oBlogsPager.pageIndex = iStart;
            if (iTotalBlogs > 1) {
                $("#Previous").removeClass("hidden");
                $("#Next").addClass("hidden");
            }
        } else if (iStart <= 0) {
            iStart = 0;
            oBlogsPager.pageIndex = iStart;
            if (iTotalBlogs > 1) {
                $("#Next").removeClass("hidden");
                $("#Previous").addClass("hidden");
            }
            else if (iTotalBlogs = 1) {
                $("#Next").addClass("hidden");
                $("#Previous").addClass("hidden");
            }
        }
        iEnd = iStart + oBlogsPager.pagesize;
        if (iEnd > iTotalBlogs) {
            iEnd = iTotalBlogs;
        }
        for (iIterator = iStart; iIterator < iEnd; iIterator++) {
            entry1 = oBlogsData.getElementsByTagName('entry').item(iIterator);
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
                slink = entry1.getElementsByTagName('link')[2].getAttribute('href');

                sContent = entry1.getElementsByTagName('content')[0].childNodes[0].nodeValue;

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
                oBlogsContainer.append(oBlogsPager.template.replace(/@title/g, sRawTitle).replace("@href", slink).replace("@date", oDate).replace("@content", sContent).replace("@href1", slink).replace("@tooltip", getFirstNWordsWithEllipses(sTitle, 4)));
            }
        }
        oBlogsContainer.find("img").addClass("post - media");

        $('#LoadPageBlogs *').removeAttr('style');
        for (var iCount = 0; iCount < iTotalHighlight; iCount++) {
            for (iIterator = 0; iIterator < iTotalBlogs; iIterator++) {
                entry1 = oBlogsData.getElementsByTagName('entry').item(iIterator);
                if (entry1) {
                    sTitle = entry1.getElementsByTagName('title')[0].childNodes[0].nodeValue;
                    if (sTitle === oBlogsHighlightTitle[iCount]) {
                        oHighlightBlogsID[iCount] = iIterator;
                        break;
                    }
                }
            }
        }
    }
}
function loadBlogs(sBlogsData) {
    try {
        var parser = new DOMParser();
        oBlogsData = parser.parseFromString(sBlogsData, "text/xml");
        iTotalBlogs = oBlogsData.getElementsByTagName('entry').length;
        if (iTotalBlogs || oBlogsData.getElementsByTagName('content')) {
            iMaxPageIndex = Math.round(iTotalBlogs / oBlogsPager.pagesize);
            //$("#Pagination").show();
            renderBlogs();
        }
    } catch (ignore) {
    }
}

function loadBlogsHighlightSection() {
    getBloggerData('https://www.blogger.com/feeds/3262801613185975083/posts/default/-/Highlight', loadBlogsHighlight, function () { });
}
function loadBlogsHighlight(sBlogsData) {
    try {
        var parser = new DOMParser();
        oBlogsData = parser.parseFromString(sBlogsData, "text/xml");
        iTotalBlogs = oBlogsData.getElementsByTagName('entry').length;
        renderBlogsHighlight();
    } catch (ignore) {
    }
}
function renderBlogsHighlight() {

    var iStart, iEnd, entry1//, sDate
        , oDatePart, oDate, iTotalBlogs = 0, iNumber;
    //debugger;
    if (typeof oBlogsData !== "undefined") {
        iEnd = oBlogsData.getElementsByTagName('entry').length;
        for (iStart = 0; iStart < iTotalHighlight && iStart < iEnd; iStart++) {
            iNumber = iStart + 1;
            entry1 = oBlogsData.getElementsByTagName('entry').item(iStart);
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
            oBlogsHighlightTitle[iStart] = title;
            $("#blogshighlighttitle" + iNumber).html(title);
            $("#blogshighlightimg" + iNumber).attr('src', src);
            $("#blogshighlightimg" + iNumber).attr('title', getFirstNWordsWithEllipses(title, 4));
        }
    }
}

function loadBlogsGrid() {
    oBlogsContainer.html("").addClass(sLoadingClass);
    getBloggerData('https://www.blogger.com/feeds/3262801613185975083/posts/default/-/Blogs', getBlogsSuccess, getBlogsOnComplete);
}
function getBlogsSuccess(sResponse) {
    var iTop;
    loadBlogs(sResponse);
    if (typeof highlightid !== "undefined" && highlightid !== "") {
        //debugger;
        highlightid = parseInt(iClickedHighlightID % oBlogsPager.pagesize);
        iTop = $("#LoadPageBlogs").children('div').eq(Number(highlightid) * 3).offset().top - 65;
        $(sScrollElement).animate({ scrollTop: iTop }, 300);
    } else if (typeof id !== "undefined" && id !== "") {
        //debugger;
        id = id > oBlogsPager.pagesize ? id - oBlogsPager.pagesize : id;
        iTop = $("#LoadPageBlogs").children('div').eq(id - 1).offset().top - $("#highlights").offset().top - 65 - 34; // 34 for date of blog
        $(sScrollElement).animate({ scrollTop: iTop }, 300);
    }
    BlogsSliderConfig();
}
function getBlogsOnComplete() {
    oBlogsContainer.removeClass(sLoadingClass);
}
function BlogsSliderConfig() {
    $.getJSON("/Configurations/NewsSlider.json", function (data) {
        initHighlightCarousal(data);
    })
};

function initHighlightCarousal(nSliderConfig) {
    if (typeof nSliderConfig !== 'undefined' && nSliderConfig !== 'null' && nSliderConfig !== "" && nSliderConfig !== 'false') {
        $('.item4-carousel').owlCarousel({
            //autoplay: (nSliderConfig.autoplayHoverPause !== typeof undefined ? nSliderConfig.autoplayHoverPause : 2500),
            autoplay: false,
            slideSpeed: (nSliderConfig.autoplayHoverPause !== typeof undefined ? nSliderConfig.autoplayHoverPause : 800),
            autoplaySpeed: (nSliderConfig.autoplayHoverPause !== typeof undefined ? nSliderConfig.autoplayHoverPause : 800),
            autoplayHoverPause: (nSliderConfig.autoplayHoverPause !== typeof undefined ? nSliderConfig.autoplayHoverPause : true),
            navSpeed: (nSliderConfig.autoplayHoverPause !== typeof undefined ? nSliderConfig.autoplayHoverPause : 800),
            paginationSpeed: (nSliderConfig.autoplayHoverPause !== typeof undefined ? nSliderConfig.autoplayHoverPause : 800),
            //items: 4,
            items: 2,
            //center: true,
            //singleItem: true,
            rewind: true,
            //loop: true, //use this when more than 4 higlights are present
            loop: false,
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
            , responsive: {
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
}

function blogsConstructor() {
    //debugger;
    try {
        loadBlogsHighlightSection();
    } catch (ex) {
        // ignore
    }

    oBlogsPager.pageIndex = 0;
    highlightid = "";
    oBlogsContainer = $("#LoadPageBlogs");
    var iTop = 0;
    id = getParameterByName("id");

    if (typeof id !== "undefined" && id !== "") {
        $(sScrollElement).animate({ scrollTop: iTop }, 500);
        oBlogsPager.pageIndex = id > oBlogsPager.pagesize ? 1 : 0;

    }

    loadBlogsGrid();

    $("#Pagination p").click(function () {
        var oCurrentElement = $(this),
            iClicked = oCurrentElement.attr("data-clicked");
        if (!oCurrentElement.hasClass("hidden")) {
            if (iClicked === "0") {
                oBlogsPager.pageIndex--;
                $("#Next").removeClass("hidden");
                if (oBlogsPager.pageIndex <= 0) {
                    oBlogsPager.pageIndex = 0;
                    $("#Previous").addClass("hidden");
                }
            } else {
                oBlogsPager.pageIndex++;
                if (oBlogsPager.pageIndex >= iMaxPageIndex) {
                    oBlogsPager.pageIndex = iMaxPageIndex;
                    $("#Next").addClass("hidden");
                } else {
                    $("#Previous").removeClass("hidden");
                }
            }
            oBlogsContainer.html("").addClass(sLoadingClass);
            iTop = oBlogsContainer.offset().top - 65; // -65 for header/padding
            $(sScrollElement).animate({ scrollTop: iTop }, 500);
            renderBlogs();
        }
    });

    $(".blogs-highlight").unbind("click");
    $(".blogs-highlight").click(function () {
        highlightid = $(this).attr("data-clicked");
        if (typeof highlightid !== "undefined" && highlightid !== "") {
            //$(sScrollElement).animate({ scrollTop: iTop }, 500);
            sClickedHighlightTitle = oBlogsHighlightTitle[highlightid - 1];
            iClickedHighlightID = oHighlightBlogsID[highlightid - 1];
            oBlogsPager.pageIndex = parseInt((iClickedHighlightID + 1) / oBlogsPager.pagesize);
            loadBlogsGrid();
            if (oBlogsPager.pageIndex <= 0) {
                oBlogsPager.pageIndex = 0;
                $("#Previous").addClass("hidden");
            }
            if (oBlogsPager.pageIndex >= iMaxPageIndex) {
                oBlogsPager.pageIndex = iMaxPageIndex;
                $("#Next").addClass("hidden");
            } else {
                $("#Previous").removeClass("hidden");
            }
        }
    });
};
