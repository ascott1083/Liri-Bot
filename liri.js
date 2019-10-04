//Read and set any environment variables with the .env package.
require("dotenv").config();

//Require data from File System npm package
let fs = require("fs");

// Requiring our Spotify function exported from spotify.js
let mySpotify = require("./spotify.js");
// Requiring our Movies function exported from omdb.js
let myMovies = require("./omdb.js");
// Requiring our Concerts function exported from concerts.js
let myConcert = require("./concerts.js");

//Creates initial user command.
let userCommand=process.argv[2];
//Creates user input.
let userInput=process.argv.splice(3,process.argv.length).join(' ');

//Program conditions 
switch (userCommand) {
    // help function to clarify commands used
    case "help":
        console.log("Please type one of these commands\n"+
                    "'concert-this': to search your favorite artist concerts\n"+
                    "'spotify-this-song': to search your favorite song\n"+
                    "'movie-this': to search your favorite movie \n"+
                    "'do-what-it-says': using command from random.txt \n"
                    );
        break;
    case "concert-this":
        myConcert(userInput);
        break;
    case "spotify-this-song":
        mySpotify(userInput);
        break;
    case "movie-this":
        myMovies(userInput);
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
    //if anything else written
    default:
        console.log("LIRI doesn't understand that - Please type 'node liri.js help' for more information");
};

