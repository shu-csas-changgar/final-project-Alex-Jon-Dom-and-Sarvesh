use database_project;

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

-- -------------------------- Office Locations -----------------------------------------

INSERT INTO office_location (Office_Location_ID, Office_City, Office_State, Last_Updated)
VALUES (1, "South Orange", "New Jersey", now());

INSERT INTO office_location (Office_Location_ID, Office_City, Office_State, Last_Updated)
VALUES (2, "Livingston", "New Jersey", now());

INSERT INTO office_location (Office_Location_ID, Office_City, Office_State, Last_Updated)
VALUES (3, "Parsippany", "New Jersey", now());

-- ------------------------------------ Floor ----------------------------------

INSERT INTO floor (Floor_Number, Office_Location_ID, Last_Updated) VALUES (1, 1, now());
INSERT INTO floor (Floor_Number, Office_Location_ID, Last_Updated) VALUES (2, 1, now());
INSERT INTO floor (Floor_Number, Office_Location_ID, Last_Updated) VALUES (3, 1, now());
INSERT INTO floor (Floor_Number, Office_Location_ID, Last_Updated) VALUES (1, 2, now());
INSERT INTO floor (Floor_Number, Office_Location_ID, Last_Updated) VALUES (2, 2, now()); 
INSERT INTO floor (Floor_Number, Office_Location_ID, Last_Updated) VALUES (3, 2, now()); 
INSERT INTO floor (Floor_Number, Office_Location_ID, Last_Updated) VALUES (4, 2, now());
INSERT INTO floor (Floor_Number, Office_Location_ID, Last_Updated) VALUES (1, 3, now());
INSERT INTO floor (Floor_Number, Office_Location_ID, Last_Updated) VALUES (2, 3, now()); 
INSERT INTO floor (Floor_Number, Office_Location_ID, Last_Updated) VALUES (3, 3, now());
INSERT INTO floor (Floor_Number, Office_Location_ID, Last_Updated) VALUES (4, 3, now());
INSERT INTO floor (Floor_Number, Office_Location_ID, Last_Updated) VALUES (5, 3, now());

-- ------------------------------ Room -----------------------------------------------------------

INSERT INTO room (Room_Number, Floor_ID, Office_Location_ID, Last_Updated) VALUES (1, 1, 1, now());
INSERT INTO room (Room_Number, Floor_ID, Office_Location_ID, Last_Updated) VALUES (2, 1, 1, now());
INSERT INTO room (Room_Number, Floor_ID, Office_Location_ID, Last_Updated) VALUES (3, 1, 1, now());
INSERT INTO room (Room_Number, Floor_ID, Office_Location_ID, Last_Updated) VALUES (4, 1, 1, now());
INSERT INTO room (Room_Number, Floor_ID, Office_Location_ID, Last_Updated) VALUES (1, 2, 1, now());
INSERT INTO room (Room_Number, Floor_ID, Office_Location_ID, Last_Updated) VALUES (2, 2, 1, now());
INSERT INTO room (Room_Number, Floor_ID, Office_Location_ID, Last_Updated) VALUES (3, 2, 1, now());
INSERT INTO room (Room_Number, Floor_ID, Office_Location_ID, Last_Updated) VALUES (4, 2, 1, now());
INSERT INTO room (Room_Number, Floor_ID, Office_Location_ID, Last_Updated) VALUES (1, 3, 1, now());
INSERT INTO room (Room_Number, Floor_ID, Office_Location_ID, Last_Updated) VALUES (2, 3, 1, now());
INSERT INTO room (Room_Number, Floor_ID, Office_Location_ID, Last_Updated) VALUES (1, 4, 2, now());
INSERT INTO room (Room_Number, Floor_ID, Office_Location_ID, Last_Updated) VALUES (2, 4, 2, now());
INSERT INTO room (Room_Number, Floor_ID, Office_Location_ID, Last_Updated) VALUES (1, 5, 2, now());
INSERT INTO room (Room_Number, Floor_ID, Office_Location_ID, Last_Updated) VALUES (2, 5, 2, now());
INSERT INTO room (Room_Number, Floor_ID, Office_Location_ID, Last_Updated) VALUES (1, 6, 2, now());
INSERT INTO room (Room_Number, Floor_ID, Office_Location_ID, Last_Updated) VALUES (2, 6, 2, now());
INSERT INTO room (Room_Number, Floor_ID, Office_Location_ID, Last_Updated) VALUES (1, 7, 2, now());
INSERT INTO room (Room_Number, Floor_ID, Office_Location_ID, Last_Updated) VALUES (2, 7, 2, now());
INSERT INTO room (Room_Number, Floor_ID, Office_Location_ID, Last_Updated) VALUES (1, 8, 3, now());
INSERT INTO room (Room_Number, Floor_ID, Office_Location_ID, Last_Updated) VALUES (2, 8, 3, now());
INSERT INTO room (Room_Number, Floor_ID, Office_Location_ID, Last_Updated) VALUES (1, 9, 3, now());
INSERT INTO room (Room_Number, Floor_ID, Office_Location_ID, Last_Updated) VALUES (2, 9, 3, now());
INSERT INTO room (Room_Number, Floor_ID, Office_Location_ID, Last_Updated) VALUES (1, 10, 3, now());
INSERT INTO room (Room_Number, Floor_ID, Office_Location_ID, Last_Updated) VALUES (2, 10, 3, now());
INSERT INTO room (Room_Number, Floor_ID, Office_Location_ID, Last_Updated) VALUES (1, 11, 3, now());
INSERT INTO room (Room_Number, Floor_ID, Office_Location_ID, Last_Updated) VALUES (2, 11, 3, now());
INSERT INTO room (Room_Number, Floor_ID, Office_Location_ID, Last_Updated) VALUES (1, 12, 3, now());
INSERT INTO room (Room_Number, Floor_ID, Office_Location_ID, Last_Updated) VALUES (2, 12, 3, now());

