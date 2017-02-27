
// ==== Dependencies ================================

var cheerio = require('cheerio');
var request = require('request');

// ==== Global Variables ============================

//var results = [];

// ==== Scraper =====================================

request('http://www.nytimes.com/pages/opinion/index.html', function(err, resp, body) {

	var $ = cheerio.load(body);

	//looking for all div tags with class "story"
	console.log($('div.story'));
})