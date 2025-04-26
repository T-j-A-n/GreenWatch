const mongoose = require('mongoose');
const userAuthentication = new mongoose.Schema({
    UserName:{
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true
    }

})
const userSchema = new mongoose.Schema({
    UserName:{
        type: String,
        required: true,
    },
    ListOfComplains:{
        type:[Number],
        default: 0
    }
})
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
const Complaint = mongoose.model('userComplaintSchema', userComplaintSchema)
const Auth = mongoose.model('userAuthentication', userAuthentication)

module.exports = {User, Complaint, Auth};
