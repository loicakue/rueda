angular.module('RuedaApp.filters', [])
	.filter('ruedaHyperlinks', function (RuedaService) {
		return function (html, skipId) {
			var nameMap = RuedaService.getNameMapping();
			if (!nameMap) {
				return html;
			}

			return html.replace(new RegExp(nameMap._expression, 'gi'), function (name) {
				var entry = nameMap[name.toLowerCase()];
				var level = entry[0];
				var id = entry[1];
				if (id === parseInt(skipId, 10)) {
					return name;
				} else {
					return '<a href="#/tab/rueda/' + level + '/' + id + '">' + name + '</a>';
				}
			});
		};
	});
