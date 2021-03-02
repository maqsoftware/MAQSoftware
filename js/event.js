var oEventContainer,
    sLoadingClass = "Loading",
    oEventGridContainer = $("#LoadPageEvent"),
    iTotalEvent = 0,
    oEventData = null,
    oEvent = null,
    eventTitle,
    eventDesc,
    eventDate,
    eventTime,
    eventTimeZone,
    eventURL,
    iIterator = 0

function renderCaseStudy() {
    var entry1, aCategoryHTML, sAnchorCaseStudy, sCaseStudyTitle, oimgSource;
    var parser = new DOMParser();
    oCaseStudyContainer.removeClass(sLoadingClass);
    if (iTotalCaseStudy) {
        for (iIterator = 0; iIterator < iTotalCaseStudy; iIterator++) {
            entry1 = oCaseStudyData.getElementsByTagName('entry').item(iIterator);
            console.log(entry1.getElementsByTagName('title')[0].childNodes[0].nodeValue)
            console.log(entry1.getElementsByTagName('content')[0].childNodes[0].nodeValue)
            if (entry1) {
                //var oCaseStudyEntry = "<div class='col-md-3 mb-30'>"
                //    +"<div class='Pricing-box'>"
                //    +"<div class='price-title spacing-box'>"
                //    +"<h4>"+ entry1.getElementsByTagName('title')[0].childNodes[0].nodeValue +"</h4>"
                //    +"</div>"
                //    +"<hr />"
                //    +"<div class='pricing-features spacing-grid'>"
                //    +"<div>"+ entry1.getElementsByTagName('desc')[0].childNodes[0].nodeValue +"</div>"
                //    +"</div>"
                //    +"<hr />"
                //    +"<div class='pricing-features spacing-grid'>"
                //    +"<div>"+ entry1.getElementsByTagName('date')[0].childNodes[0].nodeValue +"</div>"
                //    +"<div>"+ entry1.getElementsByTagName('Time')[0].childNodes[0].nodeValue +"</div>"
                //    +"<div>"+ entry1.getElementsByTagName('TimeZone')[0].childNodes[0].nodeValue +"</div>"
                //    +"</div>"
                //    +"<hr />"
                //    +"<div class='spacing-grid'>"
                //    +"<h6 class=''>"
                //    +"<a class='btn btn-md btn-black_try' style='margin-top: 0.5em' href='" + entry1.getElementsByTagName('url')[0].childNodes[0].nodeValue +"' target='_blank'>LEARN MORE</a>"
                //    +"</h6>"
                //    +"</div>"
                //    +"</div>"
                //    +"</div>"
                oCaseStudyContainer.append(oCaseStudyEntry);
            }
        }
    }
}

function getBlogOnComplete() {
    oCaseStudyContainer.removeClass(sLoadingClass);
    $("#loadingicon").hide();

    // We need to destroy existing initialized isotope
    // to re-initialize it in containerGridMasonry()
    $('.container-grid').isotope('destroy');
    containerGridMasonry();
}

function loadEvents() {
    //oCaseStudyContainer.html("").addClass(sLoadingClass);
    //$("#loadingicon").html("").addClass("CaseStudyLoading");
    $.ajax({
        url: 'https://www.blogger.com/feeds/8920013036459621984/posts/default?max-results=999',
        type: 'GET',
        dataType: 'jsonp',
        success: function (sResponse) {
            var parser = new DOMParser();
            var entrymap = new Map()
            oEventData = parser.parseFromString(sResponse, "text/xml");
            entries = oEventData.getElementsByTagName('entry');
            iTotalEntries = entries.length;
            for (iIterator = 0; iIterator < iTotalEntries; iIterator++) {
                entry = oEventData.getElementsByTagName('entry').item(iIterator);
                entrymap.set(entry.getElementsByTagName('category')[0].attributes["term"].nodeValue,entry);
            }
            //entrymap.sort((entry1, entry2) => (entry.getElementsByTagName('category')[0].attributes["term"].nodeValue < entry2.getElementsByTagName('category')[0].attributes["term"].nodeValue) ? 1 : -1);
            console.log(entrymap);
            for (iIterator = 0; iIterator < iTotalEntries; iIterator++) {
                entry = oEventData.getElementsByTagName('entry').item(iIterator);
                eventTitle = entry.getElementsByTagName('title')[0].childNodes[0].nodeValue
                eventDate = entry.getElementsByTagName('category')[0].attributes["term"].nodeValue
                eventHTML = entry.getElementsByTagName('content')[0].childNodes[0].nodeValue
                console.log(eventTitle, eventDate, eventHTML)
            }
        }                   
    });
}