require('dotenv').config({path: './.env'});

var express = require("express");
var bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

var Auth = require("./auth");
var DB = require("./DB");
var CAPTCHA = require("./CAPTCHA");
var User = require("./user");


var app = express();
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', process.env.WEB_APP_URL);
  res.setHeader('Access-Control-Allow-Headers','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.set('json spaces', 2);

class Exception {
  constructor(code,message) {
    this.code = code;
    this.message = message;
  }
}

app.get('/api/login', async function(req,res) {
  res.redirect(307, Auth.redirectURL());
});

app.get('/api/callback', async function(req,res) {
  try {
    if (!req.query.code) throw new Exception(400,"Invalid Request");
    var access_token = await Auth.getAccessToken(req.query.code);
    var user = await Auth.getUser(access_token);
    var token = await Auth.createUser(user);
    res.redirect(307,"https://popcritic.web.app/login?token="+token);
  }
  catch (e) {
    if (e instanceof Exception) res.status(e.code).end(e.message);
    else res.json(e);
  }
});

app.get('/api/me', async function(req,res) {
  try {
    if (!req.header("token")) throw new Exception(400,"Not Logged In");
    var db = new DB();
    var my_data = await db.query("SELECT * FROM Sessions NATURAL JOIN Users WHERE session_id=$1;",[req.header("token")]);
    await db.end();
    res.json(my_data.rows[0]);
  }
  catch (e) {
    if (e instanceof Exception) res.status(e.code).end(e.message);
    else res.json(e);
  }
});

app.get('/api/users', async function(req,res) {
  try {
  	var db = new DB();
    var users = await db.query("SELECT * FROM Users;");
    await db.end();
    res.json(users.rows);
  }
  catch (e) {
    if (e instanceof Exception) res.status(e.code).end(e.message);
    else res.json(e);
  }
});

app.get('/api/user/:id', async function(req,res) {
  try {
    if (req.params.id.length==0) throw new Exception(400,"Invalid User ID");
    var user = await User.get(req.params.id);
    res.json(user);
  }
  catch (e) {
    res.status(e.code).end(e.message);
  }
});

app.get('/api/user/:id/reviews', async function(req,res) {
  try {
    if (req.params.id.length==0) throw new Exception(400,"Invalid User ID");
    var movies = await User.getMovieReviews(req.params.id);
    var people = await User.getPeopleReviews(req.params.id);
    res.json({ movies, people });
  }
  catch (e) {
    res.status(e.code).end(e.message);
  }
});

app.post('api/*', async function(req,res) {
  res.status(404).end("Not Found");
});

app.get('api/*', async function(req,res) {
  res.status(404).end("Not Found");
});

// Catch-all route for serving React app
app.get('*', async function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'web', 'site', 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);