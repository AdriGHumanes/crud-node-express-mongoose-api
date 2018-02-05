var Contact = require('../models/contact.model.js');

exports.create = function(req, res){
	//Create a contact
	if(!req.body.phone){
		res.status(400).send({message: "Phone can not be empty"});
	}
	var contact = new Contact({firstName: req.body.firstName, lastName: req.body.lastName || "No Last Name", email: req.body.email || "No email", phone: req.body.phone, address: req.body.address});

	contact.save(function(err,data){
		console.log(data);
		if(err){
			console.log(err);
			res.status(500).send({message: "Some error occurred while creating the Contact"});
		}else{
			res.send(data);
		}
	});

};

exports.findAll = function(req, res){
	//Retrieve and return all contacts
	Contact.find(function(err,notes){
		if(err){
			res.status(500).send({message: "Some error occurred while retrievinng contacts"});
		}else{
			res.send(notes);
		}
	});
};

exports.findOne = function(req, res){
	//Find a single contact
	Contact.findById(req.params.contactId, function(err,data){
		if(err){
			res.status(500).send({message: "Could not find a contact with id " + req.params.contactId});
		}else{
			res.send(data);
		}
	});
};

exports.update = function(req, res){
	//Update a contact identified by the contactId
	Contact.findById(req.params.contactId, function(err, contact){
		if(err){
			res.status(500).send({message: "Could not find a contact with id " + req.params.contactId});
		}
		contact.firstName = req.body.firstName;
		contact.lastName = req.body.lastName;
		contact.email = req.body.email;
		contact.phone = req.body.phone;
		contact.address = req.body.address;

		contact.save(function(err, data){
			if(err){
				res.status(500).send({message: "Could not update contact with id " + req.params.contactId});
			}else{
				res.send(data);
			}
		});
	});
};

exports.delete = function(req, res){
	//Delete a contact with the specified contactId in the request
	Contact.remove({_id: req.params.contactId}, function(err,data){
		if(err){
			res.status(500).send({message: "Could not delete contact with id " + req.params.contactId});
		}else{
			res.send({message: "Contact deleted"})
		}
	});
};