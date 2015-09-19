angular
	.module('app')
	.controller('cultureCtrl', ['$scope', function($scope){
		$scope.banner= {
			image : './../media/img/20131108-PIVOTAL.jpg',
			mainTitle : 'How We Do It',
			secondTitle : 'Embracing every challenge with all the smarts, muscle and fun we can muster'
		}
		$scope.imageAndText = {
			image : './../media/img/videoShot2.png',
			textTitle : 'Innovative thinking, inspired solutions, and passion for results.',
			text : 'What started off 15 years ago as a data-driven marketing company based in Jack\'s kitchen has blossomed into a flourishing demand generation powerhouse with offices in Charlotte, NC, the Research Triangle Park, NC, and Kitchener, Canada.\nWe pride ourselves on driving sales in an atmosphere fostering innovative thinking, inspired solutions, and a passion for results. And we’re even more proud of the energy we devote to helping each other grow and thrive — both here at work and in the community.\nThe way we see it, there\'s no point of being a pioneer in the world of marketing, unless you\'re also a pioneer in the world at large. And if you have fun along the way, well, that\'s just the "Technekes way."'
		}
	}]);