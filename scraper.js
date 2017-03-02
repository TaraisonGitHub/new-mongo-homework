
// ==== Dependencies ================================

var cheerio = require('cheerio');
var request = require('request');

// ==== Global Variables ============================

//var results = [];

// ==== Scraper =====================================

request('http://www.nytimes.com/pages/opinion/index.html', function(err, resp, body) {

	var $ = cheerio.load(body);
	var result = [];

	//looking for all div tags with class "story"
	$('div.story').each(function(idx, element) {
		var story = $(this).text();
		var link = $(this).children().next().children().attr('href');

		result.push({
			story: story,
			link: link
		})
	});
})