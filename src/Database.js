const express = require('express');
const mysql = require('mysql');
const app = express();

// Create a connection
var connection = mysql.createConnection({
    //Server properties
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sakila'
  });
 
  connection.connect(function(error) {
    if(!!error) {
        console.log('Error');
    } else {
        console.log('Connected');
    }
});

app.get('/', function(req, resp)  {
    //about mysql
    connection.query("SELECT * FROM  sakila.actor", function(error, rows, fields) {
        if(!!error) {
            console.log('Error in the query');
        } else {
            console.log('Successful query');
        }
    });
})

app.listen('3003', () => {
    console.log("Server is up and listening on 3003...")
});


