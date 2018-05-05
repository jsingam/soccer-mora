
var mongo = require('mongodb')
module.exports = function(app, db) {
    app.post('/matches', (req, res) => {
        const match=req.body;
        console.log(match);
        db.collection('matches').insert(match, (err, result) => {
            if (err) { 
              res.send({ 'error': 'An error has occurred' }); 
            } else {
              res.send(result.ops[0]);
            }
          });
    });
    app.get('/matches', (req, res) => {
      var query = { isComplete:false };
      db.collection('matches').find(query).toArray((err, result) => {
        if (err) { 
          res.send({ 'error': 'An error has occurred' }); 
        } else {
          res.send(result);
        }
      });
    });

    app.put('/matches/:id', (req, res) => {
      const id= req.params.id;
      const details = { '_id': mongo.ObjectID(id) };
      const match = req.body;
      const groupName=match["group"];
      console.log(groupName);
      let group;
      db.collection('groups').findOne({'name': groupName})
            .then(function(doc) {
                if(!doc)
                    throw new Error('No record found.');
                let team1,team2;
               for(let team of doc["teams"]){
                 if(team["name"]=== match["team1"]){
                   team1=team;
                 }
                 else if(team["name"]===match["team2"]){
                   team2=team;
                 }
               }
                team1["gscored"]+=match["score1"]
                 team1["gcon"]+=match["score2"]
                 team1["gdif"]+=(match["score1"]-match["score2"])
                 team2["gscored"]+=match["score2"]
                 team2["gcon"]+=match["score1"]
                 team2["gdif"]+=(match["score2"]-match["score1"])
               if(match["score1"]>match["score2"]){
                 team1["played"]+=1;
                 team1["win"]+=1;
                 team1["pts"]+=3;
                 team2["played"]+=1;
                 team2["loss"]+=1;
               }
               else if(match["score1"]<match["score2"]){
                team2["played"]+=1;
                team2["win"]+=1;
                team2["pts"]+=3;
                team1["played"]+=1;
                team1["loss"]+=1;
              }
              else{
                team2["played"]+=1;
                team2["draw"]+=1;
                team2["pts"]+=1;
                team1["played"]+=1;
                team1["draw"]+=1;
                team1["pts"]+=1;
              }
              for(let team of doc["teams"]){
                if(team["name"]=== match["team1"]){
                  team=team1;
                }
                else if(team["name"]===match["team2"]){
                  team=team2;
                }
              }
              db.collection('groups').update({'name': groupName},doc,(err, result) => {});
              
          });
          
          
      

    db.collection('matches').update(details, match, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(match);
      } 
    });
  });



}