var express = require('express');   //call express
var app = express();                //define our app using express

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
  };

  app.use(allowCrossDomain);

var club = require('./route/club.route');
var addClub = require('./route/addclub.routes');

app.use('/', club);

app.set('port', (process.env.PORT || 3000)); 


app.listen(app.get('port'), function(){
 console.log('Server Started');
});