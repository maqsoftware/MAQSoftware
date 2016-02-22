/*jslint plusplus: true */
/// <reference path="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.4.min.js" />
/*globals clearInterval,setInterval*/
(function () {
    "use strict";
    var oExpertiseSlider = {
        imageSrc: ["../../Static/Images/Slider/Cloud.jpg",
                   "../../Static/Images/Slider/Business-Intelligence.jpg",
                    "../../Static/Images/Slider/website_banner_powerbi.jpg",
                   "../../Static/Images/Slider/Sharepoint.jpg",
                   "../../Static/Images/Slider/AppDev.jpg",
                   "../../Static/Images/Slider/UX-Design.jpg"],
        imageTitle: ["Cloud",
                     "Business Intelligence",
                     "Visual Insights",
                     "SharePoint",
                     "App Development",
                     "UX Design"],
        imageContent: ["Reduce the infrastructure cost, increase availability, and scalability of your application",
                      "Optimized data warehouse, customized  reports, dashboards, faster and better decision making",
                      "Rich data visualizations, custom dashboards, and intuitive report generation keep you on the cutting edge of new trends and emerging markets",
                      "Portal branding, customizations,  <br />self-service capabilities, better content management, and collaboration",
                      "Retail and LOB applications for Windows 8, Windows Phone 8, iPhone, iPad, Office apps, and SharePoint apps",
                      "Brand marketing websites, rich media production work, innovative and attractive applications to increase user adoption and retention"],
        current: 0,
        next: 1,
        interval: 0
    }, oDeliveryApproachContent = {
        content: ["Releasing high quality software through build, deploy and test automation",
            "Distributed teams with unified processes to increase productivity for faster turnaround",
            "Through skilled technical team and following disciplined engineering excellence practices",
            "Incorporate changes using agile methodologies to give a competitive advantage"],
        previousIndex: 0,
        automateCDSlider: 0
    }, oClientSlider = {
        size: 186,
        width: 186,
        iPos: 0,
        iCurrentMoved: 0
    };
    $('document').ready(function () {
        $("#ClientImageBanner .inDiv").click(function () {
            window.location.href = "#Profile?q=4";
        });
        var oSliderImage = $("#ClientImageBanner div"),
            iTotalImages = oSliderImage.length,
            oFace = $("#FaceSlider"),
            oContent = oFace.find(".dvSliderContent"),
            iFaceSliderHeight,
            iContentHeight;

        // code for Expertise slider
        function setContentPosition() {
            iFaceSliderHeight = oFace.height();
            iContentHeight = oContent.height();
            oContent.css("top", ((iFaceSliderHeight / 2) - (iContentHeight / 2)) + "px");
            if (!oFace.is(":animated")) {
                oContent.css("left", "5%");
            }
        }
        function automateSlider() {
            oFace.fadeOut(300);
            oExpertiseSlider.current = oExpertiseSlider.next;
            oExpertiseSlider.next += 1;
            if (oExpertiseSlider.current >= oExpertiseSlider.imageSrc.length) {
                oExpertiseSlider.current = 0;
                oExpertiseSlider.next = 1;
            }
            $("#ExpertiseWrapper").css("background-image", "url(" + oExpertiseSlider.imageSrc[oExpertiseSlider.current] + ")");
            setTimeout(function () {
                oContent.css("left", "+=40px");
                $(".slideImage .MoveExpertiseSlider").removeClass("ActiveBullet");
                $(".slideImage .MoveExpertiseSlider[data-value=" + oExpertiseSlider.current + "]").addClass("ActiveBullet");
                oFace.css("background-image", "url(" + oExpertiseSlider.imageSrc[oExpertiseSlider.current] + ")");
                oFace.find(".pSliderContentTitle").html(oExpertiseSlider.imageTitle[oExpertiseSlider.current]);
                oFace.find(".pSliderContent").html(oExpertiseSlider.imageContent[oExpertiseSlider.current]);
                oFace.find(".pLearnMore").attr("data-value", oExpertiseSlider.imageTitle[oExpertiseSlider.current]);
                setContentPosition();
                oFace.fadeIn(300);
                oContent.animate({ left: "-=40px" }, 500, function () {
                    oContent.css("left", "5%");
                });
            }, 200);
        }
        function initExpertiseSlider() {
            clearInterval(oExpertiseSlider.interval);
            oExpertiseSlider.interval = setInterval(automateSlider, 5000);
        }
        function automateSliderClick(oCurrentElement) {
            var iTemp = parseInt(oCurrentElement.attr("data-value"), 10);
            if (oExpertiseSlider.current !== iTemp) {
                if (!oFace.is(":animated")) {
                    oExpertiseSlider.next = iTemp;
                    automateSlider();
                    initExpertiseSlider();
                } else {
                    oExpertiseSlider.current = iTemp;
                    if ((oExpertiseSlider.current + 1) >= oExpertiseSlider.imageSrc.length) {
                        oExpertiseSlider.next = 0;
                    } else {
                        oExpertiseSlider.next = oExpertiseSlider.current + 1;
                    }
                }
            }
        }
        $("#SliderContentMedia .NavIcon").click(function () {
            var iTemp = parseInt($(this).attr("data-index"), 10);
            if (iTemp === 0) {
                oExpertiseSlider.next -= 2;
                if (oExpertiseSlider.next < 0) {
                    oExpertiseSlider.next = oExpertiseSlider.imageSrc.length - 1;
                }
            }
            if (!oFace.is(":animated")) {
                automateSlider();
                initExpertiseSlider();
            }

        });
        function navigateToExpetisePage(oClickedElement) {
            var sSliderTitle = oClickedElement.attr("data-value"),
                iIndex = $.inArray(sSliderTitle, oExpertiseSlider.imageTitle);
            if (iIndex === -1) {
                iIndex = 0;
            }
            window.location.href = "#Expertise?q=" + iIndex;
        }
        $("#ExpertiseWrapper .pLearnMore").click(function () {
            navigateToExpetisePage($(this));
        });
        $("#ExpertiseWrapper").hover(
            function () {
                clearInterval(oExpertiseSlider.interval);
                setContentPosition();
            },
            function () {
                initExpertiseSlider();
            }
        );
        $(".slideImage .MoveExpertiseSlider").click(function () {
            automateSliderClick($(this));
        });
        initExpertiseSlider();
        //--------------------------------------------------------------------------------------------
        // code for Client slider  
        function setImagePosition() {
            oSliderImage.each(function (index) {
                $(this).css("width", oClientSlider.width + "px").css("left", oClientSlider.iPos + "px").attr("data-index", index);
                oClientSlider.iPos += oClientSlider.width;
            });
        }
        $("#leftArrClick").click(function () {
            if (!oSliderImage.is(":animated")) {
                oClientSlider.iCurrentMoved--;
                if (oClientSlider.iCurrentMoved < 0) {
                    oClientSlider.iCurrentMoved = iTotalImages + oClientSlider.iCurrentMoved;
                }
                $(oSliderImage[oClientSlider.iCurrentMoved]).css("left", "-=" + (iTotalImages * oClientSlider.width) + "px");
                oSliderImage.animate({ left: "+=" + oClientSlider.width + "px" }, 300);
            }
        });
        $("#rightArrClick").click(function () {
            if (!oSliderImage.is(":animated")) {
                oSliderImage.animate({ left: "-=" + oClientSlider.width + "px" }, 300);
                $(oSliderImage).promise().done(function () {
                    if (oClientSlider.iCurrentMoved >= iTotalImages) {
                        oClientSlider.iCurrentMoved = 0;
                    }
                    $(oSliderImage[oClientSlider.iCurrentMoved]).css("left", "+=" + (iTotalImages * oClientSlider.width) + "px");
                    oClientSlider.iCurrentMoved++;
                });
            }
        });

        /* Continuous Delivery code */
        function changeCDSliderContent(sCurrentSelected, oCurrentElement) {
            oCurrentElement = $(".dvDeliveryApproachIcon div[id=CD" + sCurrentSelected + "]");
            var oPos = oCurrentElement.css("background-position"),
                iImageIndex,
                sPreviousImageIndex,
                sContent,
                sContentTitle,
                oPreviousImage;
            if (!oPos) {
                oPos = [];
                oPos[0] = oCurrentElement.css("backgroundPositionX");
                oPos[1] = oCurrentElement.css("backgroundPositionY");
            } else {
                oPos = oPos.split(' ');
            }
            if (oPos.length) {
                iImageIndex = sCurrentSelected;
                sPreviousImageIndex = oDeliveryApproachContent.previousIndex;
                if (sPreviousImageIndex !== iImageIndex) {
                    oPreviousImage = $(".dvDeliveryApproachIcon div[id=CD" + sPreviousImageIndex + "]");
                    oDeliveryApproachContent.previousIndex = parseInt(iImageIndex, 10);
                    oPreviousImage.css("background-position", "0 0");
                }
                oCurrentElement.css("background-position", -(oCurrentElement.width()) + "px 0");
                sContent = oDeliveryApproachContent.content[iImageIndex];
                sContentTitle = oCurrentElement.attr("title");
                if (sContent) {
                    $("#pCurrentDeliveryTitle").html(sContentTitle);
                }
                if (sContent) {
                    $("#pCurrentDeliveryContent").html(sContent);
                }
                $("#ContinuousDeliveryBullets div[data-index=" + sPreviousImageIndex + "]").removeClass("ActiveBullet");
                $("#ContinuousDeliveryBullets div[data-index=" + sCurrentSelected + "]").addClass("ActiveBullet");
            }
        }
        function automateCDSlider() {
            var sCurrentSelected = oDeliveryApproachContent.previousIndex + 1;
            if (sCurrentSelected >= oDeliveryApproachContent.content.length) {
                sCurrentSelected = 0;
            }
            changeCDSliderContent(sCurrentSelected);
        }
        function initCDSlider() {
            clearInterval(oDeliveryApproachContent.automateCDSlider);
            oDeliveryApproachContent.automateCDSlider = setInterval(automateCDSlider, 5000);
        }
        $(".dvDeliveryApproachIcon div, #ContinuousDeliveryBullets div").click(function () {
            var sCurrentSelected = $(this).attr("data-index");
            changeCDSliderContent(sCurrentSelected);
            initCDSlider();
        });
        initCDSlider();
        //-------------------------------------------------------------------------------------------------                            
        function resetClientSlider() {
            var iWindowWidth = $(window).width(),
                iWrapperWidth = iWindowWidth - 80,
                iNumImages;
            if (iWindowWidth < 1000) {
                $(".ClientImageWrapper").width(iWrapperWidth);
                iNumImages = parseInt(iWrapperWidth / oClientSlider.size, 10);
                oClientSlider.width = iWrapperWidth / iNumImages;
                $("#leftArrClick,#rightArrClick").css("visibility", "visible");
            } else {
                $(".ClientImageWrapper").width(920);
                oClientSlider.width = 186;
                $("#leftArrClick,#rightArrClick").css("visibility", "hidden");
            }
            oClientSlider.iPos = 0;
            oClientSlider.iCurrentMoved = 0;
            setImagePosition();
        }
        $(window).resize(function () {
            setTimeout(function () {
                resetClientSlider();
            }, 500);
            setContentPosition();
        });
        resetClientSlider();
    });
    //-------------------------------------------------------------------------------------------------

}());