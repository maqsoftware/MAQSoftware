/*jslint plusplus: true */
/*globals VEMap,VELatLong,VEMapStyle,VERouteOptions,VERouteDistanceUnit*/
(function () {
    "use strict";
    var oMapData = [
            {
                address: "15446 Bel-Red Road, Suite 201 Redmond, WA 98052",
                lat: 47.633087,
                long: -122.133202
            },
            {
                address: "36, Udyog Bhavan, Sonavala Road, Goregaon East, Mumbai 400 063, Maharashtra",
                lat: 19.162275,
                long: 72.85099
            },
            {
                address: "Level 7, Astro, aVance Business Hub, Behind Dell Campus, HITEC City 2, Madhapur, Hyderabad 500 081, Andhra Pradesh",
                lat: 17.446235,
                long: 78.368914
            }
        ],
        oBingMap,
        oPin,
        sCurrentCity,
        oOffset,
        sScrollElement,
        bMapVisible = false,
        bTouchZoom = false,
        sSearchTerm,
        isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
        isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor),
        iLastWindowWidth = $(window).width(),
        iWidth = 600,
        iHeight = 400,
        rtime = new Date(1, 1, 2000, 12, 0, 0),
        timeout = false,
        delta = 200;
    function getMapSectionOffset() {
        var oMapDirDiv = $("#myMap");
        oOffset = oMapDirDiv.offset();
        oOffset.height = oMapDirDiv.height();
    }
    function resizeMap() {
        var oMap = $("#myMap"), iMapWidth, iMapHeight;
        oMap.css("width", "100%");
        iMapWidth = oMap.width();
        iMapHeight = (iMapWidth * iHeight) / iWidth;
        oMap.height(iMapHeight);
    }
    function showMap(Latitude, Longitude, address) {
        var oLocation = null;
        $("#NHYD").show();
        if (oBingMap) {
            oBingMap.Dispose();
        }
        oBingMap = new VEMap('myMap');
        resizeMap();
        if (Latitude && address) {
            oLocation = new VELatLong(Latitude, Longitude);
            $("#MapAddress").html(address);
            oBingMap.LoadMap(oLocation, 5, VEMapStyle.Road);
            oPin = oBingMap.AddPushpin(oLocation);
            oPin.SetTitle('MAQ Software');
            oPin.SetDescription(address);
            oBingMap.SetCenter(oLocation);
        }
    }
    function ShowTurns(route) {
        $("#BingDirection").removeClass("Loading");
        if (route) {
            var legs = route.RouteLegs,
                turns = "<ol class='HYDDirection'>",
                leg = null,
                i,
                j,
                totalDistance = 0,  // The sum of all leg distances
                turn,
                legDistance;
            // Get intermediate legs
            if (legs.length) {
                for (i = 0; i < legs.length; i++) {
                    // Get this leg so we don't have to derefernce multiple times
                    leg = legs[i];  // Leg is a VERouteLeg object
                    // Unroll each intermediate leg
                    turn = null;  // The itinerary leg
                    legDistance = null;  // The distance for this leg

                    for (j = 0; j < leg.Itinerary.Items.length; j++) {
                        turn = leg.Itinerary.Items[j];  // turn is a VERouteItineraryItem object
                        turns += "<li>" + turn.Text + "</li>";
                        legDistance = turn.Distance;
                        totalDistance += legDistance;
                    }
                }
                turns += "</ol>";
                $("#NHYDTtl,#NHYDMile").show();
                $("#NHYDMile").html("<b id='totalDistance'>Total distance: </b>" + totalDistance.toFixed(1) + " miles");
                $("#BingDirection").html(turns);
            }
        }
    }
    function getRouteMap(locations) {
        var options = new VERouteOptions();
        options.DrawRoute = true;
        options.SetBestMapView = true;
        options.RouteCallback = ShowTurns;
        options.DistanceUnit = VERouteDistanceUnit.Mile;
        options.ShowDisambiguation = true;
        oBingMap.GetDirections(locations, options);
    }
    function getRouteTo(latitude, longitude, inputAddress) {
        var MAQSoftwareLocation = new VELatLong(latitude, longitude), iAddressSectionTopPosition;
        if (inputAddress && inputAddress !== "") {
            getRouteMap([inputAddress, MAQSoftwareLocation]);
        }
        iAddressSectionTopPosition = $("#NHYDTtl").offset().top;
        $(sScrollElement).animate({ scrollTop: iAddressSectionTopPosition }, 500);
    }
    function renderMap(sCurrentLocation, flag, sInputAddress) {
        $("#MapDirection").show();
        var iIndex = -1;
        switch (sCurrentLocation) {
        case "Redmond":
            iIndex = 0;
            break;
        case "Mumbai":
            iIndex = 1;
            break;
        case "Hyderabad":
            iIndex = 2;
            break;
        }
        if (iIndex > -1) {
            if (flag) {
                $("#FromAddress").attr("placeholder", sCurrentLocation);
                showMap(oMapData[iIndex].lat, oMapData[iIndex].long, oMapData[iIndex].address);
            } else {
                $("#BingDirection").addClass("Loading");
                getRouteTo(oMapData[iIndex].lat, oMapData[iIndex].long, sInputAddress);
            }
        }
        $('#inputAddress').attr("placeholder", sCurrentLocation);
    }
    function setMapPosition() {
        if (isChrome || isSafari) {
            sScrollElement = "body";
        } else {
            sScrollElement = "html";
        }
        if ($(window).width() >= 0 && $(window).width() < 752) {
            $("#MapAddress").after($("#myMap"));
            $("#myMap").css("margin-top", "15px");
        } else {
            $("#MapContainer").append($("#myMap"));
            $("#myMap").css("margin-top", "0");
        }
        getMapSectionOffset();
        if (bTouchZoom) {
            $(sScrollElement).animate({ scrollTop: oOffset.top }, 500);
        }
        bTouchZoom = false;
    }
    $(document).ready(function () {
        $(".BackLink").attr("href", "mailto:sales@MAQSoftware.com?Subject=MAQ%20Software:%20Request%20for%20Information%20(" + new Date().format() + ")").html("sales@maqsoftware.com");
        $(".VwMap").click(function () {
            bTouchZoom = bMapVisible = true;
            sCurrentCity = $(this).attr("data-name");
            $("#ClearDirection").click();
        });
        $('#FromAddress').keypress(function (e) {
            if (e.keyCode === 13) {
                $("#GetDirection").click();
            }
        });
        $("#GetDirection").click(function () {
            sSearchTerm = $("#FromAddress").val();
            sSearchTerm = sSearchTerm.replace(/^\s+|\s+$/g, '');
            if (sSearchTerm) {
                $("#BingDirection").html("");
                $("#NHYDTtl,#NHYDMile").hide();
                renderMap(sCurrentCity, false, sSearchTerm);
            }
        });
        $("#ClearDirection").click(function () {
            $("#FromAddress").val("");
            $("#BingDirection").html("");
            $("#NHYDTtl,#NHYDMile").hide();
            renderMap(sCurrentCity, true);
            setMapPosition();
        });
    });
    function redrawMap() {
        if (bMapVisible) {
            setMapPosition();
        }
    }
    function ResizeComplete() {
        if (new Date() - rtime < delta) {
            setTimeout(ResizeComplete, delta);
        } else {
            timeout = false;
            redrawMap();
        }
    }
    $(window).resize(function () {
        if (iLastWindowWidth !== $(window).width()) {
            rtime = new Date();
            if (timeout === false) {
                timeout = true;
                setTimeout(ResizeComplete, delta);
            }
        }
    });
}());