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
 
// spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
  spotify.search({ type: 'track', query: song_name }, function(err, data) {

    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    
    console.log(JSON.stringify(data.tracks.items[0], null, 2));
    // console.log(JSON.stringify(data.tracks.items[0].album.name, null, 2));
    // console.log(JSON.stringify(data.tracks.items[0].album.name, null, 2));
    // console.log(JSON.stringify(data.tracks.items[0].album.name, null, 2));
    // console.log(JSON.stringify(data.tracks.items[0].album.name, null, 2));
    // console.log(JSON.stringify(data.tracks.items[0].album.name, null, 2));
    // console.log(JSON.stringify(data.tracks.items[0].album.name, null, 2));

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