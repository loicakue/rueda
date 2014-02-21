angular.module('RuedaApp', ['ionic', 'ngSanitize', 'RuedaApp.services', 'RuedaApp.controllers'])
	.config(function ($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('tab', {
				url: "/tab",
				abstract: true,
				templateUrl: "templates/tabs.html"
			})
			.state('tab.rueda', {
				url: '/rueda',
				views: {
					'rueda-tab': {
						templateUrl: 'templates/rueda.html',
						controller: 'RuedaCtrl'
					}
				}
			})
			.state('tab.rueda-level', {
				url: '/rueda/:levelId',
				views: {
					'rueda-tab': {
						templateUrl: 'templates/rueda-level.html',
						controller: 'RuedaLevelCtrl'
					}
				}
			})
			.state('tab.rueda-variation', {
				url: '/rueda/:levelId/:variationId',
				views: {
					'rueda-tab': {
						templateUrl: 'templates/rueda-variation.html',
						controller: 'RuedaVariationCtrl'
					}
				}
			})
			.state('tab.adopt', {
				url: '/adopt',
				views: {
					'adopt-tab': {
						templateUrl: 'templates/adopt.html'
					}
				}
			})
			.state('tab.about', {
				url: '/about',
				views: {
					'about-tab': {
						templateUrl: 'templates/about.html'
					}
				}
			});

		$urlRouterProvider.otherwise('/tab/rueda');
	});

