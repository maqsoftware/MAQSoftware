var oIndiaJobPostSection,
  oUSJobPostSection,
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
  oUSJobPostSection = $("#tabs-1-pane-1 .jobs-us");
  oIndiaJobPostSection = $("#tabs-1-pane-2 .jobs-india");

  var USfeedUrl =
    "https://www.blogger.com/feeds/4733689656779828601/posts/default/-/Openings - US?max-results=999";
  var IndiafeedUrl =
    "https://www.blogger.com/feeds/4733689656779828601/posts/default/-/Openings - India?max-results=999";
  
  $.ajax({
    url: USfeedUrl,
    type: "GET",
    dataType: "jsonp",
    success: function (msg) {
      if (msg) {
        loadUSCareers(msg);
        callTimber();
      } else {
        oUSJobPostSection
          .html(sNoJobMessage)
          .removeClass("Loading")
          .removeClass("LoadingHeight");
      }
    },
    error: function () {
      oUSJobPostSection
        .html(sJobServiceIssue)
        .removeClass("Loading")
        .removeClass("LoadingHeight");
    },
  });
  
  $.ajax({
    url: IndiafeedUrl,
    type: "GET",
    dataType: "jsonp",
    success: function (msg) {
      if (msg) {
        loadIndiaCareers(msg);
        callTimber();
      } else {
        oIndiaJobPostSection
          .html(sNoJobMessage)
          .removeClass("Loading")
          .removeClass("LoadingHeight");
      }
    },
    error: function () {
      oIndiaJobPostSection
        .html(sJobServiceIssue)
        .removeClass("Loading")
        .removeClass("LoadingHeight");
    },
  });
}

// Functions for US
function loadUSCareers(sNewsData) {
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
    renderUSTitle(oNewsData.getElementsByTagName("entry"));
  } catch (exception) {
    oUSJobPostSection
      .html(sNoJobMessage)
      .removeClass("Loading")
      .removeClass("LoadingHeight");
  }
  // unbind already binded click event
  $(".accordion .accordion-section .accordion-title .acc-li").unbind("click");
}

function renderUSTitle(oData) {
  var oCurrentPost;
  oUSJobPostSection
    .html("")
    .removeClass("Loading")
    .removeClass("LoadingHeight");
  for (iIterator = 0; iIterator < oData.length; iIterator++) {
    oCurrentPost = oData.item(iIterator);
    sindex = oData[iIterator].innerHTML.indexOf("https://jsco.re/");
    sjobScoreUrl = oData[iIterator].innerHTML.slice(sindex, sindex + 21);
    oUSJobPostSection.append(
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
  $("#tabs-1-pane-1 .jobs-us *").removeAttr("style");
  var jobs = $("#tabs-1-pane-1 .jobs-us").html();
  $("#tabs-1-pane-1 .populate-jobs-us").html(jobs);
}

//Functions for India
function loadIndiaCareers(sNewsData) {
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
    renderIndiaTitle(oNewsData.getElementsByTagName("entry"));
  } catch (exception) {
    oIndiaJobPostSection
      .html(sNoJobMessage)
      .removeClass("Loading")
      .removeClass("LoadingHeight");
  }
  // unbind already binded click event
  $(".accordion .accordion-section .accordion-title .acc-li").unbind("click");
}

function renderIndiaTitle(oData) {
  var oCurrentPost;
  oIndiaJobPostSection
    .html("")
    .removeClass("Loading")
    .removeClass("LoadingHeight");
  for (iIterator = 0; iIterator < oData.length; iIterator++) {
    oCurrentPost = oData.item(iIterator);
    sindex = oData[iIterator].innerHTML.indexOf("https://jsco.re/");
    sjobScoreUrl = oData[iIterator].innerHTML.slice(sindex, sindex + 21);
    oIndiaJobPostSection.append(
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
  $("#tabs-1-pane-2 .jobs-india *").removeAttr("style");
  var jobs = $("#tabs-1-pane-2 .jobs-india").html();
  $("#tabs-1-pane-2 .populate-jobs-india").html(jobs);
}