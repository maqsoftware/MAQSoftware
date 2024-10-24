var oIndiaJobPostSection,
  oRedmondJobPostSection,
  oNewsData = null,
  sTemplate =
    '<div class="accordion style-2 rounded left" data-toggle-icon data-toggle-multiple> <ul> <li> <a>@title</a> <div id="accordion-1-panel-1"> <div class="accordion-content"> @content <br> </div> </div> </li> </ul> </div>',
  sNoJobMessage =
    '<p class="DataSubContent Color595959">No job openings available at this location.<br />Please come back and check again soon.</p>',
  sJobServiceIssue =
    '<p class="DataSubContent Color595959">Issue in connecting to job-post service.<br />Try loading the section again.</p>';
sindex = 0;

function callTimber(){
  const script = document.createElement('script');
	script.src = '/js/timber.master.min.js';

  // Append to the `head` element
	document.head.appendChild(script);
	$("#header").load("/header");
	$("#footer").load("/footer");
}
function careersConstructor() {
  oRedmondJobPostSection = $("#tabs-1-pane-1 .jobs-redmond");
  oMumbaiJobPostSection = $("#tabs-1-pane-2 .jobs-mumbai");
  oHyderabadJobPostSection = $("#tabs-1-pane-3 .jobs-hyd");
  oNoidaJobPostSection = $("#tabs-1-pane-4 .jobs-noida");

  var MumbaifeedUrl =
    "https://www.blogger.com/feeds/4733689656779828601/posts/default/-/Openings - Mumbai?max-results=999";
  var RedmondfeedUrl =
    "https://www.blogger.com/feeds/4733689656779828601/posts/default/-/Openings - Redmond?max-results=999";
  var HyderabadfeedUrl =
    "https://www.blogger.com/feeds/4733689656779828601/posts/default/-/Openings - Hyderabad?max-results=999";
  var NoidafeedUrl =
    "https://www.blogger.com/feeds/4733689656779828601/posts/default/-/Openings - Noida?max-results=999";
  $.ajax({
    url: RedmondfeedUrl,
    type: "GET",
    dataType: "jsonp",
    success: function (msg) {
      if (msg) {
        loadRedmondCareers(msg);
        callTimber();
      } else {
        oRedmondJobPostSection
          .html(sNoJobMessage)
          .removeClass("Loading")
          .removeClass("LoadingHeight");
      }
    },
    error: function () {
      oRedmondJobPostSection
        .html(sJobServiceIssue)
        .removeClass("Loading")
        .removeClass("LoadingHeight");
    },
  });
  $.ajax({
    url: MumbaifeedUrl,
    type: "GET",
    dataType: "jsonp",
    success: function (msg) {
      if (msg) {
        loadMumbaiCareers(msg);
        callTimber();
      } else {
        oMumbaiJobPostSection
          .html(sNoJobMessage)
          .removeClass("Loading")
          .removeClass("LoadingHeight");
      }
    },
    error: function () {
      oMumbaiJobPostSection
        .html(sJobServiceIssue)
        .removeClass("Loading")
        .removeClass("LoadingHeight");
    },
  });
  $.ajax({
    url: HyderabadfeedUrl,
    type: "GET",
    dataType: "jsonp",
    success: function (msg) {
      if (msg) {
        loadHyderabadCareers(msg);
        callTimber();
      } else {
        oHyderabadJobPostSection
          .html(sNoJobMessage)
          .removeClass("Loading")
          .removeClass("LoadingHeight");
      }
    },
    error: function () {
      oHyderabadJobPostSection
        .html(sJobServiceIssue)
        .removeClass("Loading")
        .removeClass("LoadingHeight");
    },
  });
  $.ajax({
    url: NoidafeedUrl,
    type: "GET",
    dataType: "jsonp",
    success: function (msg) {
      if (msg) {
        loadNoidaCareers(msg);
        callTimber();
      } else {
        oNoidaJobPostSection
          .html(sNoJobMessage)
          .removeClass("Loading")
          .removeClass("LoadingHeight");
      }
    },
    error: function () {
      oNoidaJobPostSection
        .html(sJobServiceIssue)
        .removeClass("Loading")
        .removeClass("LoadingHeight");
    },
  });
}

