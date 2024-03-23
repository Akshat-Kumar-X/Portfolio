const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
mongoose.connect(process.env.MONGODBURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
const Contact = mongoose.model('Contact', {
    name: String,
    email: String,
    message: String,
});
app.post('/submit', async (req, res) => {
  try {
      const contact = new Contact({
          name: req.body.name,
          email: req.body.email,
          message: req.body.message,
      });
      console.log(req.body.name);
      await contact.save();
      res.send('<script>alert("Submitted Successfully"); window.location="/";</script>');
  } catch (error) {
      res.send('<script>alert("Error Submitting"); window.location="/";</script>');
  }
});
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
