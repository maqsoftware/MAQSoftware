/*jslint plusplus: true */
"use strict";
var oNewsPager = {
  template:
    '<div class="grid-item"> <article class="post"> <div class="post-content with-background"> <div class="post-media"> <div class="thumbnail img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#ffffff" data-hover-bkg-opacity="0.9"><a class="overlay-link" href="@sAnchorCaseStudy"><img style="height:11em !important" src="@sImageLink" alt=""><span class="overlay-info"><span><span> Read Full Article</span></span></span></a></div> </div> <h2 class="post-title post-noDesc-title"><a href="@sAnchorCaseStudy">@sCaseStudyTitle</a></h2> <!--<div class="post-info "><span class="post-category"><a href="#">@sTerm </a></span> | <span class="post-date">@PublishedMonth @PublishedDateDay, @PublishedYear</span></div>--> <a href="@sAnchorCaseStudy" class="read-more">Read More →</a> </div> </article> </div>',
  pageIndex: 0,
  pagesize: 6,
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
  iTotalHighlight = 6,
  oNewsHighlightTitle = [iTotalHighlight],
  oHighlightNewsID = [iTotalHighlight],
  selectedButton = " ",
  selectedButtonNum = 1;
function renderNews() {
  var iStart,
    iEnd,
    entry1,
    sCaseStudyTitle,
    sContent,
    aCategoryFilters,
    sCategoryFilter,
    aCategoryHTML,
    sAnchorCaseStudy,
    sImageLink,
    sCaseStudyTitle,
    oimgSource,
    PublishedDate,
    PublishedDateDay,
    PublishedMonth,
    PublishedYear;

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
        // console.log(entry1);
        sAnchorCaseStudy = entry1
          .getElementsByTagName("link")[2]
          .getAttribute("href");
        // console.log(sAnchorCaseStudy);
        var rawPublishedDate = entry1
          .getElementsByTagName("published")[0]
          .childNodes[0].nodeValue.toLowerCase()
          .split("t")[0];
        // console.log(rawPublishedDate);
        PublishedDate = new Date(rawPublishedDate);
        // console.log(PublishedDate);
        PublishedDateDay = PublishedDate.getDate();
        // console.log(PublishedDateDay);
        PublishedMonth = PublishedDate.toLocaleString("en-us", {
          month: "long",
        });
        // console.log(PublishedMonth);
        PublishedYear = PublishedDate.getFullYear();
        // console.log(PublishedYear);

        aCategoryFilters = [];
        var sTerm = "";
        aCategoryHTML = $.map(
          entry1.getElementsByTagName("category"),
          function (el) {
            sTerm = el.getAttribute("term");
            if (sTerm === "Blog") {
              return "";
            }

            sCategoryFilter = sTerm
              .replace(/&/, "")
              .replace(/\s+/, "")
              .toLowerCase();
            aCategoryFilters.push(sCategoryFilter);
            return (
              "<span><a class='blogcategories' data-filter='." +
              sCategoryFilter +
              "'>" +
              sTerm +
              "</a></span>"
            );
          }
        );
        sCaseStudyTitle =
          entry1.getElementsByTagName("title")[0].childNodes[0].nodeValue;
        // console.log(sCaseStudyTitle);
        sContent =
          entry1.getElementsByTagName("content")[0].childNodes[0].nodeValue;
        for (iCount = 0; iCount < iTotal; iCount++) {
          sCaseStudyTitle = sCaseStudyTitle.replace(
            oItalicBookName[iCount],
            "<i class='SemiBold'>" + oItalicBookName[iCount] + "</i>"
          );
        }
        // console.log(sContent);
        $("#bloggerContent").html(sContent);
        var bloggerContent = document.getElementById("bloggerContent");
        // console.log(bloggerContent);
        var imgs = bloggerContent.getElementsByTagName("img");
        var img,
          src = "";

        if (typeof imgs !== "undefined" && imgs.length > 0) {
          img = imgs[0];
          src = img.src;
          img.parentNode.removeChild(img);
        }
        console.log(typeof img.src);
        sContent = $("#bloggerContent").html();
        oNewsContainer.append(
          oNewsPager.template
            .replaceAll("@sAnchorCaseStudy", sAnchorCaseStudy)
            .replaceAll("@sImageLink", img.src)
            .replaceAll("@sCaseStudyTitle", sCaseStudyTitle)
            .replaceAll("@sTerm", sTerm)
            .replaceAll("@PublishedMonth", PublishedMonth)
            .replaceAll("@PublishedDateDay", PublishedDateDay)
            .replaceAll("@PublishedYear", PublishedYear)
        );
      }
    }
    // oNewsContainer.find("img").addClass("post - media");

    $("#LoadPageNews *").removeAttr("style");
    for (var iCount = 0; iCount < iTotalHighlight; iCount++) {
      for (iIterator = 0; iIterator < iTotalNews; iIterator++) {
        entry1 = oNewsData.getElementsByTagName("entry").item(iIterator);
        if (entry1) {
          sCaseStudyTitle =
            entry1.getElementsByTagName("title")[0].childNodes[0].nodeValue;
          if (sCaseStudyTitle === oNewsHighlightTitle[iCount]) {
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
  } catch (ignore) {}
}
function loadNewsGrid() {
  oNewsContainer.html("").addClass(sLoadingClass);
  $("#loadingicon").html("").addClass("CaseStudyLoading");
  getBloggerData(
    "https://www.blogger.com/feeds/3262801613185975083/posts/default/-/Blog?max-results=999",
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
  document.getElementById("Previous").classList.add("disabled");
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
    console.log("pageIndex", oNewsPager.pageIndex);
    const previous = document.getElementById("Previous");
    const next = document.getElementById("Next");
    // oNewsPager.pageIndex==0 && previous.classList.add("disabled");
    $(selectedButton).children("a").removeClass("selected-button");
    var oCurrentElement = $(this),
      iClicked = oCurrentElement.attr("data-clicked");
    console.log("Clicked:", iClicked);
    if (!oCurrentElement.hasClass("disabled")) {
      if (iClicked === "000") {
        next.classList.remove("disabled");
        oNewsPager.pageIndex--;
        // $("#Next").removeClass("hidden");
        selectedButtonNum--;
        if (oNewsPager.pageIndex <= 0) {
          oNewsPager.pageIndex = 0;
          selectedButtonNum = 1;
          // $("#Previous").addClass("hidden");
          // $("#Previous").prop("disabled", true);
        }
        if (oNewsPager.pageIndex % 2 != 0 && oNewsPager.pageIndex >= 1) {
          const elementToHide = document.getElementById('2');
          elementToHide.style.display = "block"
          const span1 = document.getElementById("spanElement1");
          span1.textContent = oNewsPager.pageIndex;
          const a1 = document.getElementById("a1");
          const span2 = document.getElementById("spanElement2");
          span2.textContent = oNewsPager.pageIndex + 1;
        }
        var buttonID = (selectedButtonNum.toString() % 2 == 0) ? 2 : 1;
        const unSelectedA = document.getElementById("a" + (buttonID == 1 ? 2 : 1).toString());
        unSelectedA.classList.remove("selected-button");
        $("#" + buttonID).children("a").addClass("selected-button");
        selectedButton = buttonID;
      } else if (iClicked === "100") {
        previous.classList.remove("disabled");
        oNewsPager.pageIndex++;
        selectedButtonNum++;
        if (oNewsPager.pageIndex >= iMaxPageIndex) {
          oNewsPager.pageIndex = iMaxPageIndex;
          // $("#Next").addClass("hidden");
          selectedButtonNum = 5;
        } else {
          // $("#Previous").removeClass("hidden");
          // $("#Previous").prop("disabled", true);
        }
        if (oNewsPager.pageIndex >= 2) {
          const span1 = document.getElementById("spanElement1");
          span1.textContent = oNewsPager.pageIndex + 1;
          if (oNewsPager.pageIndex + 1 < iMaxPageIndex)
            document.getElementById("spanElement2").textContent = oNewsPager.pageIndex + 2;
          else {
            const elementToHide = document.getElementById('2');
            elementToHide.style.display = 'none';
          }
        }
        var buttonID = (selectedButtonNum.toString() % 2 == 0) ? 2 : 1;
        const unSelectedA = document.getElementById("a" + (buttonID == 1 ? 2 : 1).toString());
        unSelectedA.classList.remove("selected-button")
        $("#" + buttonID).children("a").addClass("selected-button");
        selectedButton = buttonID;
      } else {
        oNewsPager.pageIndex = parseInt(iClicked);
        selectedButtonNum = oNewsPager.pageIndex + 1;
        var buttonID = selectedButtonNum;
        const unSelectedA = document.getElementById("a" + (buttonID == 1 ? 2 : 1).toString());
        unSelectedA.classList.remove("selected-button")
        $("#" + buttonID.toString()).children("a").addClass("selected-button");
        selectedButton = buttonID;
        console.log(oNewsPager.pageIndex);
        oNewsPager.pageIndex>0 && previous.classList.remove("disabled");
        oNewsPager.pageIndex<iMaxPageIndex && next.classList.remove("disabled");
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
      oNewsContainer.html("").addClass(sLoadingClass);
      iTop = oNewsContainer.offset().top - 65; // -65 for header/padding
      $(sScrollElement).animate({ scrollTop: iTop }, 500);
      renderNews();
    }
    if (oNewsPager.pageIndex >= iMaxPageIndex) {
      oNewsPager.pageIndex = iMaxPageIndex;
      previous.classList.remove("disabled");
      next.classList.add("disabled");
    }
    if (oNewsPager.pageIndex <= 0) {
      oNewsPager.pageIndex = 0;
      next.classList.remove("disabled");
      previous.classList.add("disabled");
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
