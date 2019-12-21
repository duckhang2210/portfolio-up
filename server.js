const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
require('dotenv').config();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

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
  let mailData = req.body;
  var mail = {
    from: mailData.email,
    to: 'duckhang2210@gmail.com',
    subject: `${mailData.name} | ${mailData.email}`,
    text: `${mailData.name} | ${mailData.email} | ${mailData.message}`,
    html: `
        <div>
					<h2 style="margin: 0px">${mailData.name}</h2>
					<h3 style="margin: 0px">${mailData.email}</h3>
					<p>${mailData.message}</p>
        </div>`
  };
  // Sends mail using nodeMailer
  transporter.sendMail(mail, (err, info) => {
    if (err) {
      console.log(err);
      res.send({ status: 404, error: err, info: info });
    } else {
      res.redirect('/');
    }
    transporter.close();
  });
});

const oauth2Client = new OAuth2(
  process.env.ClientID,
  process.env.Clientsecret, // Client Secret
  'https://developers.google.com/oauthplayground' // Redirect URL
);
oauth2Client.setCredentials({
  refresh_token: process.env.OAUTH_REFRESH_TOKEN
});
const accessToken = oauth2Client
  .refreshAccessToken()
  .then(tokens => tokens.credentials)
  .then(credentials => credentials.access_token);

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.USER,
    clientId: process.env.ClientID,
    clientSecret: process.env.Clientsecret,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    accessToken: accessToken
  }
});

app.listen(port, function() {
  console.log('App running on port ' + port);
});
