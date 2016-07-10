var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '5Tqny08y0YhbpopzFrhBijRrm',
  consumer_secret: 'ellSEfiGUmVefHI5PjyCJ2XUaPdMSvtl42JsRXwz0qtF27EL5a',
  access_token_key: '13608152-ZrJG0XOEIj6S0HFq9UzCth4ErYjQ04u9BeCNrDQyr',
  access_token_secret: 'yW1ys6wy5485N49LOBf0Q5DwiLg2WgechdVhzCtmrZmVW'
});
 
var params = {screen_name: 'aboutwhat57'};
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