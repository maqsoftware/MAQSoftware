var sGoogleMapScript = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAmjD81Lsw8gUkA-9q6mJG7EotQgaSke74"
, oMapAddress = ["MAQ Software Redmond WA", "MAQ Software Andheri", "MAQ Software Hyderabad India"]
, sCurrentCity
, sLocation,
oMapData = [
            {
                address: "2027 152nd Avenue NE\nRedmond,\nWA 98052",
                lat: 47.633087,
                long: -122.133202
            },
            {
                address: "201, Meadows Building,\nSahar Plaza on Andheri Kurla Road,\nAndheri East,\nMumbai 400 059",
                lat: 19.1128987,
                long: 72.8685805
            },
            {
                address: "Level 7, Astro, aVance Business Hub,\nBehind Dell Campus,\nHITEC City 2, Madhapur,\nHyderabad 500 081",
                lat: 17.446235,
                long: 78.368914
            }
];
function contactConstructor() {
    $(".VwMap").click(function () {
        sCurrentCity = $(this).attr("data-name");
        switch (sCurrentCity) {
            case "Redmond":
                iIndex = 0;
                break;
            case "Mumbai":
                iIndex = 1;
                break;
            case "Hyderabad":
                iIndex = 2;
                break;
            default:
                sCurrentCity = "Redmond";
                iIndex = 0;
                break;
        }
        if (iIndex > -1) {            
            showMap(oMapData[iIndex].lat, oMapData[iIndex].long, oMapData[iIndex].address);
        }
        var iAddressSectionTopPosition, sScrollElement = "body,html";
        iAddressSectionTopPosition = $("#map").offset().top;
        iAddressSectionTopPosition -= 65; // -65px for header/padding
        $(sScrollElement).animate({ scrollTop: iAddressSectionTopPosition }, 500);
    });
}
function initMap() {
    showMap(oMapData[0].lat, oMapData[0].long, oMapData[0].address);
}
function showMap(Latitude, Longitude, address) {
    // Create a new StyledMapType object, passing it an array of styles,
    // and the name to be displayed on the map type control.
    var oLatLng = { lat: Latitude, lng: Longitude };
    var styledMapType = new google.maps.StyledMapType(
        [
  {
      "elementType": "geometry",
      "stylers": [
        {
            "color": "#f5f5f5"
        }
      ]
  },
  {
      "elementType": "labels.icon",
      "stylers": [
        {
            "visibility": "off"
        }
      ]
  },
  {
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#616161"
        }
      ]
  },
  {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
            "color": "#f5f5f5"
        }
      ]
  },
  {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#bdbdbd"
        }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
            "color": "#eeeeee"
        }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#757575"
        }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
            "color": "#e5e5e5"
        }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#9e9e9e"
        }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
            "color": "#ffffff"
        }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#757575"
        }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
            "color": "#dadada"
        }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#616161"
        }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#9e9e9e"
        }
      ]
  },
  {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
            "color": "#e5e5e5"
        }
      ]
  },
  {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
            "color": "#eeeeee"
        }
      ]
  },
  {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
            "color": "#c9c9c9"
        }
      ]
  },
  {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#9e9e9e"
        }
      ]
  }
        ],
        { name: 'Styled Map' });
    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var map = new google.maps.Map(document.getElementById('map'), {
        center:  oLatLng,        
        zoom: 15,        
        disableDefaultUI: true,        
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
        }
    });
    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
    oMarker = new google.maps.Marker({
        position: oLatLng,
        map: map,
        title: 'MAQ Software\n' + address,
        animation: google.maps.Animation.DROP,
        icon: "/img/map-marker.png"        
    });    
}