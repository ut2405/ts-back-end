'use strict';

require("dotenv").config();

const url=process.env.DB_HOST;

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({ 

	name 			: String,
	email			: String, 
	hashed_password	: String,
	created_at		: String,
	temp_password	: String,
	temp_password_time: String,
	type			: Number
});

mongoose.Promise = global.Promise;
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose.model('user', userSchema);
