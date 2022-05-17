/*jslint plusplus: true */
"use strict";
var oNewsPager = {
    template:
      '<article class="post"> <div class="post-content with-background"> <h2 class="post-title center"><a href="@href">@title</a> </h2> <div class="post-info center"> <span class="post-date">@date</span> </div> <div class="post-media"> <div class="thumbnail img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#ffffff" data-hover-bkg-opacity="0.9"> <a class="overlay-link" href="@href"> <img src="@newsimagesrc" alt="News" title="@tooltip"/> <span class="overlay-info"> <span> <span> Read Full Article </span> </span> </span> </a> </div> </div> <p>@content</p>',
    pageIndex: 0,
    pagesize: 3,
},
  id,
  highlightid,
  sClickedHighlightTitle,
  iClickedHighlightID,
  iTotalNews = 0,
  iIterator = 0,
  iMaxPageIndex,
  oNewsData = null,
  oNewsContainer,
  sScrollElement = "body,html",
  sLoadingClass = "Loading",
  oItalicBookName = [
    "What I Did Not Learn in B-School: Insights for New Managers",
    "What I Did Not Learn at IIT: Transition from Campus to Workplace",
    "What I Did Not Learn at IIT - Transitioning from Campus to Workplace",
  ],
  iCount,
  iTotal = oItalicBookName.length,
  iTotalHighlight = 3,
  oNewsHighlightTitle = [iTotalHighlight],
  oHighlightNewsID = [iTotalHighlight],
  selectedButton = " ",
  selectedButtonNum = 1;
