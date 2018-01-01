module.exports = function(app){
	var contacts = require('../controllers/contact.controller.js');

	//Create a contact
	app.post('/contacts', contacts.create);

	//Retrieve all contacts
	app.get('/contacts', contacts.findAll);

	//Retrieve a single contact
	app.get('/contacts/:contactId', contacts.findOne);

	//Update a contact
	app.put('/contacts/:contactId', contacts.update);

	//Delete a contact
	app.delete('/contacts/:contactId', contacts.delete);
}