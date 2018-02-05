# crud-node-express-mongoose-api
RESTful CRUD (Create, Retrieve, Update, Delete) API with Node.js, Express and MongoDB. We will use Mongoose for interacting with the MongoDB instance.

# Getting started

Ensure that MongoDB is installed (As a Windows service in my case) and running.

`net start MongoDB`
  
Then, ensure that Node.js is installed and run these commands:
  ``` [language]
  npm install
  npm start
  ```

Now, you can access the endpoints, which are listed below. 

# Endpoints
Base URL is http://localhost:3000

  * `POST /contacts` Create contact
  * `GET /contacts` Retrieve all contacts
  * `GET /contacts/:contactId` Retrieve contact by id
  * `PUT /contacts/:contactId` Update contact
  * `DELETE /contacts/:contactId` Delete contact
  
In this case, you can use Postman (https://www.getpostman.com/) to test the API, however, another close goal is to create a web applicacion, using Angular for example, that can consume this API.