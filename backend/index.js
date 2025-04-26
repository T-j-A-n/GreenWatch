const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Joi = require('joi');
app.use(express.json());
app.use(cors());


const MONGO_URL = 'mongodb://127.0.0.1:27017/complaintSystem';
const PORT = 8000;


mongoose.connect(MONGO_URL)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

const userComplaintSchema = new mongoose.Schema({
  //id: { type: Number, required: true },
  userName: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: false },
  category: { type: String, required: true },
  image: { type: String, required: false },
  location: { type: String, required: true },
  //priority: { type: Number, required: true },
});

const UserComplaint = mongoose.model('UserComplaint', userComplaintSchema);


app.post('/complaints', async (req, res) => {
  /*try {
    const complaint = new UserComplaint(req.body);
    await complaint.save();
    res.status(201).send(complaint);
  } catch (error) {
    res.status(400).send(error); 
  }*/
  const { error } = validateStudent(req.body);
  if (error) return res.status(400).send('Incorrect Format');
  const complaint = new UserComplaint(req.body);
  await complaint.save();
  res.status(201).send(complaint);
});

app.get('/complaints', async (req, res) => {
  try {
    const complaints = await UserComplaint.find();
    res.status(200).send(complaints);
  } catch (error) {
    res.status(400).send(error);
  }
});
app.delete('/complaints/:id', (req,res) =>{

});

function validateStudent(student) {
    const schema = Joi.object({
      userName: Joi.string().required(),
      title: Joi.string().required(),
      description: Joi.string().required(),
      category: Joi.string().required(),
      image: Joi.string(),
      location: Joi.string().required(),
    });
    return schema.validate(student);
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} `);
});


