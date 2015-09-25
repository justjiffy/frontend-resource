var mongoose = require('mongoose');
var categoryMod = require('./category.js');
// var category = categoryMod.categorySchema;

var postSchema = mongoose.Schema({
	name: String,
	email: String,
	title: String,
	post: String,
	link: String,
	rating: Number,
	category: [],
});

var Post = mongoose.model('Post', postSchema);
module.exports = Post;