// Functions for Redmond
function loadRedmondCareers(sNewsData) {
  var oTempData = [],
    parser;
  try {
    parser = new DOMParser();
    oNewsData = parser.parseFromString(sNewsData, "text/xml");

    if (
      oNewsData.getElementsByTagName("feed") &&
      !oNewsData.getElementsByTagName("entry").length
    ) {
      oTempData[0] = oNewsData.getElementsByTagName("entry");
    }
    renderRedmondTitle(oNewsData.getElementsByTagName("entry"));
  } catch (exception) {
    oRedmondJobPostSection
      .html(sNoJobMessage)
      .removeClass("Loading")
      .removeClass("LoadingHeight");
  }
  // unbind already binded click event
  $(".accordion .accordion-section .accordion-title .acc-li").unbind("click");
}

function renderRedmondTitle(oData) {
  var oCurrentPost;
  oRedmondJobPostSection
    .html("")
    .removeClass("Loading")
    .removeClass("LoadingHeight");
  for (iIterator = 0; iIterator < oData.length; iIterator++) {
    oCurrentPost = oData.item(iIterator);
    sindex = oData[iIterator].innerHTML.indexOf("https://jsco.re/");
    sjobScoreUrl = oData[iIterator].innerHTML.slice(sindex, sindex + 21);
    oRedmondJobPostSection.append(
      sTemplate
        .replace(
          /@title/g,
          oCurrentPost.getElementsByTagName("title")[0].childNodes[0].nodeValue
        )
        .replace(
          /@content/g,
          oCurrentPost.getElementsByTagName("content")[0].childNodes[0]
            .nodeValue
        )
    );
  }
  $("#tabs-1-pane-1 .jobs-redmond *").removeAttr("style");
  var jobs = $("#tabs-1-pane-1 .jobs-redmond").html();
  $("#tabs-1-pane-1 .populate-jobs-redmond").html(jobs);
}

//Functions for Mumbai
function loadMumbaiCareers(sNewsData) {
  var oTempData = [],
    parser;
  try {
    parser = new DOMParser();
    oNewsData = parser.parseFromString(sNewsData, "text/xml");

    if (
      oNewsData.getElementsByTagName("feed") &&
      !oNewsData.getElementsByTagName("entry").length
    ) {
      oTempData[0] = oNewsData.getElementsByTagName("entry");
    }
    renderMumbaiTitle(oNewsData.getElementsByTagName("entry"));
  } catch (exception) {
    oMumbaiJobPostSection
      .html(sNoJobMessage)
      .removeClass("Loading")
      .removeClass("LoadingHeight");
  }
  // unbind already binded click event
  $(".accordion .accordion-section .accordion-title .acc-li").unbind("click");
}

function renderMumbaiTitle(oData) {
  var oCurrentPost;
  oMumbaiJobPostSection
    .html("")
    .removeClass("Loading")
    .removeClass("LoadingHeight");
  for (iIterator = 0; iIterator < oData.length; iIterator++) {
    oCurrentPost = oData.item(iIterator);
    sindex = oData[iIterator].innerHTML.indexOf("https://jsco.re/");
    sjobScoreUrl = oData[iIterator].innerHTML.slice(sindex, sindex + 21);
    oMumbaiJobPostSection.append(
      sTemplate
        .replace(
          /@title/g,
          oCurrentPost.getElementsByTagName("title")[0].childNodes[0].nodeValue
        )
        .replace(
          /@content/g,
          oCurrentPost.getElementsByTagName("content")[0].childNodes[0]
            .nodeValue
        )
    );
  }
  $("#tabs-1-pane-2 .jobs-mumbai *").removeAttr("style");
  var jobs = $("#tabs-1-pane-2 .jobs-mumbai").html();
  $("#tabs-1-pane-2 .populate-jobs-mumbai").html(jobs);
}

