angular.module('RuedaApp.filters', [])
	.filter('ruedaHyperlinks', function (RuedaService) {
		return function (html) {
			var nameMap = RuedaService.getNameMapping();
			if (!nameMap) {
				return html;
			}

			return html.replace(new RegExp(nameMap._expression, 'gi'), function(match) {
				var entry = nameMap[match.toLowerCase()];
				var level = entry[0];
				var id = entry[1];
				return 	'<a href="#/tab/rueda/' + level + '/' + id + '">' + match + '</a>';
			});
		};
	});
