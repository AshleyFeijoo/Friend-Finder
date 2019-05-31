const path = require('path')
var friendsList = require("../data/friends");

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friendsList);
    });



    app.post('/api/friends', function(req,res){
          var friendScores = req.body.scores;
          var scoreArr = [];
          var goodMatch = 0;

          for(let i=0; i<friendsList.length; i++){
            var totalDiff = 0;
            for (let j =0; j <friendScores.length; j++){
              totalDiff += (Math.abs(parseInt(friendsList[i].scores[j]) - parseInt(friendScores[j])));
            }
            scoreArr.push(totalDiff);
          }

          for(var i=0; i<scoreArr.length; i++){
            if(scoreArr[i] <= scoreArr[goodMatch]){
              goodMatch = i;
            }
          }
  
        var bestMatch = friendsList[goodMatch];
        res.json(bestMatch);
        friendsList.push(req.body);
        console.log(friendsList);

  }); 
}

