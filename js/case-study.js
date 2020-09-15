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
                if (sTerm === "Case Study") {
                    return "";
                }

                sCategoryFilter = sTerm.replace(/&/,"").replace(/\s+/, "").toLowerCase();
                aCategoryFilters.push(sCategoryFilter);
                return "<span><a class='blogcategories' data-filter='." + sCategoryFilter + "'>" + sTerm + "</a></span>";
            });
            sImageLink = imgSource.getElementsByTagName('img')[0].getAttribute('src');
            sCaseStudyTitle = entry1.getElementsByTagName('title')[0].childNodes[0].nodeValue;
            if (entry1) {
                if (entry1.innerHTML.includes("term=\"Case Study\"")) {
                    var oCaseStudyEntry = "<div class='col-md-6 col-sm-6 nf-item spacing-grid " + aCategoryFilters.join(" ") + "'>"
                       + "<div class='blog-post'>"
                          + "<div class='post-media'>"
                              + "<a href='" + sAnchorCaseStudy + "'> <img class='item-container' src='" + sImageLink + "' alt='Case Study' /></a> "
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

function loadBloggerGrid() {
    oCaseStudyContainer.html("").addClass(sLoadingClass);
    $("#loadingicon").html("").addClass("CaseStudyLoading");
    getBloggerData('https://www.blogger.com/feeds/3262801613185975083/posts/default?max-results=999', getBlogSuccess, getBlogOnComplete);
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
