angular
	.module('app')
	.controller('careersCtrl', ['$scope', function($scope){
		$scope.banner= {
			image : './../media/img/womenworkingtogether.png',
			mainTitle : 'Our Recipe',
			secondTitle : 'When you\'re ready to shift gears, we\'ll be waiting in the fast lane.'
		}
		$scope.imageAndText = {
			image : './../media/img/videoShot2.png',
			textTitle : 'Careers @ Technekes.',
			text : 'Technekes is a multi-channel marketing and sales support company delivering communications and sales opportunities for clients in the life sciences industries.\nWe\'ve got new opportunities all the time - both in our brick-and-mortar office in Charlotte, as well as home-based positions, based, well, right in your own kitchen!\nIf you\'re the kind of person who enjoys working in a creative atmosphere fostering innovative thinking, inspired solutions and a passion for results, we might be the right fit. Here\'s what we\'ve got to offer right now.'
		}
	}]);