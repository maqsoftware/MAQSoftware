/*globals navigator,getParameterByName,console*/
//Google analytics code
//var _gaq = _gaq || [];
//_gaq.push(['_setAccount', 'UA-7928102-1']);
//_gaq.push(['_trackPageview']);

//(function () {
//    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
//    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
//    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
//})();
//(function () {
//    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
//        var msViewportStyle = document.createElement("style");
//        msViewportStyle.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}"));
//        document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
//    }
//})();
//(function (d, s, id) {
//    var js, fjs = d.getElementsByTagName(s)[0];
//    if (d.getElementById(id)) return;
//    js = d.createElement(s); js.id = id;
//    js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
//    fjs.parentNode.insertBefore(js, fjs);
//}(document, 'script', 'facebook-jssdk'));

////Application insights code
//window.appInsights = { queue: [], applicationInsightsId: null, accountId: null, appUserId: null, configUrl: null, start: function (n) { function u(n, t) { n[t] = function () { var i = arguments; n.queue.push(function () { n[t].apply(n, i) }) } } function f(n) { var t = document.createElement("script"); return t.type = "text/javascript", t.src = n, t.async = !0, t } function r() { i.appendChild(f("//az416426.vo.msecnd.net/scripts/ai.0.js")) } var i, t; this.applicationInsightsId = n; u(this, "logEvent"); u(this, "logPageView"); i = document.getElementsByTagName("script")[0].parentNode; this.configUrl === null ? r() : (t = f(this.configUrl), t.onload = r, t.onerror = r, i.appendChild(t)); this.start = function () { } } };

//appInsights.start("16108926-fb4b-4765-a6ed-79c6749eb79c");
//appInsights.logPageView();

function loadPage(pageName) {
    "use strict";
    $('#PageContainer').load('../' + pageName + '.html');
    $(document).scrollTop(0);
    setTimeout(function () {
        $('#Head1 > #HeadContent').remove();
        $('#Head1').append($('#HeadContent'));
    }, 100);
}

function careersInUS() {
    "use strict";
    var sID = getParameterByName("q"),
        sJobPost = getParameterByName("pn"),
        oArticle = $("article[data-post=" + sID + "]");
    if (!oArticle.length) {
        oArticle = $("article[data-post=0]");
    }
    oArticle.show();
    if (!sJobPost || null === sJobPost) {
        sJobPost = oArticle.find(".JobTitle").text();
    }
    $("#RedMail").attr("href", "mailto:RedmondJobs@MAQSoftware.com?Subject=Application%20for%20the%20post%20of%20" + sJobPost).html("RedmondJobs@MAQSoftware.com");
}

function loadNews(sNewsData, queryParam, oBreadCrumb, oJobTitle, career) {
    "use strict";
    try {
        var parser = new DOMParser(),
            oNewsData = parser.parseFromString(sNewsData, "text/xml"),
            entry1 = oNewsData.getElementsByTagName('entry').item(queryParam),
            sContent = '<div class="BorderBottom"><p class="SemiBold">' + entry1.getElementsByTagName('content')[0].childNodes[0].nodeValue + '</p></div>';
        oBreadCrumb.css("display", "block");
        oJobTitle.css("display", "block");
        $("#ProfileData").html(sContent);
        $('#ProfileData *').removeAttr('style');
    } catch (e) {
        window.location.href = career;
    }
}

function careersInHyd() {
    "use strict";
    var oBreadCrumb, sBreadCrumbtext, oJobTitle, queryParam,
        sJobPost = getParameterByName("pn");
    $("#HydMail").attr("href", "mailto:HydJobs@MAQSoftware.com?Subject=Application%20for%20the%20post%20of%20" + sJobPost).html("HydJobs@MAQSoftware.com");
    oBreadCrumb = $("#BreadCrumb");
    oJobTitle = $("#JobTitle");
    sBreadCrumbtext = oBreadCrumb.html();
    try {
        oBreadCrumb.html(sBreadCrumbtext.replace("@title", sJobPost));
        oJobTitle.html(oJobTitle.html().replace("@title", sJobPost));
        queryParam = getParameterByName("q");
        if (queryParam) {
            $.ajax({
                url: 'http://www.blogger.com/feeds/2523158019509365490/posts/default/-/Openings - Hyderabad',
                type: 'GET',
                dataType: "jsonp",
                success: function (msg) {
                    loadNews(msg, queryParam, oBreadCrumb, oJobTitle, "#Careers?q=Hyderabad");
                },
                complete: function () {
                    $("#ProfileData").removeClass("Loading");
                }
            });
        } else {
            window.location.href = "#Careers?q=Hyderabad";
        }
    } catch (ex) {
        console.log(ex.message);
        setTimeout(careersInHyd, 100);
    }
}

