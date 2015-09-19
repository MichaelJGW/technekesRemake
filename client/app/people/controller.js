angular
	.module('app')
	.controller('peopleCtrl', ['$scope', function($scope){
		$scope.banner= {
			image : './../media/img/womenworkingtogether.jpg',
			mainTitle : 'Who We Are',
			secondTitle : 'It doesn\'t matter who I send something to over there. It gets done. It gets done well. And I don\'t have to worry about it.',
		}
		$scope.imageAndText = {
			image : './../media/img/videoShot3.jpg',
			textTitle : 'What makes us different: tattoos, motorcycles, antiques, number of kids. What makes us one: passion for creating demand for business.',
			text : 'It\'s not very often you\'ll find former farmers, bankers and EMTs under a single roof the way you do at Technekes. But it\'s even more rare to find a collection of people who are so single-minded and passionate about what we do.\nWe\'re obsessed with muscling more sales out of massive databases, building widgets and dashboards that deliver real time sales volume and tackling other assorted sales driving marketing programs.\nPay us a visit, though, and you\'ll also see that we know how to have a good time. We pride ourselves on helping our employees grow and thrive in the work place. We want our people to become leaders in their field and pioneers in the world of marketing.\nWe\'ll do all we can to get you there.'
		}
	}]);