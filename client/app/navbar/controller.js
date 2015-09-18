
angular
	.module('app')
	.controller('navbarCtrl', ['$scope', function($scope){
		$scope.links = [
			{
				name: 'Work',
				href: '#/work'
			},
			{
				name: 'People',
				href: '#/people'
			},
			{
				name: 'Blog',
				href: '#/blog'
			},
			{
				name: 'Culture',
				href: '#/culture'
			},
			{
				name: 'Careers',
				href: '#/careers'
			},

		];
	}]);