-- ----------------------------- Roles -----------------------------------------------------

INSERT INTO roles (Role_ID, Role_Type, Last_Updated) VALUES (1, "Administrator", now());
INSERT INTO roles (Role_ID, Role_Type, Last_Updated) VALUES (2, "Employee", now());


-- --------------------------------- Departments -----------------------------------

INSERT INTO departments(Department_ID, Department_Name, Last_Updated) VALUES (1, "Information Technology", now());
INSERT INTO departments(Department_ID, Department_Name, Last_Updated) VALUES (2, "Human Resource", now());
INSERT INTO departments(Department_ID, Department_Name, Last_Updated) VALUES (3, "Accounting and Finance", now());
INSERT INTO departments(Department_ID, Department_Name, Last_Updated) VALUES (4, "Marketing", now());
INSERT INTO departments(Department_ID, Department_Name, Last_Updated) VALUES (5, "Production", now());
INSERT INTO departments(Department_ID, Department_Name, Last_Updated) VALUES (6, "Logistics", now());

-- ------------------ Employee ---------------------------------------------------------

INSERT INTO employee (Employee_ID, First_Name, Last_Name, Role_ID, Email, Password, Phone_Number, Office_Location_ID, Last_Updated)
VALUES (1, "Alexander", "Varghese", 1, "a@gmail.com", 1234, 8624856014, 1, now());
INSERT INTO employee (Employee_ID, First_Name, Last_Name, Role_ID, Email, Password, Phone_Number, Office_Location_ID, Last_Updated)
VALUES (2, "Dominick", "Arnaldo", 2, "d@gmail.com", 1111, 7154663956, 3, now());
INSERT INTO employee (Employee_ID, First_Name, Last_Name, Role_ID, Email, Password, Phone_Number, Office_Location_ID, Last_Updated)
VALUES (3, "Jonathan", "Bar-Eli", 1, "j@gmail.com", 2222, 8154557345, 2, now());
INSERT INTO employee (Employee_ID, First_Name, Last_Name, Role_ID, Email, Password, Phone_Number, Office_Location_ID, Last_Updated)
VALUES (4, "Sarvesh", "Soni", 2, "s@gmail.com", 3333, 6434589723, 1, now());

-- ----------------------- Vendor --------------------------------------------------------

INSERT INTO vendor (Vendor_ID, Vendor_Name, Vendor_Phone_Number, Last_Updated) VALUES (1, "Apple", 01234567, now());
INSERT INTO vendor (Vendor_ID, Vendor_Name, Vendor_Phone_Number, Last_Updated) VALUES (2, "Samsung", 11121314, now());
INSERT INTO vendor (Vendor_ID, Vendor_Name, Vendor_Phone_Number, Last_Updated) VALUES (3, "LG", 15161718, now());
INSERT INTO vendor (Vendor_ID, Vendor_Name, Vendor_Phone_Number, Last_Updated) VALUES (4, "Beats", 20212223, now());

-- ----------------------- Adding Equipment -----------------------------------------------------


