var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();

var dbConfig = require('./db/config.js');
// var mongoose = require('mongoose');

var postController = require('./controllers/posts.js');
var categoryController = require('./controllers/categories.js');

var Promise = require('bluebird');
var mongoose = Promise.promisifyAll(require('mongoose'));

//TELLING APP.JS THAT WE'RE USING THE ROUTES DIR
app.use(require('./node_modules/body-parser').urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use('/', postController);
app.use('/cat', categoryController);


switch(app.get('env')) {
	case 'development':
		mongoose.connect(dbConfig.mongo.dev.conn, dbConfig.mongo.options);
		break;
	case 'production':
		mongoose.connect(dbConfig.mongo.prod.conn, dbConfig.mongo.options);
		break;
	default:
		throw newError('Unknown execution environment: ' + app.get('env'));
}

app.use('/', router);
app.listen(port);
console.log('Server started on ' + port);
