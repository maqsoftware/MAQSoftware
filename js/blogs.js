///*jslint plusplus: true */
//"use strict";
//var oBlogsPager = {
//    template: '<div><div class="post-meta"><span class="blog-font">@sTag | </span><span class="blog-date">@date</span></div><div class="post-header"><a href="@href"><h2>@title</h2></a></div><div class="post-media"><a href="@href1"><img alt="Blog" src="@newsimagesrc"></a></div></div></div><div class="spacer-50"></div><div><hr style="color:#f1f1f1;background-color:#f1f1f1;border:0;width:100%;height:1px; margin-bottom:70px;" /></div>',
//    pageIndex: 0,
//    pagesize: 6
//}, id, highlightid, sClickedHighlightTitle, iClickedHighlightID,
//iTotalBlogs = 0,
//iIterator = 0,
//iMaxPageIndex,
//oBlogsData = null,
//oBlogsContainer,
//sScrollElement = "body,html",
//sLoadingClass = "Loading",
//     iCount, iTotalHighlight = 6, oBlogsHighlightTitle = [iTotalHighlight], oHighlightBlogsID = [iTotalHighlight];
//function renderBlogs() {
//    var iStart, iEnd, entry1, sTag, sDate, oDatePart, oDate, sTitle, sContent, sRawTitle, slink;
//    oBlogsContainer.removeClass(sLoadingClass);
//    if (iTotalBlogs) {
//        iStart = oBlogsPager.pageIndex * oBlogsPager.pagesize;
//        if (iStart >= iTotalBlogs) {
//            iStart = iTotalBlogs - 1;
//            oBlogsPager.pageIndex = iStart;
//            if (iTotalBlogs > 1) {
//                $("#Previous").removeClass("hidden");
//                $("#Next").addClass("hidden");
//            }
//        } else if (iStart <= 0) {
//            iStart = 0;
//            oBlogsPager.pageIndex = iStart;
//            if (iTotalBlogs > 1) {
//                $("#Next").removeClass("hidden");
//                $("#Previous").addClass("hidden");
//            }
//            else if (iTotalBlogs = 1) {
//                $("#Next").addClass("hidden");
//                $("#Previous").addClass("hidden");
//            }
//        }
//        iEnd = iStart + oBlogsPager.pagesize;
//        if (iEnd > iTotalBlogs) {
//            iEnd = iTotalBlogs;
//        }
//        for (iIterator = iStart; iIterator < iEnd; iIterator++) {
//            entry1 = oBlogsData.getElementsByTagName('entry').item(iIterator);
//            if (entry1) {
//                sTag = entry1.getElementsByTagName('category')[0].attributes["term"].nodeValue.toUpperCase();
//                sDate = entry1.getElementsByTagName('published')[0].childNodes[0].nodeValue.toLowerCase().split("t");
//                oDatePart = [];
//                if (sDate[0]) {
//                    oDatePart = sDate[0].split("-");
//                }
//                oDate = null;
//                if (oDatePart.length === 3) {
//                    oDate = new Date(oDatePart[0], (oDatePart[1] - 1), oDatePart[2]);
//                } else {
//                    oDate = new Date(sDate[0]);
//                }
//                oDate = oDate.format();
//                sTitle = entry1.getElementsByTagName('title')[0].childNodes[0].nodeValue;
//                sRawTitle = sTitle;
//                slink = entry1.getElementsByTagName('link')[2].getAttribute('href');

//                sContent = entry1.getElementsByTagName('content')[0].childNodes[0].nodeValue;

//                $("#bloggerContent").html(sContent);
//                var bloggerContent = document.getElementById("bloggerContent");
//                var imgs = bloggerContent.getElementsByTagName('img');
//                var img, src = "";

