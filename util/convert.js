var fs = require('fs'),
	xml2js = require('xml2js');

function processTagName(name) {
	return (/^Rueda/.test(name)) ? name[5].toLowerCase() + name.substr(6) : name;
}

function processVariations(error, result) {
	var levels = {};
	var names = {};
	var elements = {};
	result.p_salsa4fun.rueda.map(function (element) {
		if (!levels[element.level]) {
			levels[element.level] = {};
		}
		levels[element.level][element.id] = element;
		element.spanishName.split(/[\\()\/,]/).forEach(function (alias) {
			names[alias.trim()] = [parseInt(element.level), parseInt(element.id)];
		})
	});
	fs.writeFileSync('../www/model/variations.json', JSON.stringify({
		levels: levels,
		names: names
	}));
	console.log('Done');
}

xml2js.parseString(fs.readFileSync('variations.xml'),
	{explicitArray: false, tagNameProcessors: [processTagName]}, processVariations);