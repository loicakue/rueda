angular.module('RuedaApp.services', ['ngResource'])
	.service('RuedaService', function ($http) {
		var levelsJson = $http.get('model/levels.json');
		var variationsJson = $http.get('model/variations.json');
		var variationNameMapping = null;

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
				variationNameMapping = result.names;
				level.variations = result.levels[id];
			});
			return level;
		};

		this.getVariation = function (levelId, variationId) {
			var variation = {};
			variationsJson.success(function (result) {
				variationNameMapping = result.names;
				angular.copy(result.levels[levelId][variationId], variation);
			});
			return variation;
		};

		this.getNameMapping = function () {
			return variationNameMapping;
		};
	})
	.service('ClubsService', function ($http) {
		var clubsJson = $http.get('model/clubsIsrael.json');
		this.getClubs = function (weekDay) {
			var clubs = [];
			clubsJson.success(function (result) {
				angular.copy(result.filter(function (club) {
					return club.week_day == weekDay;
				}), clubs);
			});
			return clubs;
		}

		this.getDays = function () {
			return ['יום ראשון', 'יום שני', 'יום שלישי', 'יום רביעי', 'יום חמישי', 'יום שישי', 'יום שבת'];
		};

		this.getClub = function (clubId) {
			var club = {};
			clubsJson.success(function (result) {
				angular.forEach(result, function (candidate) {
					if (candidate.id == clubId) {
						angular.copy(candidate, club);
					}
				});
			});
			return club;
		}
	})
	.service('VideosService', function ($resource) {
		var videos = $resource('model/timingVideos.json').query();

		this.getVideos = function () {
			return videos;
		};

		this.getVideo = function(videoId) {
			var video = {};
			videos.$promise.then(function() {
				angular.copy(videos[videoId], video);
			});
			return video;
		};
	});