//Function for Hyderabad
function loadHyderabadCareers(sNewsData) {
  var oTempData = [],
    parser;
  try {
    parser = new DOMParser();
    oNewsData = parser.parseFromString(sNewsData, "text/xml");

    if (
      oNewsData.getElementsByTagName("feed") &&
      !oNewsData.getElementsByTagName("entry").length
    ) {
      oTempData[0] = oNewsData.getElementsByTagName("entry");
    }
    renderHyderabadTitle(oNewsData.getElementsByTagName("entry"));
  } catch (exception) {
    oHyderabadJobPostSection
      .html(sNoJobMessage)
      .removeClass("Loading")
      .removeClass("LoadingHeight");
  }
  // unbind already binded click event
  $(".accordion .accordion-section .accordion-title .acc-li").unbind("click");
}

function renderHyderabadTitle(oData) {
  var oCurrentPost;
  oHyderabadJobPostSection
    .html("")
    .removeClass("Loading")
    .removeClass("LoadingHeight");
  for (iIterator = 0; iIterator < oData.length; iIterator++) {
    oCurrentPost = oData.item(iIterator);
    sindex = oData[iIterator].innerHTML.indexOf("https://jsco.re/");
    sjobScoreUrl = oData[iIterator].innerHTML.slice(sindex, sindex + 21);
    oHyderabadJobPostSection.append(
      sTemplate
        .replace(
          /@title/g,
          oCurrentPost.getElementsByTagName("title")[0].childNodes[0].nodeValue
        )
        .replace(
          /@content/g,
          oCurrentPost.getElementsByTagName("content")[0].childNodes[0]
            .nodeValue
        )
    );
  }
  $("#tabs-1-pane-3 .jobs-hyd *").removeAttr("style");
  var jobs = $("#tabs-1-pane-3 .jobs-hyd").html();
  $("#tabs-1-pane-3 .populate-jobs-hyd").html(jobs);
}

function loadNoidaCareers(sNewsData) {
  var oTempData = [],
    parser;
  try {
    parser = new DOMParser();
    oNewsData = parser.parseFromString(sNewsData, "text/xml");

    if (
      oNewsData.getElementsByTagName("feed") &&
      !oNewsData.getElementsByTagName("entry").length
    ) {
      oTempData[0] = oNewsData.getElementsByTagName("entry");
    }
    renderNoidaTitle(oNewsData.getElementsByTagName("entry"));
  } catch (exception) {
    oNoidaJobPostSection
      .html(sNoJobMessage)
      .removeClass("Loading")
      .removeClass("LoadingHeight");
  }
  // unbind already binded click event
  $(".accordion .accordion-section .accordion-title .acc-li").unbind("click");
}

function renderNoidaTitle(oData) {
  var oCurrentPost;
  oNoidaJobPostSection
    .html("")
    .removeClass("Loading")
    .removeClass("LoadingHeight");
  for (iIterator = 0; iIterator < oData.length; iIterator++) {
    oCurrentPost = oData.item(iIterator);
    sindex = oData[iIterator].innerHTML.indexOf("https://jsco.re/");
    sjobScoreUrl = oData[iIterator].innerHTML.slice(sindex, sindex + 21);
    oNoidaJobPostSection.append(
      sTemplate
        .replace(
          /@title/g,
          oCurrentPost.getElementsByTagName("title")[0].childNodes[0].nodeValue
        )
        .replace(
          /@content/g,
          oCurrentPost.getElementsByTagName("content")[0].childNodes[0]
            .nodeValue
        )
    );
  }
  $("#tabs-1-pane-4 .jobs-noida *").removeAttr("style");
  var jobs = $("#tabs-1-pane-4 .jobs-noida").html();
  $("#tabs-1-pane-4 .populate-jobs-noida").html(jobs);
}