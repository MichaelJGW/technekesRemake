angular
	.module('app')
	.controller('workCtrl', ['$scope', function($scope){
		$scope.banner= {
			image : './../media/img/People-Drawing-on-Whiteboard.jpg',
			mainTitle : 'Our Recipe',
			secondTitle : 'Sales Support, lead generation, direct marketing and a pile of other ingredients make for one tasty recipe.'
		}
		$scope.imageAndText = {
			image : './../media/img/videoShot2.jpg',
			textTitle : 'We are one eclectic bunch here at Technekes.',
			text : 'Under a single roof, we count serious programmers, database wizards, graphic designers, strategists and planners, as well as experts in agriculture, healthcare and financial services. Our work can be as simple as fine-tuning a database or as complex as a multi-channel program involving direct mail, call action and custom tools and applications to monitor results in real time. Regardless of which services you tap, you can be assured we will attack your goal with all the smarts and muscle we can muster. We thrive on your success.'
		}
	}]);
