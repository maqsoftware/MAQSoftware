Date.prototype.format = function () {
    "use strict";
    var arrMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        sValue = arrMonths[this.getMonth()] + ' ' + this.getDate() + ', ' + this.getFullYear();
    return sValue;
};

function getParameterByName(name) {
    "use strict";
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&]*)"),
        results = regex.exec(decodeURIComponent(location.href));
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function redirectPowerBI() {
    window.location.href = "/expertise/powerbi"; // Redirecting to Power BI Expertise
}

function setTabNavLinkBehavior() {
    $("#tabs .nav-link").click(function () {
        $("#tabs .nav-link").removeClass('active');
    });
}

function closeMenuIfOpen() {
    $("a, a *, #body, #body *").click(function () {
        if ($(this).hasClass("menu-has-sub") || $(this).hasClass("fa-angle-down") || $(this).hasClass("fa-angle-up")) {
            return; // return in case of sub menu header click
        }
        if ($(".nav-bar-icon").length && $(".nav-bar-icon").hasClass("active")) {
            $(".nav-bar-icon").removeClass("active");
            if ($(".nav-menu").length && $(".nav-menu").hasClass("active")) {
                $(".nav-menu").removeClass("active");
            }
            if ($(".nav-menu .nav-menu-inner .menu-opened").length) {
                $(".nav-menu .nav-menu-inner .menu-opened").removeClass("menu-opened");
            }
            if ($(".nav-menu .nav-menu-inner .fa-angle-up").length) {
                $(".nav-menu .nav-menu-inner .fa-angle-up").each(function () {
                    $(this).removeClass("fa-angle-up").addClass("fa-angle-down");
                })
            }
            if ($(".nav-menu .nav-menu-inner .sub-dropdown").length) {
                $(".nav-menu .nav-menu-inner .sub-dropdown").each(function () {
                    if ($(this).css('display') == 'block') {
                        $(this).css('display', 'none');
                    }
                })
            }
        }
    });
}
function isCareersPage() {
    if ($('#careers').length) {
        return true;
    }
    return false;
}
// Close menu if open
closeMenuIfOpen();

function updateTitle(viewName) {
    var sTitle = "MAQ Software | Data Management, Power BI, Artificial Intelligence";
    if (typeof viewName !== "undefined") {
        switch (viewName.toLowerCase()) {
            case "expertise":
                sTitle = "MAQ Software | Expertise";
                break;
            case "engagement":
                sTitle = "MAQ Software | Engagement";
                break;
            case "news":
                sTitle = "MAQ Software | News";
                break;
            case "careers":
                sTitle = "MAQ Software | Careers";
                break;
            case "contact":
                sTitle = "MAQ Software | Contact";
                break;
            case "privacystatement":
                sTitle = "MAQ Software | Privacy Statement";
                break;
        }
    }
    $("title").text(sTitle);
}

function getFirstNWordsWithEllipses(data, n) {
    var result = data.split(' ').slice(0, n).join(' ');
    if (data.length > result.length) {
        result = result + "...";
    }
    if (typeof result === "undefined") {
        result = "";
    }
    return result;
}






$(function () {
    if (document.documentMode || /Edge/.test(navigator.userAgent)) {
        cloneNavDropDowns();
    }
});

/**
* Fix for IE/Edge list-item=none render bug on list items hidden when page is initially loaded.
*/

function cloneNavDropDowns () {
    var menu_clone;
    var parent;
    var hidden_lists = $('.sub-dropdown.dropdown');
    hidden_lists.each(function(){
        parent = $(this).parent();
        menu_clone = $(this).clone();
        $(this).remove();
        menu_clone.appendTo(parent);
    });
}

function getBloggerData(blogUrl, successCallBack, completeCallBack) {
    $.ajax({
        url: blogUrl,
        type: 'GET',
        dataType: 'jsonp',
        success: successCallBack,
        complete: completeCallBack
    });
}