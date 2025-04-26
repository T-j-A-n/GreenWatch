const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 8000;

// Replace this with your actual MongoDB URI
const MONGO_URI = 'mongodb://127.0.0.1:27017/complaintSystem';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(express.json());

// Schema & model
const complaintSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  status: String,
  image: String,
  location: String,
  upvotes: { type: Number, default: 0 }
});

const Complaint = mongoose.model('Complaint', complaintSchema);

// Routes
app.post('/complaints', async (req, res) => {
  try {
    const complaint = new Complaint(req.body);
    await complaint.save();
    res.status(201).json(complaint);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/complaints', async (req, res) => {
  const complaints = await Complaint.find().sort({ upvotes: -1 });
  res.json(complaints);
});

app.post('/complaints/:id/upvote', async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    complaint.upvotes += 1;
    await complaint.save();
    res.json(complaint);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



