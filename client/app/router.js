angular
	.module('app',['ui.router'])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
		
		var pathPrefix = 'compiled/app/';

		$urlRouterProvider.otherwise('/');
		$stateProvider.state('home', {
			url: '/',
			templateUrl: pathPrefix + 'home/template.html',
			controller: 'homeCtrl'
		});
		$stateProvider.state('work', {
			url: '/work',
			templateUrl: pathPrefix + 'work/template.html',
			controller: 'workCtrl'
		});
		$stateProvider.state('people', {
			url: '/people',
			templateUrl: pathPrefix + 'people/template.html',
			controller: 'peopleCtrl'
		});
		$stateProvider.state('blog', {
			url: '/blog',
			templateUrl: pathPrefix + 'blog/template.html',
			controller: 'blogCtrl'
		});
		$stateProvider.state('culture', {
			url: '/culture',
			templateUrl: pathPrefix + 'culture/template.html',
			controller: 'cultureCtrl'
		});
		$stateProvider.state('careers', {
			url: '/careers',
			templateUrl: pathPrefix + 'careers/template.html',
			controller: 'careersCtrl'
		});

	}]);