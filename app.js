const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cors = require('cors');
// const cookieParser = require('cookie-parser');

// Port Number
const PORT = process.env.PORT || 3000;

// Routes
const routes = require('./routes/index');
const users = require('./routes/users');
const projects = require('./routes/projects');
const skills = require('./routes/skills');

const app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use('/', routes);
app.use('/users', users);
app.use('/projects', projects);
app.use('/skills', skills);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
