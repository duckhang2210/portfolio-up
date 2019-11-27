const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
require('dotenv').config();
const nodemailer = require('nodemailer');

const port = process.env.PORT || 3000;

// Initialize Express
const app = express();
const projects = require('./data/project');
const skills = require('./data/skills');

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Make public a static dir
app.use('/public', express.static(path.join(__dirname, 'public')));

// Set Handlebars.
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

/* SET ROUTES */
app.get('/', (req, res) => {
  res.render('index', { projects: projects, skills: skills });
});

app.post('/send', (req, res) => {
  const name = req.body.name,
});
app.listen(port, function() {
  console.log('App running on port ' + port);
});
