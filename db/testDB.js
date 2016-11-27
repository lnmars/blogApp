var Sequelize = require('sequelize');

var databaseURL = ('sqlite://practice.sqlite3');

var sequelize = new Sequelize(databaseURL);

var BlogPosts = sequelize.define('blogPosts', {
	title: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
	},
	author: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: false,
	},
	body: {
		type: Sequelize.TEXT,
		allowNull: false,
		unique: true,
	},
});

sequelize.sync().then(function() {
	/*console.log('BlogPosts table is ready.');
	return BlogPosts.create( {
		title: 'Second Blog Post',
		author: 'Ellen Marshall',
		body: 'This is my second blog post.',
	}).
	then(function() {*/
		return BlogPosts.findAll();
	})
.then(function(rows) {
		console.log(`You have ${rows.length} blog post(s).`);
		
		if (rows.length > 0) {
			var blogPosts = rows[0].dataValues;
			console.log('Title: ' + blogPosts.title + ' Author: ' + blogPosts.author + ' Blog: ' + blogPosts.body);
	}});

/*.catch(function(err) {
	console.error(err);
});*/