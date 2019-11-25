const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');

const port = process.env.PORT || 3000;

// Initialize Express
const app = express();
const projects = require('./data/project');
const skills = require('./data/skills');
// Use morgan and body parser with our app
app.use(logger('dev'));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// Make public a static dir
app.use(express.static('public'));

// Set Handlebars.
const exphbs = require('express-handlebars');

app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main',
    partialsDir: path.join(__dirname, '/views/layouts/partials')
  })
);
app.set('view engine', 'handlebars');

/* SET ROUTES */
app.get('/', (req, res) => {
  //const projects = require('../data/projects.js');
  //const websites = require('../data/websites.js');
  res.render(
    'index',
    { projects: projects, skills: skills } /*, {
    
    websites: websites
  }*/
  );
});
app.listen(port, function() {
  console.log('App running on port ' + port);
});
