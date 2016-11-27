var express = require('express');
var bodyParser = require('body-parser');
var blogPosts = [];

var app = express();
var port = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.post('/create', function(req, res) {
	var newPost = {};

	newPost.title = req.body.title;
	newPost.author = req.body.author;
	newPost.body = req.body.body;
	newPost.datetime = new Date();

	blogPosts.push(newPost);

	console.log(blogPosts);
	res.render('blogPosts', {blogPosts: blogPosts});
	res.redirect('/');
});

app.get('/', function(req, res) {
	res.render('blogPosts', blogPosts);
});

app.get('/*', function(req, res) {
	res.status(404).send("Error 404: Page not found");
});

app.listen(port);

console.log('app.js started on port ' + port);
console.log(blogPosts);