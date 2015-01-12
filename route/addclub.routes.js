var express= require('express');  
var router = express.Router();     
var bodyParser = require('body-parser'); 



router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var Club = require('../model/clubs');


router.route('/users/clubs')


.post(function(req, res){
    console.log(req.body);
    var club = new Club ({
        name: req.body.name,
        facilities: req.body.facilities,
        address: req.body.address,
        rating: req.body.rating
      });

 
  club.save(function(err){

    if (err){
      res.send(err);
    }
    res.json(club);
  });
})

.get(function(req, res){

  Club.find(function(err, all_club){

    if(err){
      res.send(err);
    }
    res.json(all_club);
  });
});

router.route('/users/clubs/:clubs_id')


.get(function(req, res){
 
  Club.findById(req.params.clubs_id, function(err, sin_club) {

    if(err){
      res.send(err);
    }
    res.json(sin_club);
  });
})



.put(function(req, res){
  Club.findById(req.params.clubs_id, function(err, sin_club) {
      sin_club.name= req.body.name;                
      sin_club.facilities= req.body.facilities;  
      sin_club.address= req.body.address; 
      sin_club.rating= req.body.address; 


    sin_club.save(function (err){
      if(err){
      res.send(err);
      }
      res.json(sin_club);
    });
  });
});

module.exports = router;