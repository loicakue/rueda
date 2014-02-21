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
	})
	.filter('phoneLinks', function () {
		function escapeHtml(text) {
			return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
		}

		return function (text) {
			return escapeHtml(text).replace(/05[\d-]{8,9}/g, '<a href="tel:$&">$&</a>');
		};
	});
;
