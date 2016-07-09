var launchPhrase = process.argv[2];
var songSearch = process.argv[3];
//console.log("launchPhrase = " + launchPhrase);

if ((launchPhrase == 's') || (launchPhrase == 'spotify') || (launchPhrase == 'spotify-this-song'))
    {spotify(songSearch);}
else   
    if((launchPhrase == 't') || (launchPhrase == 'twitter') || (launchPhrase == 'my-tweets'))
      {twitter();}
    else   
        if((launchPhrase == 'm') || (launchPhrase == 'omdb') || (launchPhrase == 'movie') || (launchPhrase == 'movie-this'))
          {movie();}
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

function movie(){
  console.log("movie works")
}

function doThis(){
  console.log("do this")
}