var sLoadingClass = "Loading",
    oEventGridContainer = $("#eventGrid"),
    iTotalEvent = 0,
    oEventData = null,
    events = '',
    iIterator = 0

function loadEvents() {
    oEventGridContainer.html("").addClass(sLoadingClass);
    $("#loadingicon").html("").addClass("CaseStudyLoading");
    $.ajax({
        url: 'https://www.blogger.com/feeds/8920013036459621984/posts/default?max-results=999',
        type: 'GET',
        dataType: 'jsonp',
        success: function (sResponse) {
            var parser = new DOMParser();
            oEventData = parser.parseFromString(sResponse, "text/xml");
            entries = oEventData.getElementsByTagName('entry');
            entries = Object.values(entries);
            sortedEntries = [];
            iTotalEntries = entries.length;
            for (iIterator = 0; iIterator < iTotalEntries-1; iIterator++)  
            {  
                // Find the minimum element in unsorted array  
                min_idx = iIterator;
                for (j = iIterator + 1; j < iTotalEntries; j++) {
                    iDate = new Date(entries[iIterator].getElementsByTagName('category')[0].attributes["term"].nodeValue)
                    jDate = new Date(entries[j].getElementsByTagName('category')[0].attributes["term"].nodeValue)
                    if (jDate < iDate) {
                        min_idx = j;
                    }
                }
                // Swap the found minimum element with the first element
                [entries[min_idx], entries[iIterator]] = [ entries[iIterator],entries[min_idx]]
            }  
            for (iIterator = 0; iIterator < iTotalEntries; iIterator++) {
                entry = entries[iIterator];
                eventHTML = entry.getElementsByTagName('content')[0].childNodes[0].nodeValue;
                events += eventHTML;
            }
            $("#eventGrid").append(events);
        }                   
    });
    oEventGridContainer.removeClass(sLoadingClass);
    $("#loadingicon").hide();
}