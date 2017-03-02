const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('./config/database');
const router = express.Router();
// const favicon = require('serve-favicon');
// const cookieParser = require('cookie-parser');

// Connect to Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to Mongoose ' + config.database);
});

mongoose.connection.on('error', (err) => {
  console.log('Database Error!' + err);
});

// Port Number
const PORT = process.env.PORT || 3000;

// Routes
const app = express();
const users = require('./routes/users');
const projects = require('./routes/projects');
const skills = require('./routes/skills');
// const home = require('./routes/index');

// CORS Middleware
app.use(cors());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/projects', projects);
app.use('/skills', skills);

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('This is the home page');
});

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
