
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

		var hamburgerOpen = false;
		$scope.hamburgerClicked = function(){
			if(hamburgerOpen){
				$($('.navbar-toggle .icon-bar')[0]).removeClass('navbar-hamburger-button-open-top');
				$($('.navbar-toggle .icon-bar')[1]).removeClass('navbar-hamburger-button-open-mid');
				$($('.navbar-toggle .icon-bar')[2]).removeClass('navbar-hamburger-button-open-bottom');
				hamburgerOpen = false;
			}else{
				$($('.navbar-toggle .icon-bar')[0]).addClass('navbar-hamburger-button-open-top');
				$($('.navbar-toggle .icon-bar')[1]).addClass('navbar-hamburger-button-open-mid');
				$($('.navbar-toggle .icon-bar')[2]).addClass('navbar-hamburger-button-open-bottom');
				hamburgerOpen = true;
			}
		}
		$scope.clicked = function(id){
			sessionStorage.setItem('navbarActive', id);
		}
	}]);