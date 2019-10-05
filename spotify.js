//Require data from node-spotify npm package
let Spotify = require('node-spotify-api');
// Requiring our spotify, OMDB, and bands in town modules exported from keys.js
let keys = require("./keys");
// Storing API keys in variables.
let spotify = new Spotify(keys.spotify);
//Require data from File System npm package
let fs = require("fs");

function mySpotify(userInput) {
    let song = userInput;
    if (!song) {
        song = "the sign Ace of Base" 
    }
    spotify.search({ type: 'track', query: song }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
     
      console.log("\n---------------------\nSong Name: " + data.tracks.items[0].name);
      console.log("Artist(s) Name: "+ data.tracks.items[0].artists[0].name);
      console.log("Album Name: "+ data.tracks.items[0].album.name);
      console.log("Preview URL: " + data.tracks.items[0].preview_url+"\n---------------\n");

     //adds text to log.txt
        fs.appendFileSync('log.txt', "\r\n" + "Song Search Log---------------------------------------"+ "\r\n", 'utf8');
        fs.appendFileSync('log.txt', "\r\n" + "Song Name: " + data.tracks.items[0].name + "\r\n", 'utf8' );
        fs.appendFileSync('log.txt', "\r\n" + "Artist(s): " + data.tracks.items[0].artists[0].name + "\r\n", 'utf8');
        fs.appendFileSync('log.txt', "\r\n" + "Album: " + data.tracks.items[0].album.name+ "\r\n", 'utf8');
        fs.appendFileSync('log.txt', "\r\n" + "Preview Link: " + data.tracks.items[0].preview_url + "\r\n", 'utf8' );
        fs.appendFileSync('log.txt', "\r\n" + "-------------------------------------------------------"+ "\r\n", 'utf8');
    });
    }

// Exporting the function which we will use in liri.js
module.exports = mySpotify;