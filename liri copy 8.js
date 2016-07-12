var launchPhrase = process.argv[2];


//Spotify if statement if search field is left blank
if(typeof(process.argv[3]) != "undefined"){
      var songSearch = process.argv[3];
      
    }else{
      songSearch = "what's my age again";
    };


// var songSearch = process.argv[3];
// var movieSearch = process.argv[3];

//Movie if statement for blank search field
if(typeof(process.argv[3]) != "undefined"){
      var movieSearch = process.argv[3];
      
    }else{
      movieSearch = "Mr. Nobody";
    };

var twitterSearch = process.argv[3];


//console.log("launchPhrase = " + launchPhrase);

if ((launchPhrase == 's') || (launchPhrase == 'spotify') || (launchPhrase == 'spotify-this-song'))
    {spotify(songSearch);}
else   
    if((launchPhrase == 't') || (launchPhrase == 'twitter') || (launchPhrase == 'my-tweets'))
      {twitter(twitterSearch);}
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
    console.log(JSON.stringify("Artist Name: " + data.tracks.items[i].artists[0].name, null, 2));//fix artists 0
    console.log(JSON.stringify("Song Name: " + data.tracks.items[i].name, null, 2));
    console.log(JSON.stringify("Preview URL: " + data.tracks.items[i].preview_url, null, 2));
    console.log(JSON.stringify("Album Name: " + data.tracks.items[i].album.name, null, 2));
    console.log("\n");//Adds space between each artist
    }//end of for loop
});
}//end of Spotify function

function twitter(user_id){
  var Twitter = require('twitter');
 
  var client = new Twitter({
  consumer_key: '5Tqny08y0YhbpopzFrhBijRrm',
  consumer_secret: 'ellSEfiGUmVefHI5PjyCJ2XUaPdMSvtl42JsRXwz0qtF27EL5a',
  access_token_key: '13608152-ZrJG0XOEIj6S0HFq9UzCth4ErYjQ04u9BeCNrDQyr',
  access_token_secret: 'yW1ys6wy5485N49LOBf0Q5DwiLg2WgechdVhzCtmrZmVW'
  });
 
  var params = {screen_name: user_id};
  client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
      // console.log(tweets);

        for (var i = 0; i < 20 && i < tweets.length; i++) {
        
        console.log("\n");
        console.log("The date of the tweet is: " + tweets[i].created_at);
        console.log("The username is: " + tweets[i].user.screen_name);
        console.log("The tweet reads as follows: " + tweets[i].text);
        }//End of for loop
    }
  });
}


function movie(movie_name, movie_year){
  // console.log("movie works")
  var omdb = require('omdb');
   
  omdb.get({ title: movie_name, year: movie_year }, true, function(err, movie) {
      if(err) {
          return console.error(err);
      }
      
      //If movie cannot be found, console.logs error message
      if(!movie) {
          return console.log('Movie not found!');
      }

      //Adds spacing at top, returns movie title,year,imdb rating, country, and language
      console.log("\n");
      console.log("The movie title is: " + movie.title);
      console.log("The year this picture was filed in: " + movie.year);
      console.log("Current rating: " + movie.imdb.rating + "/10");
      console.log("This film was filmed in: " + movie.countries[0]);
      console.log("This movies language is: " + movie.language);

      //Returns all actors in movie
      var actorsArray = [movie.actors];

      for (var i = 0; i < actorsArray.length; i++) {
      console.log("Actors appearing in the movie are: " + actorsArray[i] + " ");
      }

      //Returns movie plot and adds spacing
      console.log("\n");
      console.log("The Plot --- " + movie.plot);
      console.log("\n");


      //Returns all of the object data
      // console.log(movie);
  });
}

function doThis(){
  console.log("do this")
}