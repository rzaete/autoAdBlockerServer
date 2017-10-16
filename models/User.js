const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  registeration_date : {
    type : Date
  }
})

const User = mongoose.model('user', UserSchema);
module.exports = User;
