angular.module('RuedaApp.controllers', [])
	.controller('RuedaCtrl', function ($scope, RuedaService) {
		$scope.levels = RuedaService.getLevels();
	})
	.controller('RuedaLevelCtrl', function ($scope, $stateParams, RuedaService) {
		$scope.level = RuedaService.getLevel($stateParams.levelId);
	})
	.controller('RuedaVariationCtrl', function ($scope, $sce, $stateParams, RuedaService) {
		$scope.variation = RuedaService.getVariation($stateParams.levelId, $stateParams.variationId);
		$scope.videoLink = function () {
			return $sce.trustAsResourceUrl('http://www.youtube.com/embed/' + $scope.variation.videoLink.replace(/^.*\?v=/, ''));
		}
	})
	/* Clubs */
	.controller('ClubsCtrl', function ($scope, ClubsService) {
		$scope.days = ClubsService.getDays();
	})
	.controller('ClubsDayCtrl', function ($scope, $stateParams, ClubsService) {
		$scope.title = ClubsService.getDays()[$stateParams.day];
		$scope.clubs = ClubsService.getClubs(parseInt($stateParams.day, 10) + 1);
	})
;


