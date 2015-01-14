var express= require('express');  
var router = express.Router();     
var bodyParser = require('body-parser'); 



router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var Club = require('../model/clubs');

router.route('/')
  .get(function(req, res) {

    res.redirect('/users/clubs');
  });


router.route('/users/clubs')


.post(function(req, res){
    console.log(req.body);
    var club = new Club ({
        name: req.body.name,
        facilities: req.body.facilities,
        address: req.body.address,
        rating: req.body.rating,
        coords: req.body.coords,
        timeOfOpening: req.body.timeOfOpening
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
  //removes the -v and _id that comes by default when a gift is created
//   Gift.find({}, 'name description price -_id', function (err, all_gift) {
//      if(err){
//        return handleError(err);
//      }
//      res.json(all_gift);
//    });
// });

// on routes that end in /gifts/:gifts_id
// ----------------------------------------------------
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
})

.delete(function(req, res) {
  Club.findById(req.params.clubs_id, function(err, sin_club){
    sin_club.remove(function(err) {

      if(err){
        res.send(err);
      }
      res.json('Document Deleted');
    });
  });
});

module.exports = router;