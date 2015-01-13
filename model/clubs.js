var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myapp');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('...connected')
});

var Schema = mongoose.Schema;

var ClubSchema = new Schema({
	name: {
    type: String,
    required: true,
    trim: true
  },

  facilities: {
    type: [String],
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

  coords: {
    type: [Number],
    index: '2dsphere'
  },

  timeOfOpening: [{

    days: {
      type: String,
      required: true
    },
    opening: String,
    closing: String,
    closed: false
},

{
    days: {
      type: String,
      required: true
    },

    opening: String,
    closing: String,
    closed: false
}]

}); 

var ClubModel = mongoose.model('ClubModel', ClubSchema);
module.exports = ClubModel;