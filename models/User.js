const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String
    // required: true
  },
  userId: {
    type: Number
  },
  password: {
    type: String
    // required: true
  },
  googleId: String
});

module.exports = User = mongoose.model('user', UserSchema);
