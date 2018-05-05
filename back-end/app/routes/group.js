module.exports = function(app, db) {
    const collection = 
    

    function compare(a,b){
      if(a.pts>b.pts){
        return -1;
      }
      else if(a.pts<b.pts){
        return 1;
      }
      else{
        if(a.gdif>b.gdif){
            return -1;
        }
        else if(a.gdif<b.gdif){
          return 1;
        }
        else{
          if(a.gcon<b.gcon){
            return -1;
          }
          else if(a.gcon>b.gcon){
            return 1;
          }
          else{
            return 0;
          }
        }
      }
    }
  app.get('/groups', (req, res) => {
    
    db.collection('groups').find({}).toArray((err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        for(var group in result){
          console.log(result[group].teams.sort(function compare(a,b){
            if(a.pts>b.pts){
              return -1;
            }
            else if(a.pts<b.pts){
              return 1;
            }
            else{
              if(a.gdif>b.gdif){
                  return -1;
              }
              else if(a.gdif<b.gdif){
                return 1;
              }
              else{
                if(a.gcon<b.gcon){
                  return -1;
                }
                else if(a.gcon>b.gcon){
                  return 1;
                }
                else{
                  return 0;
                }
              }
            }
          }))
        }
        res.send(result);
      }
    });
  });

  app.post('/groups', (req, res) => {
    const note = { text: req.body.body, title: req.body.title };
    db.collection('groups').insert(note, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });

3
}