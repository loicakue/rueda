angular.module('RuedaApp', ['ionic', 'ngSanitize', 'RuedaApp.services', 'RuedaApp.controllers', 'RuedaApp.filters'])
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
			.state('tab.clubs', {
				url: '/clubs',
				views: {
					'clubs-tab': {
						templateUrl: 'templates/clubs.html',
						controller: 'ClubsCtrl'
					}
				}
			})
			.state('tab.clubs-day', {
				url: '/clubs/:day',
				views: {
					'clubs-tab': {
						templateUrl: 'templates/clubs-day.html',
						controller: 'ClubsDayCtrl'
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

