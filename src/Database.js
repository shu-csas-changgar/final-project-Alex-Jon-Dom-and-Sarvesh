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

  //EMPLOYEE EQUIPMENT
app.get('/query/getemployeeequipment', (req, res) => {
  const sql = 'SELECT * FROM equipment WHERE Employee_ID IS NULL AND Department_ID IS NULL AND Office_Location_ID = 1 AND Floor_Number = 1 AND Room_ID = 1'

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

  //EMPLOYEE OWN EQUIPMENT
  app.post('/query/getmyequipment', (req, res) => {
    const employee = req.body.employeeID;
    const sql = 'SELECT * FROM equipment WHERE Employee_ID = ?'

    connection.query(sql, [employee], (err, rows, fields) => {
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

    //RETURN EMPLOYEE OWN EQUIPMENT
    app.post('/query/returnequipment', (req, res) => {
      const id = req.body.id;
      const sql = 'UPDATE equipment SET Employee_ID = NULL, Office_Location_ID = ?, Floor_Number = ?, Room_ID = ?, Last_Updated = ? WHERE Equipment_ID = ?'
      const now = new Date().toISOString().slice(0, 19).replace('T', ' ');

      connection.query(sql, [1, 1, 1, now, id], (err, rows, fields) => {
        if(err) console.log(err)
        else if(rows.length === 0){
          console.log("There was an error returning that equipment.")
          res.json("INVALID")
        }
        else{
          res.json(rows)
        }
      })
    })

//USER LOGIN
app.post('/userlogin', (req, res) => {
    const username = req.body.email
    const password = req.body.password
    const sql = 'SELECT Employee_ID, Email, Password, Role_ID FROM employee WHERE Email = ? AND Password = ?'

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
      const employeeID = (req.body.employeeID === '' ? null : req.body.employeeID);
      const officeLocation = (req.body.officeLocation === '' ? null : req.body.officeLocation);
      const floor = (req.body.floor === '' ? null : req.body.floor);
      const room = (req.body.room === '' ? null : req.body.room);
      const department = (req.body.department === '' ? null : req.body.department);

      var d = new Date();
      const now = d.toISOString().slice(0, 19).replace('T', ' ');
      d.setFullYear(d.getFullYear() + 5);
      const exp = d.toISOString().slice(0, 19).replace('T', ' ');

      const sql = "INSERT INTO equipment (Equipment_Type, Equipment_Serial_Number, Expiration_Date, Vendor_ID, Employee_ID, Office_Location_ID, Floor_Number, Room_ID, Department_ID, Last_Updated) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"

        connection.query(sql, [type, serialNum, exp, vendorId, employeeID, officeLocation, floor, room, department, now], (err, rows, fields) => {
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

      // DELETE EQUIPMENT
      app.post('/query/delequ', (req, res) => {
        const id = req.body.id
        const sql = 'DELETE FROM equipment WHERE Equipment_ID = ?'

        connection.query(sql, [id], (err, rows, fields) => {
          if(err) console.log(err)
          else if(rows.length === 0){
            console.log("The equipment does not exist!")
            res.json("INVALID")
          }
          else{
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

    app.post('/query/updateven', (req, res) => {
      const id = req.body.id;
      const vn = req.body.vendorName;
      const pn = req.body.phoneNumber;
      const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
  
      const sql = "UPDATE vendor SET Vendor_Name = ?, Vendor_Phone_Number = ?, Last_Updated = ? WHERE Vendor_ID = ?"
  
        connection.query(sql, [vn, pn, now, id], (err, rows, fields) => {
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

      app.post('/query/assignequ', (req, res) => {
        const id = req.body.id;
        const employee = (req.body.employeeID === "NULL" ? null : req.body.employeeID);
        const officeLocation = (req.body.officeLocation === '' ? null : req.body.officeLocation);
        const floorNum = (req.body.floorNum === '' ? null : req.body.floorNum);
        const room = (req.body.roomNum === '' ? null : req.body.roomNum);
        const department = (req.body.departmentID === '' ? null : req.body.departmentID);
        const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
    
        const sql = "UPDATE equipment SET Employee_ID = ?, Office_Location_ID = ?, Floor_Number = ?, Room_ID = ?, Department_ID = ?, Last_Updated = ? WHERE Equipment_ID = ?"
    
          connection.query(sql, [employee, officeLocation, floorNum, room, department, now, id], (err, rows, fields) => {
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

        app.post('/query/assignemployeeequ', (req, res) => {
          const id = req.body.id;
          const employee = req.body.employeeID;
          const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
      
          const sql = "UPDATE equipment SET Employee_ID = ?, Office_Location_ID = NULL, Floor_Number = NULL, Room_ID = NULL, Last_Updated = ? WHERE Equipment_ID = ?"
      
            connection.query(sql, [employee, now, id], (err, rows, fields) => {
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
