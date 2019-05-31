const path = require('path')
var friendsList = require("../data/friends");

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friendsList);
    });



    app.post('/api/friends', function(req,res){
          console.log(JSON.stringify(req.body.scores));
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
  
          // console.log(totalDiff);
          // var closestMatch = Math.min(...scoreArr);
          // console.log(closestMatch);
          // var closestMatchInd = friendsList.indexOf(closestMatch);
          // console.log(closestMatchInd);

          for(var i=0; i<scoreArr.length; i++){
            if(scoreArr[i] <= scoreArr[goodMatch]){
              goodMatch = i;
            }
          }
  
        var bestMatch = friendsList[goodMatch];
        res.json(bestMatch);
    
    //     //pushes ew submission into the friendsList array
        friendsList.push(req.body);

  }); 
}

