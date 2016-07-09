var launchPhrase = process.argv[2];
//console.log("launchPhrase = " + launchPhrase);

if ( launchPhrase == 'spotify')
    {spotify();}
else   
    if( launchPhrase == 'twitter')
      {twitter();}
    else   
        if( launchPhrase  == 'movie')
          {movie();}
        else
          {doThis();}



function spotify(){
  var spotify = require('spotify');
 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
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