
require("dotenv").config();


appPhrase = ("my-tweet", "spotify-this-song", "movie-this", "do-what-it-says");


var appPhrase = process.argv[2];
var name = process.argv[3];


var request = require('request');
var fs = require('fs');

var params = {screen_name: 'JNLafazan', count: 20};






function myTweets() {
	var Twitter = require('twitter');
	var kyofTwitter = require('./keys.js');
	var client = new Twitter(kyOfTwitter.twitterKeys);

    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error && (response.statusCode === 200)) {
            fs.appendFile('log.txt', 
            	('------- Twitter Entry Begins ----------\r\n' + 
            		Date() +  '\r\n \r\nDATA OUTPUT:\r\n'), 
				function(err) {
                		if (err) throw err;
                    });
            console.log(' ');
            console.log('Last 20 Tweets:')
            for (i = 0; i < tweets.length; i++) {
                var cnter = i + 1;
                console.log(' ');
                console.log([i + 1] + '. ' + tweets[i].text);
                console.log('Created: ' + tweets[i].created_at);
                console.log(' ');
                fs.appendFile('log.txt', (cnter + '. Tweet: ' + tweets[i].text 
                	+ '\r\nCreated at: ' + tweets[i].created_at + ' \r\n'), function(err) {
                    if (err) throw err;
                });
            }
            fs.appendFile('log.txt', ('------ Twitter Entry Ends -----\r\n \r\n'), function(err) {
                if (err) throw err;
            });
        }
    });
} 

switch (appPhrase) {
    case 'my-tweets':
        myTweets();
        break;
     default:
     	console.log("Use my-tweets, movie-this, spotify-this-song, do-what-it-says");

}

