var oBlogContainer,
  sLoadingClass = "Loading",
  oCaseStudyContainer = $("#LoadPageCaseStudy"),
  iTotalCaseStudy = 0,
  oCaseStudyData = null,
  oEntryData = null,
  caseStudyTitle,
  caseStudyImageSource,
  iIterator = 0;

// List of filters/filter IDs from case-studies.html
// Used to check if filter value exists, error catching for getBlogOnComplete()
const filterList = ["gen-ai-and-machine-learning", "data-and-analytics", "reporting-and-visualization", "application-modernization", "cloud-optimization", "security"]

function renderCaseStudy() {
  var entry1,
    aCategoryFilters,
    sCategoryFilter,
    aCategoryHTML,
    sAnchorCaseStudy,
    sImageLink,
    sCaseStudyTitle,
    oimgSource;
  var parser = new DOMParser();
  // oCaseStudyContainer.removeClass(sLoadingClass);
  if (iTotalCaseStudy) {
    for (iIterator = 0; iIterator < iTotalCaseStudy; iIterator++) {
      entry1 = oCaseStudyData.getElementsByTagName("entry").item(iIterator);
      sAnchorCaseStudy = entry1
        .getElementsByTagName("link")[2]
        .getAttribute("href");
      imgSource = $("<div/>")
        .html(entry1.getElementsByTagName("content")[0].innerHTML)
        .text();
      imgSource = parser.parseFromString(imgSource, "text/html");
      rawPublishedDate = entry1
        .getElementsByTagName("published")[0]
        .childNodes[0].nodeValue.toLowerCase()
        .split("t")[0];
      PublishedDate = new Date(rawPublishedDate);
      PublishedDateDay = PublishedDate.getDate();
      PublishedMonth = PublishedDate.toLocaleString("en-us", { month: "long" });
      PublishedYear = PublishedDate.getFullYear();
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
      sImageLink = imgSource.getElementsByTagName("img")[0].getAttribute("src");
      sCaseStudyTitle =
        entry1.getElementsByTagName("title")[0].childNodes[0].nodeValue;
        // console.log("entry 1: " + entry1);
      if (entry1) {
        var oCaseStudyEntry =
          "<div class='grid-item nf-item "+ aCategoryFilters.join(' ') +"'>" +
          "<article class='post'>" +
          "<div class='post-content with-background'>" +
          "<div class='post-media'>" +
          "<div class='thumbnail cs-image img-scale-in' data-hover-easing='easeInOut' data-hover-speed='700' data-hover-bkg-color='#ffffff' data-hover-bkg-opacity='0.9'>" +
          "<a class='overlay-link' href='" +
          sAnchorCaseStudy +
          "'>" +
          "<img classs='cs-image' src='" +
          sImageLink +
          "' alt=''/>" +
          "<span class='overlay-info'>" +
          "<span>" +
          "<span>" +
          "	Read Full Article" +
          "</span>" +
          "</span>" +
          "</span>" +
          "</a>" +
          "</div>" +
          "</div>" +
          "<h2 class='post-title post-noDesc-title'><a href='" +
          sAnchorCaseStudy +
          "'>" +
          sCaseStudyTitle +
          "</a></h2>" +
        //  "<div class='post-info'>" +
        //  "<span class='post-category'><a href='#'>" +
        //  sTerm +
        //  "</a></span> | <span class='post-date'>" +
        //  PublishedMonth +
        //  " " +
        //  PublishedDateDay +
        //  ", " +
        //  PublishedYear +
        //  "</span>" +
        // "</div>" +
          "<a href='" +
          sAnchorCaseStudy +
          "' class='read-more'>Read More →</a>" +
          "</div>" +
          "</article>" +
          "</div>";
        oCaseStudyContainer.append(oCaseStudyEntry);
      }
    }
  }
}

function loadCaseStudy(sCaseStudyData) {
  try {
    var parser = new DOMParser();
    oCaseStudyData = parser.parseFromString(sCaseStudyData, "text/xml");
    iTotalCaseStudy = oCaseStudyData.getElementsByTagName("entry").length;
    if (iTotalCaseStudy || oCaseStudyData.getElementsByTagName("content")) {
      renderCaseStudy();
    }
  } catch (ignore) {}
}

function loadBlogGrid() {
  oCaseStudyContainer.html("").addClass(sLoadingClass);
  $("#loadingicon").html("").addClass("CaseStudyLoading");
  getBloggerData(
    "https://www.blogger.com/feeds/3262801613185975083/posts/default/-/Blog?max-results=999",
    getBlogSuccess,
    getBlogOnComplete
  );
}

function loadCaseStudyGrid() {
  oCaseStudyContainer.html("").addClass(sLoadingClass);
  $("#loadingicon").html("").addClass("CaseStudyLoading");
  getBloggerData(
    "https://www.blogger.com/feeds/3262801613185975083/posts/default/-/Case%20Study?max-results=999",
    getBlogSuccess,
    getBlogOnComplete
  );
}

function getBlogSuccess(sResponse) {
  var iTop;
  loadCaseStudy(sResponse);
}

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  // console.log(urlParams.get(param));
  return urlParams.get(param);
}

function getBlogOnComplete() {
  const filterValue = getQueryParam("filter");
  // console.log(filterValue)
  if(filterValue != null && filterList.includes(filterValue)){
    let element = document.querySelector("#" + filterValue);
    element.click();
  }

  let filterPanel = document.querySelector(".grid-filter-menu");
  filterPanel.classList.remove("hide");
  oCaseStudyContainer.removeClass(sLoadingClass);
  $("#loadingicon").hide();

  // We need to destroy existing initialized isotope
  // to re-initialize it in containerGridMasonry()
  //$('.container-grid').isotope('destroy');
  //containerGridMasonry();
}

function getBloggerData(blogUrl, successCallBack, completeCallBack) {
  $.ajax({
    url: blogUrl,
    type: "GET",
    dataType: "jsonp",
    success: successCallBack,
    complete: completeCallBack,
  });
}
