angular
	.module('app')
	.controller('homeCtrl', ['$scope', function($scope){
		$scope.mainTitle = 'Let\'s Create Demand';
		$scope.secondTitle = 'Your well-oiled, data-driven, multi-channel marketing and demand creation machine. That\'s us.';
		
		$scope.summaryTitle = 'Bridging the gap between sales and marketing to bring buyers andsellers together.';
		$scope.summaryBody = "Technekes provides a single point of integration for data and marketing services to drive B2B sales for agriculture, healthcare and pharmaceutical companies throughout North America. Because we operate at the precise intersection of four disciplines — telemarketing, digital marketing, technology services and data services — our marketing campaigns are accurate and relevant. Our calls are timely and informed. Our leads are actionable and profitable. And we're able to treat your customers as if they were our own. For the sake of simplicity, we like to say that we create sales, create insights, create payments, and create relationships. But long story short, we 'Create Demand.' We do it exceptionally well. And we'd like to do the same for you. <div>Sound good? <span>Let's talk.</span></div>";
		$scope.coreInfo = [
			{
				link : '#/work',
				title : 'Work',
				body : 'Multi-platform, integrated campaigns, lead generating calling programs, precision targeted direct mail campaigns, custom dashboards. The work we generate is based on solid strategy, defined goals, proven processes and the goal of creating demand for your product or service.',
			},
			{
				link : '#/services',
				title : 'Services',
				body : 'Our services are designed to generate results. Targeting customers, qualifying leads, supporting sales and several other proven services are delivered with top-shelf customer service. We want you to work with us because we deliver results. Not only that, we\'re good people.',
			},
			{
				link : '#/culture',
				title : 'Culture',
				body : 'Our offices include a collection of farmers, tech geeks, designers, dog lovers, strategists, and guitar players who share a passion for helping other businesses better their sales. Some think of us as a team, others as a big family that knows when to rally and make great things happen.',
			},
		];
		
		
		$scope.bannerImage ='./../media/img/Fotolia_57325018_Subscription_Monthly_XL.jpg'

		//$scope.bannerImage = 'http://www.businessownerssuccessclub.com/wp-content/uploads/2015/05/womenworkingtogether.jpeg';
	}]);