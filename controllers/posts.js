var express = require('express');
var postsController = express.Router();
var Post = require('../models/post.js');
var Category = require('../models/category.js');

postsController.get('/', function(req, res) {
	Post.findAsync({}).then(function(posts) {
		res.render('index.ejs', {
			posts: posts
		});
	}).catch();
});

//FOR SHOWING CATEGORIES....!
postsController.get('/cat_view', function(req, res) {
	Category.findAsync({}).then(function(categories) {
		res.render('cat_view.ejs', {
			categories: categories
		});
	}).catch();
});


postsController.get('/show/:id', function(req, res){
	Post.findByIdAsync(req.params.id).then(function(post){
		res.render('show.ejs', { post: post });
	}).catch();
});

postsController.get('/new', function(req, res) {
	res.render('new.ejs');
});


postsController.get('/cat_new', function(req, res) {
	res.render('cat_new.ejs');
});

postsController.post('/create', function(req, res) {
	Category.createAsync({name: req.body.name }).then(function() {
		res.redirect(303, '/');
	})
	.catch(function(err) {
		console.log('error: ' + err);
		res.redirect(303, '/new');
	});
});

postsController.post('/create', function(req, res) {
	Post.createAsync({name: req.body.name, email: req.body.email, title: req.body.title, post: req.body.post, link: req.body.link, rating: req.body.rating, category: req.body.category }).then(function() {
		res.redirect(303, '/');
	})
	.catch(function(err) {
		console.log('error: ' + err);
		res.redirect(303, '/new');
	});
});

module.exports = postsController;
