// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const commentsFile = path.join(__dirname, 'comments.json');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Get all comments
app.get('/comments', (req, res) => {
  fs.readFile(commentsFile, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Internal server error');
    } else {
      res.send(data);
    }
  });
});

// Post new comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  fs.readFile(commentsFile, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Internal server error');
    } else {
      const comments = JSON.parse(data);
      comments.push(comment);
      fs.writeFile(commentsFile, JSON.stringify(comments), (err) => {
        if (err) {
          res.status(500).send('Internal server error');
        } else {
          res.send('Comment added');
        }
      });
    }
  });
});

// Start web server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Run the server
// node comments.js
// Open browser and go to http://localhost:3000/comments
// You will see the comments stored in comments.json file
// Use Postman to add new comments
