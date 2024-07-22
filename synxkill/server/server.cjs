const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://sherabhai:shera1928@cluster0.i5iytse.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

const userSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  // Description: { type: String, required: true },
  // VideoURL: { type: String, required: true },
  ImageLinks: { type: String, required: true },
  Duration: { type: String, required: true },
  Price: { type: Number, required: true },
  Name: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error Fetching Courses' });
  }
});

app.post('/api/users', async (req, res) => {
  const { Title, ImageLinks, Duration, Price, Name } = req.body;

  const newUser = new User({ Title, ImageLinks, Duration, Price, Name });

  try {
    await newUser.save();
    alert(`Course Added Successfully!`);
    res.status(201).json({ message: 'Course Added Successfully' });
    
  } catch (error) {
    alert(`Error Adding Course!`);
    res.status(500).json({ error: 'Error Adding Course' });
  }
});