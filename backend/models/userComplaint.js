const mongoose = require('mongoose');

const userComplaintSchema = new mongoose.Schema({
  //id: {type: Number, required: true},
  userName: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: false },
  category: { type: String, required: true },
  image: { type: String, required: false },
  location: { type: String, required: true },
  upvotes:{typee: String, default: 0}
  //priority: { type: Number, required: true },
});


const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

module.exports = mongoose.model('UserN', userSchema);


const User = mongoose.model('User', userComplaintSchema);
module.exports = User;
