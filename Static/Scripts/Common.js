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
    $("#SiteNavigation > a").click(function (event) {
        event.stopPropagation();
        if ($(".MobileNavIcon").css("display") !== "none") {
            if ($(this).hasClass("HaveSubNav")) {
                $(this).next(".SecondlevelNav").slideToggle(500);
                return false;
            }
            return true;
        }
        return true;
    });
    $(".MobileNavIcon").click(function () {
        $("#SiteNavigation").slideToggle(500);
    });
});