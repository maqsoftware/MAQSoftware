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
    var entry1, sDataFilter, sAnchorCaseStudy, sImageLink, sCaseStudyTitle, oimgSource;
    var parser = new DOMParser();
    oCaseStudyContainer.removeClass(sLoadingClass);
    if (iTotalCaseStudy) {
        
        for (iIterator = 0; iIterator < iTotalCaseStudy; iIterator++) {
            entry1 = oCaseStudyData.getElementsByTagName('entry').item(iIterator);
            sAnchorCaseStudy = entry1.getElementsByTagName('link')[2].getAttribute('href');
            imgSource = $('<div/>').html(entry1.getElementsByTagName('content')[0].innerHTML).text()
            imgSource = parser.parseFromString(imgSource, "text/html");
            sDataFilter = entry1.getElementsByTagName('category')[0].getAttribute('term');
            var sDataFilterArray = sDataFilter.split(",");
            sDataFilterArray = sDataFilterArray.filter(e => e !== 'Case Study');
            sImageLink = imgSource.getElementsByTagName('img')[0].getAttribute('src');
            sCaseStudyTitle = entry1.getElementsByTagName('title')[0].childNodes[0].nodeValue;
            if (entry1) {
                sCaseStudyTitle = entry1.getElementsByTagName('title')[0].childNodes[0].nodeValue;
                if (sCaseStudyTitle.includes("Case Study")) {
                    var oCaseStudyEntry = "<div class='col-md-6 col-sm-6 nf-item spacing-grid powerbi'>"
                       + "<div class='blog-post'>"
                          + "<div class='post-media'>"
                              + "<a href='" + sAnchorCaseStudy + "'> <img class='item-container' src='" + sImageLink + "' alt='Case Study' /></a> "
                            + "</div>"
                           + " <div class='post-header'>"
                            + " <h5><a href=" + sAnchorCaseStudy + "> " + sCaseStudyTitle + "</a></h5>"
                            + "</div>"
                           + "<div class='post-tag pull-left'><span><a class='blogcategories' data-filter='." + sDataFilterArray[0].toLowerCase() + "'>" + sDataFilterArray[0] + "</a> </span></div>"
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
    getBloggerData('https://www.blogger.com/feeds/3262801613185975083/posts/default/-/Blog?max-results=999', getBlogSuccess, getBlogOnComplete);
}

function getBlogSuccess(sResponse) {
    var iTop;
    loadCaseStudy(sResponse);
}

function getBlogOnComplete() {
    oCaseStudyContainer.removeClass(sLoadingClass);
}