function renderNews() {
    var iStart,
      iEnd,
      entry1,
      sTag,
      sDate,
      oDatePart,
      oDate,
      sTitle,
      sContent,
      sContent_Raw,
      sRawTitle,
      slink,
      sAuthor,
      sAuthorProfile,
      sAuthorImg;
    oNewsContainer.removeClass(sLoadingClass);
    if (iTotalNews) {
        iStart = oNewsPager.pageIndex * oNewsPager.pagesize;
        console.log("Start point:", iStart);
        if (iStart >= iTotalNews) {
            iStart = iTotalNews - 1;
            oNewsPager.pageIndex = iStart;
            if (iTotalNews > 1) {
                // $("#Previous").removeClass("hidden");
                // $("#Previous").on("click");
                // $("#Next").addClass("hidden");
            }
        } else if (iStart <= 0) {
            iStart = 0;
            oNewsPager.pageIndex = iStart;
            if (iTotalNews > 1) {
                $("#Next").removeClass("hidden");
                // $("#Previous").addClass("hidden");
                // $("#Previous").prop("disabled", true);
            }
        }
        iEnd = iStart + oNewsPager.pagesize;
        console.log("End point:", iEnd);
        if (iEnd > iTotalNews) {
            iEnd = iTotalNews;
        }
        for (iIterator = iStart; iIterator < iEnd; iIterator++) {
            entry1 = oNewsData.getElementsByTagName("entry").item(iIterator);
            if (entry1) {
                sTag = entry1
                  .getElementsByTagName("category")[0]
                  .attributes["term"].nodeValue.toUpperCase();
                sDate = entry1
                  .getElementsByTagName("published")[0]
                  .childNodes[0].nodeValue.toLowerCase()
                  .split("t");
                oDatePart = [];
                if (sDate[0]) {
                    oDatePart = sDate[0].split("-");
                }
                oDate = null;
                if (oDatePart.length === 3) {
                    oDate = new Date(oDatePart[0], oDatePart[1] - 1, oDatePart[2]);
                } else {
                    oDate = new Date(sDate[0]);
                }
                oDate = oDate.format();
                sTitle =
                  entry1.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                sRawTitle = sTitle;
                slink = entry1.getElementsByTagName("link")[2].getAttribute("href");

                sContent_Raw =
                  entry1.getElementsByTagName("content")[0].childNodes[0].nodeValue;

                sContent = sContent_Raw.replaceAll("separator", "separator_");
                try {
                    sAuthor =
                      entry1.getElementsByTagName("author")[0].childNodes[0].innerHTML;
                } catch (error) {
                    sAuthor = "MAQ";
                }

                try {
                    sAuthorProfile =
                      entry1.getElementsByTagName("author")[0].childNodes[1].innerHTML;
                } catch (error) {
                    sAuthor = "MAQ";
                }

                for (iCount = 0; iCount < iTotal; iCount++) {
                    sTitle = sTitle.replace(
                      oItalicBookName[iCount],
                      "<i class='SemiBold'>" + oItalicBookName[iCount] + "</i>"
                    );
                }

                $("#bloggerContent").html(sContent);
                var bloggerContent = document.getElementById("bloggerContent");
                var imgs = bloggerContent.getElementsByTagName("img");
                var img,
                  src = "";

                if (typeof imgs !== "undefined" && imgs.length > 0) {
                    img = imgs[0];
                    src = img.src;
                    img.parentNode.removeChild(img);
                }
                sContent = $("#bloggerContent").html();
                oNewsContainer.append(
                  oNewsPager.template
                    .replaceAll("@sTag", sTag)
                    .replaceAll(/@title/g, sRawTitle)
                    .replaceAll("@href", slink)
                    .replaceAll("@date", oDate)
                    .replaceAll("@content", sContent)
                    .replaceAll("@newsimagesrc", src)
                    .replaceAll("@tooltip", getFirstNWordsWithEllipses(sTitle, 4))
                    .replaceAll("@author", sAuthor)
                    .replace("@authorprofile", sAuthorProfile)
                );
            }
        }
        oNewsContainer.find("img").addClass("post - media");

        $("#LoadPageNews *").removeAttr("style");
        for (var iCount = 0; iCount < iTotalHighlight; iCount++) {
            for (iIterator = 0; iIterator < iTotalNews; iIterator++) {
                entry1 = oNewsData.getElementsByTagName("entry").item(iIterator);
                if (entry1) {
                    sTitle =
                      entry1.getElementsByTagName("title")[0].childNodes[0].nodeValue;
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
        iTotalNews = oNewsData.getElementsByTagName("entry").length;
        if (iTotalNews || oNewsData.getElementsByTagName("content")) {
            iMaxPageIndex = Math.round(iTotalNews / oNewsPager.pagesize);
            $("#Pagination").show();
            renderNews();
        }
    } catch (ignore) { }
}
function loadNewsGrid() {
    oNewsContainer.html("").addClass(sLoadingClass);
    $("#loadingicon").html("").addClass("CaseStudyLoading");
    getBloggerData(
      "https://www.blogger.com/feeds/2523158019509365490/posts/default/-/News?max-results=999",
      getNewsSuccess,
      getNewsOnComplete
    );
}
function getNewsSuccess(sResponse) {
    var iTop;
    loadNews(sResponse);
    if (typeof highlightid !== "undefined" && highlightid !== "") {
        //debugger;
        highlightid = parseInt(iClickedHighlightID % oNewsPager.pagesize);
        iTop = $("#LoadPageNews").children("div").eq(highlightid).offset().top - 65;
        $(sScrollElement).animate({ scrollTop: iTop }, 500);
    } else if (typeof id !== "undefined" && id !== "") {
        //debugger;
        id = id > oNewsPager.pagesize ? id - oNewsPager.pagesize : id;
        iTop =
          $("#LoadPageNews")
            .children("div")
            .eq(id - 1)
            .offset().top -
          $("#highlights").offset().top -
          65 -
          34; // 34 for date of news
        $(sScrollElement).animate({ scrollTop: iTop }, 500);
    }
}
function getNewsOnComplete() {
    oNewsContainer.removeClass(sLoadingClass);
    $("#loadingicon").hide();
}
function newsConstructor() {
    oNewsPager.pageIndex = 0;
    highlightid = "";
    oNewsContainer = $("#LoadPageNews");
    var iTop = 0;
    id = getParameterByName("id");
    if (typeof id !== "undefined" && id !== "") {
        $(sScrollElement).animate({ scrollTop: iTop }, 500);
        oNewsPager.pageIndex = id > oNewsPager.pagesize ? 1 : 0;
    }
    loadNewsGrid();
    var buttonID = "#" + selectedButtonNum.toString();
    $(buttonID).children("a").addClass("selected-button");
    selectedButton = buttonID;
    $("#pagination p").click(function () {
        $(selectedButton).children("a").removeClass("selected-button");
        var oCurrentElement = $(this),
          iClicked = oCurrentElement.attr("data-clicked");
        console.log("Clicked:", iClicked);
        if (!oCurrentElement.hasClass("hidden")) {
            if (iClicked === "000") {
                oNewsPager.pageIndex--;
                // $("#Next").removeClass("hidden");
                selectedButtonNum--;
                if (oNewsPager.pageIndex <= 0) {
                    oNewsPager.pageIndex = 0;
                    selectedButtonNum = 1;
                    // $("#Previous").addClass("hidden");
                    // $("#Previous").prop("disabled", true);
                }
                var buttonID = "#" + selectedButtonNum.toString();
                $(buttonID).children("a").addClass("selected-button");
                selectedButton = buttonID;
            } else if (iClicked === "100") {
                oNewsPager.pageIndex++;
                selectedButtonNum++;
                if (oNewsPager.pageIndex >= iMaxPageIndex) {
                    oNewsPager.pageIndex = iMaxPageIndex;
                    // $("#Next").addClass("hidden");
                    selectedButtonNum = 13;
                } else {
                    // $("#Previous").removeClass("hidden");
                    // $("#Previous").prop("disabled", true);
                }
                var buttonID = "#" + selectedButtonNum.toString();
                $(buttonID).children("a").addClass("selected-button");
                selectedButton = buttonID;
            } else {
                oNewsPager.pageIndex = parseInt(iClicked);
                selectedButtonNum = oNewsPager.pageIndex + 1;
                var buttonID = "#" + selectedButtonNum.toString();
                $(buttonID).children("a").addClass("selected-button");
                selectedButton = buttonID;
                if (oNewsPager.pageIndex <= 0) {
                    oNewsPager.pageIndex = 0;
                    // $("#Previous").addClass("hidden");
                    // $("#Previous").prop("disabled", true);
                } else if (oNewsPager.pageIndex >= iMaxPageIndex) {
                    oNewsPager.pageIndex = iMaxPageIndex;
                    // $("#Next").addClass("hidden");
                } else {
                    // $("#Previous").removeClass("hidden");
                }
            }
            console.log("Page Index", oNewsPager.pageIndex);
            oNewsContainer.html("").addClass(sLoadingClass);
            iTop = oNewsContainer.offset().top - 65; // -65 for header/padding
            $(sScrollElement).animate({ scrollTop: iTop }, 500);
            renderNews();
        }
    });
    $(".news-highlight").unbind("click");
    $(".news-highlight").click(function () {
        highlightid = $(this).attr("data-clicked");
        if (typeof highlightid !== "undefined" && highlightid !== "") {
            //$(sScrollElement).animate({ scrollTop: iTop }, 500);
            sClickedHighlightTitle = oNewsHighlightTitle[highlightid - 1];
            iClickedHighlightID = oHighlightNewsID[highlightid - 1];
            oNewsPager.pageIndex = parseInt(
              (iClickedHighlightID + 1) / oNewsPager.pagesize
            );
            loadNewsGrid();
            if (oNewsPager.pageIndex <= 0) {
                oNewsPager.pageIndex = 0;
                // $("#Previous").addClass("hidden");
                // $("#Previous").prop("disabled", true);
            }
            if (oNewsPager.pageIndex >= iMaxPageIndex) {
                oNewsPager.pageIndex = iMaxPageIndex;
                // $("#Next").addClass("hidden");
            } else {
                // $("#Previous").removeClass("hidden");
            }
        }
    });
}
