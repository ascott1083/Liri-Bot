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

