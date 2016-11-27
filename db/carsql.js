
var Sequelize = require('sequelize');

var databaseURL = 'sqlite://practice.db';

var sequelize = new Sequelize(databaseURL);

var Cars = sequelize.define('cars', {
	make: Sequelize.STRING,
	model: Sequelize.STRING,
	year: Sequelize.INTEGER,
	awd: Sequelize.BOOLEAN,
	engine: Sequelize.STRING,
	extColor: Sequelize.STRING,
});

Cars.sync().then(function() {
	console.log('Cars table is ready!');
	return Cars.create( {
		make: 'BMW',
		model: 'M3',
		year: 2016,
		awd: false,
		engine: 'dual turbo straight 6',
		extColor: 'Jet Black',
	}).
	then(function() {
		return Cars.findAll();
	}).
	then(function(rows) {
		console.log(`We found: ${rows.length} cars.`);
		var cars = rows[0].dataValues;
		console.log(cars.model);
	});
}).catch(function(err) {
	console.error(err);
});