//                if (typeof imgs !== "undefined" && imgs.length > 0) {
//                    img = imgs[0];
//                    src = img.src;
//                    img.parentNode.removeChild(img);
//                }
//                sContent = $("#bloggerContent").html();
//                oBlogsContainer.append(oBlogsPager.template.replace("@sTag", sTag).replace(/@title/g, sRawTitle).replace("@href", slink).replace("@date", oDate).replace("@newsimagesrc", src).replace("@content", sContent).replace("@href1", slink));
//            }
//        }
//        oBlogsContainer.find("img").addClass("post - media");
//        $('#LoadPageBlogs *').removeAttr('style');
//        for (var iCount = 0; iCount < iTotalHighlight; iCount++) {
//            for (iIterator = 0; iIterator < iTotalBlogs; iIterator++) {
//                entry1 = oBlogsData.getElementsByTagName('entry').item(iIterator);
//                if (entry1) {
//                    sTitle = entry1.getElementsByTagName('title')[0].childNodes[0].nodeValue;
//                    if (sTitle === oBlogsHighlightTitle[iCount]) {
//                        oHighlightBlogsID[iCount] = iIterator;
//                        break;
//                    }
//                }
//            }
//        }
//    }
//}
//function loadBlogs(sBlogsData) {
//    try {
//        var parser = new DOMParser();
//        oBlogsData = parser.parseFromString(sBlogsData, "text/xml");
//        iTotalBlogs = oBlogsData.getElementsByTagName('entry').length;
//        if (iTotalBlogs || oBlogsData.getElementsByTagName('content')) {
//            iMaxPageIndex = Math.round(iTotalBlogs / oBlogsPager.pagesize);
//            $("#Pagination").show();
//            renderBlogs();
//        }
//    } catch (ignore) {
//    }
//}
//function loadBlogsGrid() {
//    oBlogsContainer.html("").addClass(sLoadingClass);
//    getBloggerData('https://www.blogger.com/feeds/3262801613185975083/posts/default/-/Blog?max-results=999', getBlogsSuccess, getBlogsOnComplete);
//}
//function getBlogsSuccess(sResponse) {
//    var iTop;
//    loadBlogs(sResponse);
//    if (typeof highlightid !== "undefined" && highlightid !== "") {
//        //debugger;
//        highlightid = parseInt(iClickedHighlightID % oBlogsPager.pagesize);
//        iTop = $("#LoadPageBlogs").children('div').eq(Number(highlightid) * 3).offset().top - 65;
//        $(sScrollElement).animate({ scrollTop: iTop }, 300);
//    } else if (typeof id !== "undefined" && id !== "") {
//        //debugger;
//        id = id > oBlogsPager.pagesize ? id - oBlogsPager.pagesize : id;
//        iTop = $("#LoadPageBlogs").children('div').eq(id - 1).offset().top - $("#highlights").offset().top - 65 - 34; // 34 for date of blog
//        $(sScrollElement).animate({ scrollTop: iTop }, 300);
//    }
//}
//function getBlogsOnComplete() {
//    oBlogsContainer.removeClass(sLoadingClass);
//}
//function blogsConstructor() {
//    oBlogsPager.pageIndex = 0;
//    highlightid = "";
//    oBlogsContainer = $("#LoadPageBlogs");
//    var iTop = 0;
//    id = getParameterByName("id");

//    if (typeof id !== "undefined" && id !== "") {
//        $(sScrollElement).animate({ scrollTop: iTop }, 500);
//        oBlogsPager.pageIndex = id > oBlogsPager.pagesize ? 1 : 0;
//    }
//    loadBlogsGrid();
//    $("#Pagination p").click(function () {
//        var oCurrentElement = $(this),
//            iClicked = oCurrentElement.attr("data-clicked");
//        if (!oCurrentElement.hasClass("hidden")) {
//            if (iClicked === "0") {
//                oBlogsPager.pageIndex--;
//                $("#Next").removeClass("hidden");
//                if (oBlogsPager.pageIndex <= 0) {
//                    oBlogsPager.pageIndex = 0;
//                    $("#Previous").addClass("hidden");
//                }
//            } else {
//                oBlogsPager.pageIndex++;
//                $("#Previous").removeClass("hidden");
//                if (oBlogsPager.pageIndex >= iMaxPageIndex) {
//                    oBlogsPager.pageIndex = iMaxPageIndex;
//                    $("#Next").addClass("hidden");
//                }
//            }
//            oBlogsContainer.html("").addClass(sLoadingClass);
//            iTop = oBlogsContainer.offset().top - 65; // -65 for header/padding
//            $(sScrollElement).animate({ scrollTop: iTop }, 500);
//            renderBlogs();
//        }
//    });
//};
var oBlogContainer,
    sLoadingClass = "Loading",
    oCaseStudyContainer = $("#LoadPageCaseStudy"),
    iTotalCaseStudy = 0,
    oCaseStudyData = null,
    oEntryData = null,
    caseStudyTitle,
    caseStudyImageSource,
    iIterator = 0

