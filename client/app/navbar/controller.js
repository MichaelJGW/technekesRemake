
angular
	.module('app')
	.controller('navbarCtrl', ['$scope', function($scope){
		$scope.links = [
			{
				name: 'About',
				href: ''
			}
		];
	}]);