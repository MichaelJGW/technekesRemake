angular
	.module('app')
	.controller('peopleCtrl', ['$scope', function($scope){
		$scope.title = 'Real Estate Listings';
		$scope.subTitle = 'Powered by Placester';
	}]);