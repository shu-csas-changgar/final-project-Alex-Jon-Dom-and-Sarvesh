const express = require('express');
const mysql = require('mysql');
const app = express();

// Create a connection
var connection = mysql.createConnection({
    //Server properties
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'testlog'
  });
 

  connection.connect(function(error) {
    if(!!error) {
        console.log(error);
    } else {
        console.log('Connected');
    }
});

app.use(express.json())

app.post('/log', (req, res) => {
    const username = req.body.email
    const password = req.body.password
    const sql = 'SELECT username, password FROM account WHERE username = ? AND password = ?'
  
    connection.query(sql, [username, password], (err, rows, fields) => {
      if(err) console.log(err)
      else if(rows.length === 0){
        console.log("The username or password was incorrect")
        res.json("INVALID")
      } 
      else{
        rows.map( x => console.log(`Success`))
        res.json(rows)
      }
    })
  })

app.listen('3003', () => {
    console.log("Server is up and listening on 3003...")
});


