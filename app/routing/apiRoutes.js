const path = require('path')
var friendsList = require("../data/friends");

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friendsList);
        console.log("YEet")
    });

    app.post('/api/friends', function(req, res) {
		// Capture the user input object
        var newFriend = req.body;
        var userScores = newFriend.scores;
        var scoresArray = [];
        var friendCount = 0;
        var bestMatch = 0;

    //runs through all current friends in list
    for(var i=0; i<friendsList.length; i++){
      var scoresDiff = 0;
      //run through scores to compare friends
      for(var j=0; j<userScores.length; j++){
        scoresDiff += (Math.abs(parseInt(friendsList[i].scores[j]) - parseInt(userScores[j])));
        console.log("Scores Diff " + scoresDiff)
        
      };
      scoresArray.push(scoresDiff);
    };
    console.log(scoresArray);
    
    // friendsList.push(req.body);

});
}
