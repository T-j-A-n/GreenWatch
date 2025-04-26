const mongoose = require('mongoose');

const userComplaintSchema = new mongoose.Schema({
  //id: {type: Number, required: true},
  userName: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: false },
  category: { type: String, required: true },
  image: { type: String, required: true },
  location: { type: String, required: true },
  //priority: { type: Number, required: true },
});

const User = mongoose.model('User', userComplaintSchema);
module.exports = User;
