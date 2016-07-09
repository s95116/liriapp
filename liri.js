var launchPhrase = process.argv[2];
var songSearch = process.argv[3];
var movieSearch = process.argv[3]
//console.log("launchPhrase = " + launchPhrase);

if ((launchPhrase == 's') || (launchPhrase == 'spotify') || (launchPhrase == 'spotify-this-song'))
    {spotify(songSearch);}
else   
    if((launchPhrase == 't') || (launchPhrase == 'twitter') || (launchPhrase == 'my-tweets'))
      {twitter();}
    else   
        if((launchPhrase == 'm') || (launchPhrase == 'omdb') || (launchPhrase == 'movie') || (launchPhrase == 'movie-this'))
          {movie(movieSearch);}
        else
          {doThis();}



function spotify(song_name){
  var spotify = require('spotify');
 
// spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) { //original query
  spotify.search({ type: 'track', query: song_name }, function(err, data) {

    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }

    //add space between command and data returned
    console.log("\n");

    //Returns 5 results
    for (var i = 0; i < 5; i++) {


      // Returns as many items as present per the data limit
      //for (var i = 0; i < data.tracks.limit -1; i++) {


    //Return entire object information
    // console.log(JSON.stringify(data.tracks.items[0], null, 2));


    //Console.log code for data.tracks.limit
    //console.log(JSON.stringify("Data Tracks Limit: " + data.tracks.limit, null, 2));


    //Writes artist name, song name, preview url, and album name to screen
    console.log(JSON.stringify("Artist Name: " + data.tracks.items[i].artists[0].name, null, 2));
    console.log(JSON.stringify("Song Name: " + data.tracks.items[i].name, null, 2));
    console.log(JSON.stringify("Preview URL: " + data.tracks.items[i].preview_url, null, 2));
    console.log(JSON.stringify("Album Name: " + data.tracks.items[i].album.name, null, 2));
    console.log("\n");//Adds space between each artist
    }//end of for loop
});
}//end of Spotify function

function twitter(){
  console.log("twitter works")
}


function movie(movie_name, movie_year){
  // console.log("movie works")
  var omdb = require('omdb');
 
  // omdb.search('saw', function(err, movies) {
  //     if(err) {
  //         return console.error(err);
  //     }
   
  //     if(movies.length < 1) {
  //         return console.log('No movies were found!');
  //     }

  //     //add space between command and data returned
  //     console.log("\n");
   
  //     movies.forEach(function(movie) {
  //         console.log('%s (%d)', movie.title, movie.year);
  //     });
  // });
   
  omdb.get({ title: movie_name, year: movie_year }, true, function(err, movie) {
      if(err) {
          return console.error(err);
      }
   
      if(!movie) {
          return console.log('Movie not found!');
      }

      // console.log("\n");
      // console.log("The movie title is: " + movie.title);
      // console.log("The year this picture was filed in: " + movie.year);
      // console.log("Current rating: " + movie.imdb.rating);
      // console.log("This film was filmed in: " + movie.countries[0]);
      // console.log("This movies language is: " + movie.language);

      // //returns all actors in movie
      // var actorsArray = [movie.actors];

      // for (var i = 0; i < actorsArray.length; i++) {
      // console.log("Actors appearing in the movie are: " + actorsArray[i] + " ");
      // }

      // console.log("\n");
      // console.log("The Plot --- " + movie.plot);
      // console.log("\n");



      console.log(movie);
  });
}

function doThis(){
  console.log("do this")
}