function getParameterByName(name) {
    "use strict";
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.href);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

Date.prototype.format = function () {
    "use strict";
    var arrMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        sValue = arrMonths[this.getMonth()] + ' ' + this.getDate() + ', ' + this.getFullYear();
    return sValue;
};
$(document).ready(function () {
    "use strict";
    $('html').click(function (evt) {
        if (0 === $(evt.target).parents('#SiteNavigation').length && 0 === $(evt.target).parents('.MobileNavIcon').length && !$(evt.target).hasClass('MobileNavIcon') && $(window).width() < 599) {
            $(".SecondlevelNav, #SiteNavigation").slideUp();
        }
    });
    $("#SiteNavigation > a").click(function (event) {
        event.stopPropagation();
        if ($(".MobileNavIcon").css("display") !== "none") {
            if ($(this).hasClass("HaveSubNav")) {
                $(".SecondlevelNav").slideUp();
                $(this).next(".SecondlevelNav").slideToggle(500);
                return false;
            }
            $("#SiteNavigation").slideUp();
            return true;
        }
        return true;
    });
    $(".SecondlevelNav > a").click(function () {
        $(".SecondlevelNav, #SiteNavigation").slideUp();
    });
    $(".MobileNavIcon").click(function () {
        $("#SiteNavigation").slideToggle(500);
    });
});