function careersInMumbai() {
    "use strict";
    var oBreadCrumb, sBreadCrumbtext, oJobTitle, queryParam,
        sJobPost = getParameterByName("pn");
    $("#MumMail").attr("href", "mailto:MumbaiJobs@MAQSoftware.com?Subject=Application%20for%20the%20post%20of%20" + sJobPost).html("MumbaiJobs@MAQSoftware.com");
    oBreadCrumb = $("#BreadCrumb");
    oJobTitle = $("#JobTitle");
    sBreadCrumbtext = oBreadCrumb.html();
    try {
        oBreadCrumb.html(sBreadCrumbtext.replace("@title", sJobPost));
        oJobTitle.html(oJobTitle.html().replace("@title", sJobPost));
        queryParam = getParameterByName("q");
        if (queryParam) {
            $.ajax({
                url: 'http://www.blogger.com/feeds/2523158019509365490/posts/default/-/Openings - Mumbai',
                type: 'GET',
                dataType: "jsonp",
                success: function (msg) {
                    loadNews(msg, queryParam, oBreadCrumb, oJobTitle, "#Careers?q=Mumbai");
                },
                complete: function () {
                    $("#ProfileData").removeClass("Loading");
                }
            });
        } else {
            window.location.href = "#Careers?q=Mumbai";
        }
    } catch (ex) {
        console.log(ex.message);
        setTimeout(careersInMumbai, 100);
    }
}

function redirect() {
    "use strict";
    var hashVal = window.location.hash;
    $('.aSiteLinks').css('color', '#222');
    if (-1 !== hashVal.toLowerCase().indexOf('#expertise'.toLowerCase())) {
        loadPage('Expertise');
        document.title = 'Expertise - MAQ Software';
        $('.ExpertiseTab').css('color', '#bb141a');
    } else if (-1 !== hashVal.toLowerCase().indexOf('#profile'.toLowerCase())) {
        loadPage('Profile');
        document.title = 'Profile - MAQ Software';
        $('.ProfileTab').css('color', '#bb141a');
    } else if (-1 !== hashVal.toLowerCase().indexOf('#news'.toLowerCase())) {
        loadPage('News');
        document.title = 'News - MAQ Software';
        $('.NewsTab').css('color', '#bb141a');
    } else if (-1 !== hashVal.toLowerCase().indexOf('#careersinhyd'.toLowerCase())) {
        loadPage('CareersinHyd');
        $('.CareersTab').css('color', '#bb141a');
        document.title = 'Careers in Hyderabad - MAQ Software';
        setTimeout(careersInHyd, 100);
    } else if (-1 !== hashVal.toLowerCase().indexOf('#careersinmumbai'.toLowerCase())) {
        loadPage('CareersinMumbai');
        $('.CareersTab').css('color', '#bb141a');
        document.title = 'Careers in Mumbai - MAQ Software';
        setTimeout(careersInMumbai, 100);
    } else if (-1 !== hashVal.toLowerCase().indexOf('#careerinus'.toLowerCase())) {
        loadPage('CareerinUS');
        $('.CareersTab').css('color', '#bb141a');
        document.title = 'Careers in US - MAQ Software';
        setTimeout(careersInUS, 100);
    } else if (-1 !== hashVal.toLowerCase().indexOf('#careers'.toLowerCase())) {
        loadPage('Careers');
        $('.CareersTab').css('color', '#bb141a');
        document.title = 'Careers - MAQ Software';
    } else if (-1 !== hashVal.toLowerCase().indexOf('#contactus'.toLowerCase())) {
        loadPage('Contactus');
        $('.ContactusTab').css('color', '#bb141a');
        document.title = 'Contact - MAQ Software';
        $('.PagePadding').css('padding-bottom', '300px');
    } else {
        loadPage('Main');
        document.title = 'Digital Marketing | Analytics | Business Intelligence | CRM | Mobile | Azure application and solution development - MAQ Software';
        $('#dvHeader').css('border-bottom', 'none');
    }
}

$(document).ready(function () {
    "use strict";
    $('.year').text(new Date().getFullYear());
    redirect();

    window.onhashchange = function () {
        redirect();
    };
});