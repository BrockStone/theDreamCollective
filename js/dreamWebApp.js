var dreamWebApp = angular.module('dreamWebApp', ['ngRoute']);

// configure our routes
dreamWebApp.config(function($routeProvider) {
    $routeProvider

        // Home-page Route
        .when('/', {
            templateUrl : 'views/welcome.html',
            controller  : 'mainCtrl'
        })
});

// Factory to Dynamically set the page title
dreamWebApp.factory('Page', function(){
    
    return {
        title: function() { return title; },
        setTitle: function(newTitle) { title = newTitle; }
    };
}); 

// create the controller and inject Angular's $scope
dreamWebApp.controller('mainCtrl', function($scope, Page) {
   
    // Set title to:    
    Page.setTitle('BSD | Home');
});

dreamWebApp.controller('dreamCtrl', function($scope, Page) {
    
    // Set title to:    
    Page.setTitle('Dream-Collective');
});
