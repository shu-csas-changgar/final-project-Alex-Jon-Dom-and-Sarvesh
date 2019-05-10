const express = require('express');
const mysql = require('mysql');
const app = express();

// Create a connection
var connection = mysql.createConnection({
    //Server properties
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'database_project'
  });


  connection.connect(function(error) {
    if(!!error) {
        console.log(error);
    } else {
        console.log('Connected');
    }
});

app.use(express.json())

//FETCH TABLES
//EMPLOYEES
app.get('/query/getemployees', (req, res) => {
    const sql = 'SELECT * FROM employee'

    connection.query(sql, (err, rows, fields) => {
      if(err) console.log(err)
      else if(rows.length === 0){
        console.log("Error")
        res.json("INVALID")
      }
      else{
        rows.map( x => console.log(`Success`))
        res.json(rows)
      }
    })
  })

//VENDORS
app.get('/query/getvendors', (req, res) => {
    const sql = 'SELECT * FROM vendor'

    connection.query(sql, (err, rows, fields) => {
      if(err) console.log(err)
      else if(rows.length === 0){
        console.log("Error")
        res.json("INVALID")
      }
      else{
        rows.map( x => console.log(`Success`))
        res.json(rows)
      }
    })
  })

//EQUIPMENT
app.get('/query/getequipment', (req, res) => {
    const sql = 'SELECT * FROM equipment'

    connection.query(sql, (err, rows, fields) => {
      if(err) console.log(err)
      else if(rows.length === 0){
        console.log("Error")
        res.json("INVALID")
      }
      else{
        rows.map( x => console.log(`Success`))
        res.json(rows)
      }
    })
  })


//USER LOGIN
app.post('/userlogin', (req, res) => {
    const username = req.body.email
    const password = req.body.password
    const sql = 'SELECT Email, Password FROM employee WHERE Email = ? AND Password = ?'

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

//ADD EMPLOYEE
  app.post('/query/addempl', (req, res) => {
    const fn = req.body.firstName;
    const ln = req.body.lastName;
    const pn = req.body.phoneNumber;
    const email = req.body.email;
    const pass = req.body.password;
    const role = req.body.role;
    const office = req.body.officeLocation;
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ');

    const sql = "INSERT INTO employee (First_Name, Last_Name, Email, Password, Phone_Number, Role_ID, Office_Location_ID, Last_Updated) VALUES(?, ?, ?, ?, ?, ?, ?, ?)"

      connection.query(sql, [fn, ln, email, pass, pn, role, office, now], (err, rows, fields) => {
        if(err) console.log(err)
        else if(rows.length === 0){
          console.log("Error")
          res.json("INVALID")
        }
        else {
          res.json(rows)
        }
      })
    })

// ADD EQUIPMENT
    app.post('/query/addequ', (req, res) => {
      const type = req.body.type;
      const serialNum = req.body.serialNum;
      const vendorId = req.body.vendorId;
      const now = new Date().toISOString().slice(0, 19).replace('T', ' ');

      const sql = "INSERT INTO equipment (Equipment_Type, Equipment_Serial_Number, Vendor_ID, Last_Updated) VALUES(?, ?, ?, ?)"

        connection.query(sql, [type, serialNum, vendorId, now], (err, rows, fields) => {
          if(err) console.log(err)
          else if(rows.length === 0){
            console.log("Error")
            res.json("INVALID")
          }
          else {
            res.json(rows)
          }
        })
      })

// DELETE EMPLOYEE
app.post('/query/delemp', (req, res) => {
    const id = req.body.id
    const sql = 'DELETE FROM employee WHERE Employee_ID = ?'

    connection.query(sql, [id], (err, rows, fields) => {
      if(err) console.log(err)
      else if(rows.length === 0){
        console.log("The employee does not exist!")
        res.json("INVALID")
      }
      else{
        res.json(rows)
      }
    })
  })

  // UPDATE EMPLOYEE
  app.post('/query/updateemp', (req, res) => {
    const id = req.body.id;
    const fn = req.body.firstName;
    const ln = req.body.lastName;
    const pn = req.body.phoneNumber;
    const email = req.body.email;
    const role = req.body.role;
    const office = req.body.officeLocation;
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ');

    const sql = "UPDATE employee SET First_Name = ?, Last_Name = ?, Email = ?, Phone_Number = ?, Role_ID = ?, Office_Location_ID = ?, Last_Updated = ? WHERE Employee_ID = ?"

      connection.query(sql, [fn, ln, email, pn, role, office, now, id], (err, rows, fields) => {
        if(err) console.log(err)
        else if(rows.length === 0){
          console.log("Error")
          res.json("INVALID")
        }
        else {
          res.json(rows)
        }
      })
    })

app.listen('3003', () => {
    console.log("Server is up and listening on 3003...")
});
