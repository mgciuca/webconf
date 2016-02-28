	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
	    $routeProvider

	    // route for the home page
	        .when('/', {
	        templateUrl: 'pages/home.html',
	        controller: 'mainController'
	    })

	    // route for the about page
	    .when('/General-Info', {
	            templateUrl: 'pages/General-Info.html',
	            controller: 'generalinfoController'
	        })
	        // route for the about page
	        .when('/Organizers', {
	            templateUrl: 'pages/Organizers.html',
	            controller: 'organizersController'
	        })
	        // route for the about page
	        .when('/Speakers', {
	            templateUrl: 'pages/Speakers.html',
	            controller: 'speakersController'
	        })
	        // route for the about page
	        .when('/Participants', {
	            templateUrl: 'pages/Participants.html',
	            controller: 'participantsController'
	        })
	        // route for the about page
	        .when('/Program', {
	            templateUrl: 'pages/Program.html',
	            controller: 'programController'
	        })
	        // route for the about page
	        .when('/Accomodation', {
	            templateUrl: 'pages/Accomodation.html',
	            controller: 'accomodationController'
	        })

	    // route for the contact page
	    .when('/Photo-Gallery', {
	        templateUrl: 'pages/Photo-Gallery.html',
	        controller: 'photogalleryController'
	    });

	});


	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
	    // create a message to display in our view
	    //$scope.message = 'Everyone come and see how good I look!';
	    //$("#navbar").attr('class', 'navbar-collapse collapse');

	});


	scotchApp.controller('generalinfoController', function($scope) {
	    //$scope.message = 'Look! I am an about page.';
	    //$("#navbar").attr('class', 'navbar-collapse collapse');

	});

	scotchApp.controller('organizersController', function($scope) {
	    //$scope.message = 'Contact us! JK. This is just a demo.';
	    //$("#navbar").attr('class', 'navbar-collapse collapse');

	    $.ajax({
	        method: "GET",
	        url: "assets/js/organizers.js",
	        dataType: "script"
	    });

	});

	scotchApp.controller('speakersController', function($scope) {
	    //$scope.message = 'Contact us! JK. This is just a demo.';
	    //$("#navbar").attr('class', 'navbar-collapse collapse');

	    $.ajax({
	        method: "GET",
	        url: "assets/js/speakers.js",
	        dataType: "script"
	    });


	});

	scotchApp.controller('participantsController', function($scope) {
	    //$scope.message = 'Contact us! JK. This is just a demo.';
	    //$("#navbar").attr('class', 'navbar-collapse collapse');

	    $.ajax({
	        method: "GET",
	        url: "assets/js/participants.js",
	        dataType: "script"
	    });

	});

	scotchApp.controller('programController', function($scope) {
	    //$scope.message = 'Contact us! JK. This is just a demo.';
	    //$("#navbar").attr('class', 'navbar-collapse collapse');

	});

	scotchApp.controller('accomodationController', function($scope) {
	    //$scope.message = 'Contact us! JK. This is just a demo.';
	    //$("#navbar").attr('class', 'navbar-collapse collapse');

	});

	scotchApp.controller('photogalleryController', function($scope) {
	    //$scope.message = 'Contact us! JK. This is just a demo.';
	    //$("#navbar").attr('class', 'navbar-collapse collapse');

	    $.ajax({
	        method: "GET",
	        url: "assets/js/photo-gallery.js",
	        dataType: "script"
	    });

	});

	$("#navbar").has("a").click(function() {
	    $("#navbar").attr('class', 'navbar-collapse collapse');
	});
