/*const express = require('express');
const App = express();
const Joi = require('joi')



App.use(express.json())
const students = require('./MOCK_DATA.json');

App.get('/',(req,res) =>{
    res.send("Hello world");
});

App.get('/students',(req,res) =>{
    res.send(students);
});

App.post('/students',(req,res) =>{
    const { error } = validateStudent(req.body);
    console.log(error);
    if(error){
        res.status(404).send('Incorrect Format');
        return;
    };

    const student = {
        id: students.length + 1,
        Name:req.body.Name,
        Age:req.body.Age,
        Grade:req.body.Grade
    };
    students.push(student);
    res.send(student);
});

App.get('/students/:id',(req,res) =>{
    const student = students.find(c => c.id === parseInt(req.params.id));
    if(!student) res.status(404).send('The id doesnt exist love')
        res.send(student);
});

App.put('/students/:id',(req,res) =>{

    const student = students.find(c => c.id === parseInt(req.params.id));
    if(!student){
        res.status(404).send('The id doesnt exist love')
        return;
    };

    const result = validateStudent(req.body)
    console.log(result);
    if(result.error){
        res.status(404).send('Incorrect Format');
        return;
    };

    student.Name = req.body.Name;
    student.Age = req.body.Age;
    student.Grade = req.body.Grade;
    res.send(student);
});

App.delete('/students/:id', (req,res) =>{
    const student = students.find(c => c.id === parseInt(req.params.id));
    if(!student){
        res.status(404).send('The id doesnt exist love')
        return;
    };

    const index = students.indexOf(student);
    students.splice(index,1)
    res.send(student);
});

function validateStudent(student){
    const schema ={
        Name: Joi.string().required(),
        Age: Joi.number().required(),
        Grade: Joi.number().required()
    };
    return Joi.validate(student,schema);
}

const port = process.env.PORT || 8000;
App.listen(port, () => console.log(`Listening to port ${port}...`));*/

const express = require('express');
const mongoose = require('mongoose');
const Student = require('./models/Student');
const Joi = require('joi');
const App = express();

App.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/studentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Connection failed', err));

// Routes
App.get('/', (req, res) => {
  res.send('Hello world');
});

App.get('/students', async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

App.get('/students/:id', async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (!student) return res.status(404).send('The id doesn\'t exist love');
  res.send(student);
});

App.post('/students', async (req, res) => {
  const { error } = validateStudent(req.body);
  if (error) return res.status(400).send('Incorrect Format');

  const student = new Student(req.body);
  await student.save();
  res.send(student);
});

App.put('/students/:id', async (req, res) => {
  const { error } = validateStudent(req.body);
  if (error) return res.status(400).send('Incorrect Format');

  const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!student) return res.status(404).send('The id doesn\'t exist love');

  res.send(student);
});

App.delete('/students/:id', async (req, res) => {
  const student = await Student.findByIdAndDelete(req.params.id);
  if (!student) return res.status(404).send('The id doesn\'t exist love');

  res.send(student);
});

function validateStudent(student) {
  const schema = Joi.object({
    Name: Joi.string().required(),
    Age: Joi.number().required(),
    Grade: Joi.number().required()
  });
  return schema.validate(student);
}

const port = process.env.PORT || 8000;
App.listen(port, () => console.log(`Listening on port ${port}...`));
