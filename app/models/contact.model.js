var mongoose = require('mongoose');

var ContactSchema = mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	phone: String,
	address: String,
}, {
	//createdAt and updatedAt
	timestamps: true
});

module.exports = mongoose.model('Contact', ContactSchema);