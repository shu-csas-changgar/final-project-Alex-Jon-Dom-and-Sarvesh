use database_project;
Select * From database_project.employee;
-- -------------------------- Equipment Type -----------------------------------------
INSERT INTO equipment_type (Equipment_Type, Equipment_Quantity, Last_Updated)
VALUES ("Desktop Computer", 100, now()); 

INSERT INTO equipment_type (Equipment_Type, Equipment_Quantity, Last_Updated)
VALUES ("Laptops", 100, now()); 

INSERT INTO equipment_type (Equipment_Type, Equipment_Quantity, Last_Updated)
VALUES ("Servers", 100, now()); 

INSERT INTO equipment_type (Equipment_Type, Equipment_Quantity, Last_Updated)
VALUES ("Printers", 100, now()); 

INSERT INTO equipment_type (Equipment_Type, Equipment_Quantity, Last_Updated)
VALUES ("Mobile Devices", 100, now()); 

INSERT INTO equipment_type (Equipment_Type, Equipment_Quantity, Last_Updated)
VALUES ("Displays", 100, now()); 

INSERT INTO equipment_type (Equipment_Type, Equipment_Quantity, Last_Updated)
VALUES ("Smartrooms", 100, now()); 

-- -------------------------- Adding Office Locations -----------------------------------------

INSERT INTO office_location (Office_Location_ID, Office_City, Office_State, Last_Updated)
VALUES (1, "South Orange", "New Jersey", now());

-- ----------------------------- Adding Roles ------------------------------------

INSERT INTO roles (Role_ID, Role_Type, Last_Updated) VALUES (1, "Administrator", now());
INSERT INTO roles (Role_ID, Role_Type, Last_Updated) VALUES (2, "Employee", now());


-- ------------------ Adding Employees ---------------------------------------------------------


INSERT INTO employee (Employee_ID, First_Name, Last_Name, Role_ID, Email, Password, Phone_Number, Office_Location_ID, Last_Updated)
VALUES (1, "Alexander", "Varghese", 1, "a@gmail.com", 1234, 8624856014, 1, now());