function renderCaseStudy() {
    var entry1, aCategoryFilters, sCategoryFilter, aCategoryHTML, sAnchorCaseStudy, sImageLink, sCaseStudyTitle, oimgSource;
    var parser = new DOMParser();
    oCaseStudyContainer.removeClass(sLoadingClass);
    if (iTotalCaseStudy) {

        for (iIterator = 0; iIterator < iTotalCaseStudy; iIterator++) {
            entry1 = oCaseStudyData.getElementsByTagName('entry').item(iIterator);
            sAnchorCaseStudy = entry1.getElementsByTagName('link')[2].getAttribute('href');
            imgSource = $('<div/>').html(entry1.getElementsByTagName('content')[0].innerHTML).text()
            imgSource = parser.parseFromString(imgSource, "text/html");
            aCategoryFilters = [];
            aCategoryHTML = $.map(entry1.getElementsByTagName('category'), function (el) {
                var sTerm = el.getAttribute("term");
                if (sTerm === "Blog") {
                    return "";
                }

                sCategoryFilter = sTerm.replace(/&/, "").replace(/\s+/, "").toLowerCase();
                aCategoryFilters.push(sCategoryFilter);
                return "<span><a class='blogcategories' data-filter='." + sCategoryFilter + "'>" + sTerm + "</a></span>";
            });
            sImageLink = imgSource.getElementsByTagName('img')[0].getAttribute('src');
            sCaseStudyTitle = entry1.getElementsByTagName('title')[0].childNodes[0].nodeValue;
            if (entry1) {
                var oCaseStudyEntry = "<div class='col-md-4 col-sm-4 nf-item spacing-grid " + aCategoryFilters.join(" ") + "'>"
                   + "<div class='blog-post'>"
                      + "<div class='post-media'>"
                          + "<a href='" + sAnchorCaseStudy + "'> <img class='item-container' style='height:100%;width:100%;' src='" + sImageLink + "' alt='Case Study' /></a> "
                        + "</div>"
                       + " <div class='post-header'>"
                        + " <h5><a href=" + sAnchorCaseStudy + "> " + sCaseStudyTitle + "</a></h5>"
                        + "</div>"

                       + "<div class='post-tag pull-left'>" + aCategoryHTML.join("") + "</div>"
                       + "<div class='post-more-link pull-right'><a href='" + sAnchorCaseStudy + "'>Read More<i class='fa fa-long-arrow-right right'></i></a></div>"
                   + "</div>"
                   + "</div>"
                oCaseStudyContainer.append(oCaseStudyEntry);
            }
        }
    }
}

function loadCaseStudy(sCaseStudyData) {
    try {
        var parser = new DOMParser();
        oCaseStudyData = parser.parseFromString(sCaseStudyData, "text/xml");
        iTotalCaseStudy = oCaseStudyData.getElementsByTagName('entry').length;
        if (iTotalCaseStudy || oCaseStudyData.getElementsByTagName('content')) {
            renderCaseStudy();
        }
    } catch (ignore) {
    }
}

function loadBlogGrid() {
    oCaseStudyContainer.html("").addClass(sLoadingClass);
    $("#loadingicon").html("").addClass("CaseStudyLoading");
    getBloggerData('https://www.blogger.com/feeds/3262801613185975083/posts/default/-/Blog?max-results=999', getBlogSuccess, getBlogOnComplete);
}

function getBlogSuccess(sResponse) {
    var iTop;
    loadCaseStudy(sResponse);
}

function getBlogOnComplete() {
    oCaseStudyContainer.removeClass(sLoadingClass);
    $("#loadingicon").hide();

    // We need to destroy existing initialized isotope
    // to re-initialize it in containerGridMasonry()
    $('.container-grid').isotope('destroy');
    containerGridMasonry();
}