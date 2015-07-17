
	var myApp = angular.module('myApp', ['ngRoute']);
	
	// configure our routes
	myApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'homeController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller 
	myApp.controller('homeController', function($scope) {
		$scope.message = 'Welcome. This is the Home Page where your first impression is created.';
	});

	myApp.controller('aboutController', function($scope) {
		$scope.message = 'This is where you will find all our company details.';
	});

	myApp.controller('contactController', function($scope) {
		$scope.message = 'This is where you will find how to reach us.';
	});