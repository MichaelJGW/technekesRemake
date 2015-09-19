
angular
	.module('app')
	.controller('navbarCtrl', ['$scope', function($scope){
		$scope.active = sessionStorage.getItem('navbarActive') | -1;
		$scope.getActiveClass = function(id){
			if(id == sessionStorage.getItem('navbarActive')){
				return 'active';
			}else{
				return 'inactive';
			}
		}
		$scope.links = [
			{
				name: 'Work',
				href: '#/work',
				id : 0,
			},
			{
				name: 'People',
				href: '#/people',
				id : 1,
			},
			{
				name: 'Blog',
				href: '#/blog',
				id : 2,
			},
			{
				name: 'Culture',
				href: '#/culture',
				id : 3,
			},
			{
				name: 'Careers',
				href: '#/careers',
				id : 4,
			},
		];
		$scope.clicked = function(id){
			sessionStorage.setItem('navbarActive', id);
		}
	}]);