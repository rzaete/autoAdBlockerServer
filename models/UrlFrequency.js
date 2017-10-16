const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UrlFrequencySchema = new Schema({
  url : {
    type : String,
    required : [true, 'url is required']
  },
  frequency : {
    type : Number,
    required : [true, 'frequency is required']
  },
  timestamp : {
    type : Date,
    required : [true, 'timestamp is required']
  }
})

const UrlFrequency = mongoose.model('url', UrlFrequencySchema);
module.exports = UrlFrequency;
