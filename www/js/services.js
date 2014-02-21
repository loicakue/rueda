angular.module('RuedaApp.services', [])
	.service('RuedaService', function ($http) {
		var levelsJson = $http.get('model/levels.json');
		var variationsJson = $http.get('model/variations.json');

		this.getLevels = function () {
			var levels = [];
			levelsJson.success(function (result) {
				angular.copy(result.levels, levels);
			});
			return levels;
		};

		this.getLevel = function (id) {
			var level = {};
			levelsJson.success(function (result) {
				angular.forEach(result.levels, function (item) {
					if (item.id === id) {
						angular.copy(item, level);
					}
				});
				angular.copy(result.levels, levels);
			});
			variationsJson.success(function (result) {
				level.variations = result.levels[id];
			});
			return level;
		};

		this.getVariation = function (levelId, variationId) {
			var variation = {};
			variationsJson.success(function (result) {
				angular.copy(result.levels[levelId][variationId], variation);
			});
			return variation;
		}
	});
