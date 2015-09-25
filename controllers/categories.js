var express = require('express');
var categoriesController = express.Router();
var Post = require('../models/post.js');
var Category = require('../models/category.js');

categoriesController.get('/cat_view', function(req, res) {
	Category.findAsync({}).then(function(categories) {
		res.render('cat_view.ejs', { categories: categories });
	}).catch();
});

categoriesController.get('/cat_new', function(req, res) {
	Category.findAsync({}).then(function(categories) {
		res.render('cat_new.ejs', { categories: categories });
	}).catch();
});

categoriesController.post('/create', function(req, res) {
	Category.createAsync({name: req.body.name }).then(function() {
		res.redirect(303, '/');
	})
	.catch(function(err) {
		console.log('error: ' + err);
		res.redirect(303, '/new');
	});
});

module.exports = categoriesController;