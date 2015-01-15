var mongoose = require('mongoose');

mongoose.connect('mongodb://gokerayi:pastor01@ds031631.mongolab.com:31631/clubinlag');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('...connected');
});

var Schema = mongoose.Schema;

var ClubSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  facilities: {
    type: String,
    required: true,
    trim: true
  },

  address: {
    type: String,
    required: true,
    trim: true
  },

  rating: {
    type: Number,
    required: false,
    default: 0,
    min: 0, 
    max: 5
  },

  // coords: {
  //   type: [Number],
  //   index: '2dsphere'
  // },

  timeOfOpening: {
    type: String,
    required: true
  }

}); 

module.exports = mongoose.model('Club', ClubSchema);