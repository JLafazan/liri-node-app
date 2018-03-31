
require("dotenv").config();

var fs = require('fs');

var keys = require("./keys.js");

appPhrase = ("my-tweet", "spotify-this-song", "movie-this", "do-what-it-says");


var appPhrase = process.argv[2];
var name = process.argv[3];


var request = require('request');




var client = new Twitter(keys.twitter);

//Twitter Function; List 20 Tweets.


if (process.argv[2]="my-tweets") {
	function displayTweets() {
	var params = {screen_name: 'JNLafazan', count: 20};
	client.get('statuses/user_timeline', params, function(error, tweets, response)
	{
	if (!error) {
		console.log(tweets);
	}
  
  })

}

	displayTweets();
}


// Run Spotify Function

if (process.argv[2]="spotify-this-song") {
	function spotifyThisSong() {

		fs.readFile('random.txt', 'utf8', function(error, rdData) {
    	var sampleTextArr = rdData.split(',');

    	

}) 
}
		spotifyThisSong(sampleTextArr[1]);

}


// Run Spotify Function

if (process.argv[2]="movie-this") {
	function movieThis() {

		fs.readFile('random.txt', 'utf8', function(error, rdData) {
    	var sampleTextArr = rdData.split(',');

    	

})
}
		movieThis(sampleTextArr[1]);

}





// //OMDB Function

function movieThis(value) {
    
    request('http://www.omdbapi.com/?t=' + value + '&tomatoes=true&r=json', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            jsonBody = JSON.parse(body);
            console.log(' ');
            console.log('Title: ' + jsonBody.Title);
            console.log('Year: ' + jsonBody.Year);
            console.log('IMDb Rating: ' + jsonBody.imdbRating);
            console.log('Country: ' + jsonBody.Country);
            console.log('Language: ' + jsonBody.Language);
            console.log('Plot: ' + jsonBody.Plot);
            console.log('Actors: ' + jsonBody.Actors);
            console.log('Rotten Tomatoes Rating: ' + jsonBody.tomatoRating);
            console.log('Rotten Tomatoes URL: ' + jsonBody.tomatoURL);
            console.log(' ');
            fs.appendFile('log.txt', ('----------Movie This Entry Begins --------\r\n' 
            	+ Date() +  '\r\nOutput Information:\r\n' + 'Title: ' 
            	+ jsonBody.Title + '\r\nYear: ' + jsonBody.Year + '\r\nIMDb Rating: ' 
            	+ jsonBody.imdbRating + '\r\nCountry: ' + jsonBody.Country 
            	+ '\r\nLanguage: ' + jsonBody.Language + '\r\nPlot: ' + jsonBody.Plot 
            	+ '\r\nActors: ' + jsonBody.Actors + '\r\nRotten Tomatoes Rating: ' 
            	+ jsonBody.tomatoRating + '\r\nRotten Tomatoes URL: ' 
            	+ jsonBody.tomatoURL 
            	+ '\r\n --------- Movie This Entry Ends ------\r\n \r\n'), function(err) {
                if (err) throw err;
            });
        }
    });
} 

//Spotify Function

function spotifyThisSong(value) {
    
    request('https://api.spotify.com/v1/search?q=' + value + '&type=track', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            jsonBody = JSON.parse(body);
            console.log(' ');
            console.log('Artist: ' + jsonBody.tracks.items[0].artists[0].name);
            console.log('Song: ' + jsonBody.tracks.items[0].name);
            console.log('Preview Link: ' + jsonBody.tracks.items[0].preview_url);
            console.log('Album: ' + jsonBody.tracks.items[0].album.name);
            console.log(' ');
            fs.appendFile('log.txt', ('-------- Entry Spotify Begins-------\r\n' 
            	+ Date() + '\r\n \r\nOutput Information:\r\n' + 'Artist: ' 
            	+ jsonBody.tracks.items[0].artists[0].name + '\r\nSong: ' 
            	+ jsonBody.tracks.items[0].name + '\r\nPreview Link: ' 
            	+ jsonBody.tracks.items[0].preview_url + '\r\nAlbum: ' 
            	+ jsonBody.tracks.items[0].album.name 
            	+ '\r\n-------- Entry Spotify Ends ---------\r\n \r\n'), function(err) {
                if (err) throw err;
            });
        }
    });
} 











