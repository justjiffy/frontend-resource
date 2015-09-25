var mongoose = require('mongoose');
var categoryMod = require('./category.js');
// var category = categoryMod.categorySchema;
var Schema = mongoose.Schema;

var postSchema = mongoose.Schema({
	name: String,
	email: String,
	title: String,
	post: String,
	link: String,
	rating: Number,
	categories: [{type: Schema.Types.ObjectId, ref: 'Category'}],
});

var Post = mongoose.model('Post', postSchema);
module.exports = Post;