var express = require('express');
var bodyParser = require('body-parser');
var blogPosts = [];
//var Sequelize = require('sequelize');

var app = express();
var port = 3000;
/*var databaseURL = ('sqlite://db/app.db');
var sequelize = new Sequelize(databaseURL);*/

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

/*var BlogPosts = sequelize.define('BlogPosts', {
	title: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	author: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: false
	},
	body: {
		type: Sequelize.TEXT,
		allowNull: false,
		unique: true
	}
});

app.get('/blogPosts', function(req, res) {
	BlogPosts.findAll().then(function(rows) {
		res.render("blogPosts", {blogPosts: blogPosts});
	});
});*/

app.get('/', function(req, res) {
	var data = {};
	data.blogPosts = blogPosts;
	res.render('blogPosts', data);
});

app.post('/create', function(req, res) {
	var newPost = {};

	newPost.title = req.body.title;
	newPost.author = req.body.author;
	newPost.body = req.body.body;
	newPost.datetime = new Date();

	blogPosts.push(newPost);

	console.log(blogPosts);
	res.redirect('/');
	});

app.get('/', function(req, res) {
	res.render(blogPosts);
	res.redirect('/');
});

app.get('/*', function(req, res) {
	res.status(404).send("Error 404: Page not found");
});

app.listen(port);

console.log('app.js started on port ' + port);
console.log(blogPosts);