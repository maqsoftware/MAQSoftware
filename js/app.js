var app = angular.module('MAQSoftwareApp', ['ngRoute', 'ngResource']);
app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "/views/home.html",
        controller: "HomeController"
    })
    .when('/expertise', {
        templateUrl: '/views/datamanagement.html',
        controller: "DataManagementController"
    })
    .when('/expertise/datamanagement', {
        templateUrl: '/views/datamanagement.html',
        controller: "DataManagementController"
    })
    .when('/expertise/artificialintelligence', {
        templateUrl: '/views/artificialintelligence.html',
        controller: "ArtificialIntelligenceController"
    })
    .when('/expertise/powerbi', {
        templateUrl: '/views/powerbi.html',
        controller: "PowerBIController"
    })
    .when('/expertise/powerbiviewall', {
        templateUrl: '/views/powerbiviewall.html',
        controller: "PowerBIController"
    })
    .when('/expertise/appdevelopment', {
        templateUrl: '/views/appdevelopment.html',
        controller: "AppDevelopmentController"
    })
    .when('/expertise/cloudtransformation', {
        templateUrl: '/views/cloudtransformation.html',
        controller: "CloudTransformationController"
    })
    .when('/expertise/collaborationcontent', {
        templateUrl: '/views/collaborationcontent.html',
        controller: "CollaborationContentController"
    })
    .when('/engagement', {
        templateUrl: '/views/about.html',
        controller: "AboutController"
    })
    .when('/engagement/about', {
        templateUrl: '/views/about.html',
        controller: "AboutController"
    })
    .when('/engagement/recognitions', {
        templateUrl: '/views/recognitions.html',
        controller: "RecognitionsController"
    })
    .when('/news', {
        templateUrl: '/views/news.html',
        controller: "NewsController"
    })
    .when('/careers', {
        templateUrl: '/views/careers.html',
        controller: "CareersController"
    })
        .when('/contact', {
            templateUrl: '/views/contact.html',
            controller: "ContactController"
        })
        .when('/selfservicebi', {
            templateUrl: '/views/powerbisupport.html',
            controller: "PowerBISupportController"
        })
        .when('/expertise/selfservicebi', {
            templateUrl: '/views/powerbisupport.html',
            controller: "PowerBISupportController"
        })
    .when('/powerbisupport', {
        templateUrl: '/views/powerbisupport.html',
        controller: "PowerBISupportController"
    })
    .when('/privacystatement', {
        templateUrl: '/views/privacystatement.html',
        controller: "PrivacyStatementController"
    }).otherwise({ redirectTo: "/" });
    $locationProvider.html5Mode(true);
}])
.controller('HomeController', ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.$on('$viewContentLoaded', function () {
        // resetting flag
        iCounterFlag = 0;
        loadPlugins();
        loadNewsMainPage();
        setSliderNavigationButton();
    });
    $scope.$on('$routeChangeSuccess', function () {
        console.log('Route Change: ' + $location.url());
        $window.ga('set', 'page', $location.url());
        $window.ga('send', 'pageview', {
            'hitCallback': function () {
                console.log('GA hitCallback sent!');
            }
        });
    });
}]).controller('DataManagementController', ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
        setTabNavLinkBehavior();
    });
    $scope.$on('$routeChangeSuccess', function () {
        console.log('Route Change: ' + $location.url());
        $window.ga('set', 'page', $location.url());
        $window.ga('send', 'pageview', {
            'hitCallback': function () {
                console.log('GA hitCallback sent!');
            }
        });
    });
}]).controller('ArtificialIntelligenceController', ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
    });
    $scope.$on('$routeChangeSuccess', function () {
        console.log('Route Change: ' + $location.url());
        $window.ga('set', 'page', $location.url());
        $window.ga('send', 'pageview', {
            'hitCallback': function () {
                console.log('GA hitCallback sent!');
            }
        });
    });
}]).controller('PowerBIController', ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
        setTabNavLinkBehavior();
    });
    $scope.$on('$routeChangeSuccess', function () {
        console.log('Route Change: ' + $location.url());
        $window.ga('set', 'page', $location.url());
        $window.ga('send', 'pageview', {
            'hitCallback': function () {
                console.log('GA hitCallback sent!');
            }
        });
    });
}]).controller('AppDevelopmentController', ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
        setTabNavLinkBehavior();
    });
    $scope.$on('$routeChangeSuccess', function () {
        console.log('Route Change: ' + $location.url());
        $window.ga('set', 'page', $location.url());
        $window.ga('send', 'pageview', {
            'hitCallback': function () {
                console.log('GA hitCallback sent!');
            }
        });
    });
}]).controller('CloudTransformationController', ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
        setTabNavLinkBehavior();
    });
    $scope.$on('$routeChangeSuccess', function () {
        console.log('Route Change: ' + $location.url());
        $window.ga('set', 'page', $location.url());
        $window.ga('send', 'pageview', {
            'hitCallback': function () {
                console.log('GA hitCallback sent!');
            }
        });
    });
}]).controller('CollaborationContentController', ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
        setTabNavLinkBehavior();
    });
    $scope.$on('$routeChangeSuccess', function () {
        console.log('Route Change: ' + $location.url());
        $window.ga('set', 'page', $location.url());
        $window.ga('send', 'pageview', {
            'hitCallback': function () {
                console.log('GA hitCallback sent!');
            }
        });
    });
}]).controller('AboutController', ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
        loadNewsMainPage();
    });
    $scope.$on('$routeChangeSuccess', function () {
        console.log('Route Change: ' + $location.url());
        $window.ga('set', 'page', $location.url());
        $window.ga('send', 'pageview', {
            'hitCallback': function () {
                console.log('GA hitCallback sent!');
            }
        });
    });
}]).controller('RecognitionsController', ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
        loadNewsMainPage();
    });
    $scope.$on('$routeChangeSuccess', function () {
        console.log('Route Change: ' + $location.url());
        $window.ga('set', 'page', $location.url());
        $window.ga('send', 'pageview', {
            'hitCallback': function () {
                console.log('GA hitCallback sent!');
            }
        });
    });
}]).controller('NewsController', ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
        newsConstructor();
    });
    $scope.$on('$routeChangeSuccess', function () {
        console.log('Route Change: ' + $location.url());
        $window.ga('set', 'page', $location.url());
        $window.ga('send', 'pageview', {
            'hitCallback': function () {
                console.log('GA hitCallback sent!');
            }
        });
    });
}]).controller('CareersController', ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
        setTabNavLinkBehavior();
        onYouTubeIframeAPIReady();
        // call Career Constructor
        careersConstructor();
        //var tag = document.createElement('script');
        //tag.src = "https://www.youtube.com/iframe_api";
        //var firstScriptTag = document.getElementsByTagName('script')[0];
        //firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    });
    $scope.$on('$routeChangeSuccess', function () {
        // load script dynamically using any method
        //var careerjs = document.createElement('script');
        //careerjs.setAttribute('src', 'js/careers.js');
        //document.head.appendChild(careerjs);
        console.log('Route Change: ' + $location.url());
        $window.ga('set', 'page', $location.url());
        $window.ga('send', 'pageview', {
            'hitCallback': function () {
                console.log('GA hitCallback sent!');
            }
        });
    });
}]).controller('ContactController', ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
        contactConstructor();
    });
    $scope.$on('$routeChangeSuccess', function () {
        // load script dynamically using any method
        var googlemaps = document.createElement('script');
        googlemaps.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?v=3&sensor=true&key=AIzaSyBHkJlVTrAkgcD9jJxo_CyHx0YZZtX65iY&callback=initMap');
        document.head.appendChild(googlemaps);
        console.log('Route Change: ' + $location.url());
        $window.ga('set', 'page', $location.url());
        $window.ga('send', 'pageview', {
            'hitCallback': function () {
                console.log('GA hitCallback sent!');
            }
        });
    });
}]).controller('PowerBISupportController', ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
        redirectPowerBI();
    });
    $scope.$on('$routeChangeSuccess', function () {
        console.log('Route Change: ' + $location.url());
        $window.ga('set', 'page', $location.url());
        $window.ga('send', 'pageview', {
            'hitCallback': function () {
                console.log('GA hitCallback sent!');
            }
        });
    });
}]).controller('PrivacyStatementController', ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
    });
    $scope.$on('$routeChangeSuccess', function () {
        console.log('Route Change: ' + $location.url());
        $window.ga('set', 'page', $location.url());
        $window.ga('send', 'pageview', {
            'hitCallback': function () {
                console.log('GA hitCallback sent!');
            }
        });
    });
}]);