/*jslint plusplus: true */
(function () {
    "use strict";
    var oNewsPager = {
            template: '<div><p class="Datatagline SemiBold m30 Color58585a">@title</p><p class="PubDate">@date</p><div class="Font16">@content</div></div>',
            pageIndex: 0,
            pagesize: 3
        },
        iTotalNews = 0,
        iIterator = 0,
        iMaxPageIndex,
        oNewsData = null,
        oNewsContainer,
        sScrollElement,
        sLoadingClass = "Loading";
    function renderNews() {
        var iStart, iEnd, entry1, sDate, oDatePart, oDate;
        oNewsContainer.removeClass(sLoadingClass);
        if (iTotalNews) {
            iStart = oNewsPager.pageIndex * oNewsPager.pagesize;
            iEnd = iStart + oNewsPager.pagesize;
            if (iEnd > iTotalNews) {
                iEnd = iTotalNews;
            }
            for (iIterator = iStart; iIterator < iEnd; iIterator++) {
                entry1 = oNewsData.getElementsByTagName('entry').item(iIterator);
                if (entry1) {
                    sDate = entry1.getElementsByTagName('published')[0].childNodes[0].nodeValue.toLowerCase().split("t");
                    oDatePart = [];
                    if (sDate[0]) {
                        oDatePart = sDate[0].split("-");
                    }
                    oDate = null;
                    if (oDatePart.length === 3) {
                        oDate = new Date(oDatePart[0], (oDatePart[1] - 1), oDatePart[2]);
                    } else {
                        oDate = new Date(sDate[0]);
                    }
                    oDate = oDate.format();
                    oNewsContainer.append(oNewsPager.template.replace("@title", entry1.getElementsByTagName('title')[0].childNodes[0].nodeValue).replace("@date", oDate).replace("@content", entry1.getElementsByTagName('content')[0].childNodes[0].nodeValue));
                }
            }
            oNewsContainer.find("a").attr("target", "_blank");
            $('#LoadPageNews *').removeAttr('style');
        }
    }
    function loadNews(sNewsData) {
        try {
            var parser = new DOMParser();
            oNewsData = parser.parseFromString(sNewsData, "text/xml");
            iTotalNews = oNewsData.getElementsByTagName('entry').length;
            if (iTotalNews || oNewsData.getElementsByTagName('content')) {
                iMaxPageIndex = Math.round(iTotalNews / oNewsPager.pagesize);
                $("#Pagination").show();
                renderNews();
            }
        } catch (ignore) {
        }
    }
    $("document").ready(function () {
        oNewsContainer = $("#LoadPageNews");
        $.ajax({
            url: 'http://www.blogger.com/feeds/2523158019509365490/posts/default/-/News',
            type: 'GET',
            dataType: 'jsonp',
            success: function (sResponse) {
                loadNews(sResponse);
            },
            complete: function () {
                oNewsContainer.removeClass(sLoadingClass);
            }
        });

        $("#Pagination p").click(function () {
            var oCurrentElement = $(this),
                iClicked = oCurrentElement.attr("data-clicked"),
                isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
                isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
            if (!oCurrentElement.hasClass("DisabledColor")) {
                if (iClicked === "0") {
                    oNewsPager.pageIndex--;
                    $("#Next").removeClass("DisabledColor");
                    if (oNewsPager.pageIndex <= 0) {
                        oNewsPager.pageIndex = 0;
                        $("#Previous").addClass("DisabledColor");
                    }
                } else {
                    oNewsPager.pageIndex++;
                    $("#Previous").removeClass("DisabledColor");
                    if (oNewsPager.pageIndex >= iMaxPageIndex) {
                        oNewsPager.pageIndex = iMaxPageIndex;
                        $("#Next").addClass("DisabledColor");
                    }
                }
                oNewsContainer.html("").addClass(sLoadingClass);
                if (isChrome || isSafari) {
                    sScrollElement = "body";
                } else {
                    sScrollElement = "html";
                }
                $(sScrollElement).animate({ scrollTop: "0px" }, 500, function () {
                    renderNews();
                });
            }
        });
    });
}());