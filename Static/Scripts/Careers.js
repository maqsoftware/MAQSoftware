/*jslint plusplus: true */
(function () {
    "use strict";
    var sID,
        iIterator,
        oRedmond = [
            {
                title: {
                    "#text": "Engineering Development Manager"
                }
            }, {
                title: {
                    "#text": "Programmer Analyst"
                }
            }, {
                title: {
                    "#text": "Localization Program Manager"
                }
            }, {
                title: {
                    "#text": "Program Manager"
                }
            }, {
                title: {
                    "#text": "Content Editor"
                }
            }, {
                title: {
                    "#text": "Web Application Developer"
                }
            }, {
                title: {
                    "#text": "Software Development Engineer in Test"
                }
            }, {
                title: {
                    "#text": "Software Test Engineer"
                }
            }, {
                title: {
                    "#text": "Systems Engineer"
                }
            }, {
                title: {
                    "#text": "Development Operations Engineer"
                }
            }
        ],
        oNewsData = null,
        oJobPostSection,
        sTemplate = '<div class="BorderBottom"><p class="SemiBold pTagLine Pointer" onclick="showJobPage(\'@location\',@id,\'@title\');">@title</p><p class="FloatRight MarginUp BackLink" onclick="showJobPage(\'@location\',@id,\'@title\');">View Description</p></div>',
        sJobServiceIssue = '<p class="DataSubContent Color595959">Issue in connecting to job-post service.<br />Try loading the section again.</p>',
        sNoJobMessage = '<p class="DataSubContent Color595959">No job openings available at this location.<br />Please come back and check again soon.</p>';
    function renderTitle(oData) {
        var oCurrentPost;
        oJobPostSection.html("").removeClass("Loading").removeClass("LoadingHeight");
        for (iIterator = 0; iIterator < oData.length; iIterator++) {
            oCurrentPost = oData.item(iIterator);
            oJobPostSection.append(sTemplate.replace(/@title/g, oCurrentPost.getElementsByTagName("title")[0].childNodes[0].nodeValue).replace(/@location/g, sID).replace(/@id/g, iIterator));
        }
    }

    function renderTitleRedmond(oData) {
        var oCurrentPost;
        oJobPostSection.html("").removeClass("Loading").removeClass("LoadingHeight");
        for (iIterator = 0; iIterator < oData.length; iIterator++) {
            oCurrentPost = oData[iIterator];
            oJobPostSection.append(sTemplate.replace(/@title/g, oCurrentPost.title['#text']).replace(/@location/g, sID).replace(/@id/g, iIterator));
        }
    }

    function loadNews(sNewsData) {
        var oTempData = [], parser;
        try {
            parser = new DOMParser();
            oNewsData = parser.parseFromString(sNewsData, "text/xml");
            if (sID) {
                if (oNewsData.getElementsByTagName('feed') && !oNewsData.getElementsByTagName('entry').length) {
                    oTempData[0] = oNewsData.getElementsByTagName('entry');
                    //oNewsData.feed.entry = oTempData;
                }
                renderTitle(oNewsData.getElementsByTagName('entry'));
            }
        } catch (exception) {
            oJobPostSection.html(sNoJobMessage).removeClass("Loading").removeClass("LoadingHeight");
        }
    }
    function loadPanel() {
        if (!sID || sID === "Redmond") {
            sID = "Redmond";
            setTimeout(function () {
                renderTitleRedmond(oRedmond);
            }, 800);
        } else {
            var feedUrl = "http://www.blogger.com/feeds/2523158019509365490/posts/default/-/Openings - Hyderabad";
            if ("mumbai" === sID.toLowerCase()) {
                feedUrl = "http://www.blogger.com/feeds/2523158019509365490/posts/default/-/Openings - Mumbai";
            }
            $.ajax({
                url: feedUrl,
                type: 'GET',
                dataType: "jsonp",
                success: function (msg) {
                    if (msg) {
                        loadNews(msg);
                    } else {
                        oJobPostSection.html(sNoJobMessage).removeClass("Loading").removeClass("LoadingHeight");
                    }
                },
                error: function () {
                    oJobPostSection.html(sJobServiceIssue).removeClass("Loading").removeClass("LoadingHeight");
                }
            });
        }
        $("#CareerLinks > a").removeClass("tabActive");
        $("#CareerLinks > a[data-link=" + sID + "]").addClass("tabActive");
    }
    $(document).ready(function () {
        var sCurrentDate = new Date().format();
        $("#RedMail").attr("href", "mailto:RedmondJobs@MAQSoftware.com?Subject=Application%20for%20job%20posted%20on%20MAQSoftware.com%20(" + sCurrentDate + ")").html("RedmondJobs@MAQSoftware.com");
        $("#MumMail").attr("href", "mailto:MumbaiJobs@MAQSoftware.com?Subject=Application%20for%20job%20posted%20on%20MAQSoftware.com%20(" + sCurrentDate + ")").html("MumbaiJobs@MAQSoftware.com");
        $("#HydMail").attr("href", "mailto:HydJobs@MAQSoftware.com?Subject=Application%20for%20job%20posted%20on%20MAQSoftware.com%20(" + sCurrentDate + ")").html("HydJobs@MAQSoftware.com");

        oJobPostSection = $("#CareerLinkHolder");
        sID = getParameterByName("q");
        loadPanel();
        $("#CareerLinks > a").click(function () {
            var sTabClicked = $(this).attr("data-link");
            oJobPostSection.html("").addClass("Loading").addClass("LoadingHeight");
            sID = sTabClicked;
            loadPanel();
        });
    });
}());
function showJobPage(sJobLocation, iJobID, sjobPost) {
    "use strict";
    sJobLocation = sJobLocation.toLowerCase();
    switch (sJobLocation) {
        case "redmond":
            window.location.href = "#CareerinUS?q=" + iJobID + "&pn=" + sjobPost;
            break;
        case "hyderabad":
            window.location.href = "#CareersinHyd?q=" + iJobID + "&pn=" + sjobPost;
            break;
        case "mumbai":
            window.location.href = "#CareersinMumbai?q=" + iJobID + "&pn=" + sjobPost;
            break;
    }
}