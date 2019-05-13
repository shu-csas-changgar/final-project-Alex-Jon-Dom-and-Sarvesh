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

INSERT INTO equipment_type (Equipment_Type, Equipment_Quantity, Last_Updated)
VALUES ("Speakers", 100, now()); 

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
VALUES (2, "Dominick", "Arnaldo", 1, "d@gmail.com", 1234, 7154663956, 1, now());
INSERT INTO employee (Employee_ID, First_Name, Last_Name, Role_ID, Email, Password, Phone_Number, Office_Location_ID, Last_Updated)
VALUES (3, "Jonathan", "Bar-Eli", 1, "j@gmail.com", 1234, 8154557345, 3, now());
INSERT INTO employee (Employee_ID, First_Name, Last_Name, Role_ID, Email, Password, Phone_Number, Office_Location_ID, Last_Updated)
VALUES (4, "Sarvesh", "Soni", 1, "s@gmail.com", 1234, 6434589723, 2, now());
INSERT INTO employee (Employee_ID, First_Name, Last_Name, Role_ID, Email, Password, Phone_Number, Office_Location_ID, Last_Updated)
VALUES (5, "Chen", "Nergal", 2, "chenne@gmail.com", 3333, 643445723, 2, now());
INSERT INTO employee (Employee_ID, First_Name, Last_Name, Role_ID, Email, Password, Phone_Number, Office_Location_ID, Last_Updated)
VALUES (6, "Chris", "Tuker", 2, "christu@gmail.com", 3333, 6241589723, 2, now());
INSERT INTO employee (Employee_ID, First_Name, Last_Name, Role_ID, Email, Password, Phone_Number, Office_Location_ID, Last_Updated)
VALUES (7, "Cable", "Smith", 2, "Cablesm@gmail.com", 3333, 6434583723, 2, now());
INSERT INTO employee (Employee_ID, First_Name, Last_Name, Role_ID, Email, Password, Phone_Number, Office_Location_ID, Last_Updated)
VALUES (8, "Mark", "Cruse", 2, "Markcr@gmail.com", 3333, 6439389723, 3, now());
INSERT INTO employee (Employee_ID, First_Name, Last_Name, Role_ID, Email, Password, Phone_Number, Office_Location_ID, Last_Updated)
VALUES (9, "Silvester", "Salt", 2, "Silvestersa@gmail.com", 3333, 6434539283, 1, now());
INSERT INTO employee (Employee_ID, First_Name, Last_Name, Role_ID, Email, Password, Phone_Number, Office_Location_ID, Last_Updated)
VALUES (10, "Idan", "Habib", 2, "Idanha@gmail.com", 3333, 6434589400, 3, now());
INSERT INTO employee (Employee_ID, First_Name, Last_Name, Role_ID, Email, Password, Phone_Number, Office_Location_ID, Last_Updated)
VALUES (11, "Shlomo", "Arzi", 2, "Shlomoar@gmail.com", 3333, 6434589071, 3, now());
INSERT INTO employee (Employee_ID, First_Name, Last_Name, Role_ID, Email, Password, Phone_Number, Office_Location_ID, Last_Updated)
VALUES (12, "Kai", "Dog", 2, "Kaido@gmail.com", 3333, 6434533471, 3, now());
INSERT INTO employee (Employee_ID, First_Name, Last_Name, Role_ID, Email, Password, Phone_Number, Office_Location_ID, Last_Updated)
VALUES (13, "Ziv", "Nergal", 2, "Zivne@gmail.com", 3333, 6434580981, 3, now());
INSERT INTO employee (Employee_ID, First_Name, Last_Name, Role_ID, Email, Password, Phone_Number, Office_Location_ID, Last_Updated)
VALUES (14, "Rachel", "Ran", 2, "Rachelra@gmail.com", 3333, 6434000071, 3, now());
INSERT INTO employee (Employee_ID, First_Name, Last_Name, Role_ID, Email, Password, Phone_Number, Office_Location_ID, Last_Updated)
VALUES (15, "John", "Snow", 2, "Johnsn@gmail.com", 3333, 6409889071, 3, now());
INSERT INTO employee (Employee_ID, First_Name, Last_Name, Role_ID, Email, Password, Phone_Number, Office_Location_ID, Last_Updated)
VALUES (16, "Michael", "Jacson", 2, "Michaelja@gmail.com", 3333, 6434589991, 3, now());
INSERT INTO employee (Employee_ID, First_Name, Last_Name, Role_ID, Email, Password, Phone_Number, Office_Location_ID, Last_Updated)
VALUES (17, "Alis", "Walker", 2, "Aliswa@gmail.com", 3333, 6499889071, 3, now());
INSERT INTO employee (Employee_ID, First_Name, Last_Name, Role_ID, Email, Password, Phone_Number, Office_Location_ID, Last_Updated)
VALUES (18, "David", "Been", 2, "Davidbe@gmail.com", 3333, 6223589071, 3, now());
INSERT INTO employee (Employee_ID, First_Name, Last_Name, Role_ID, Email, Password, Phone_Number, Office_Location_ID, Last_Updated)
VALUES (19, "Saly", "Ward", 2, "Salywa@gmail.com", 3333, 6434588771, 3, now());
INSERT INTO employee (Employee_ID, First_Name, Last_Name, Role_ID, Email, Password, Phone_Number, Office_Location_ID, Last_Updated)
VALUES (20, "Ray", "Gonzales", 2, "Raygo@gmail.com", 3333, 6434599971, 3, now());
INSERT INTO employee (Employee_ID, First_Name, Last_Name, Role_ID, Email, Password, Phone_Number, Office_Location_ID, Last_Updated)
VALUES (21, "Dustin", "Hoffman", 2, "Dustinho@gmail.com", 3333, 6444389071, 3, now());

-- ----------------------- Vendor --------------------------------------------------------

INSERT INTO vendor (Vendor_ID, Vendor_Name, Vendor_Phone_Number, Last_Updated) VALUES (1, "Apple", 01234567, now());
INSERT INTO vendor (Vendor_ID, Vendor_Name, Vendor_Phone_Number, Last_Updated) VALUES (2, "Samsung", 11121314, now());
INSERT INTO vendor (Vendor_ID, Vendor_Name, Vendor_Phone_Number, Last_Updated) VALUES (3, "LG", 15161718, now());
INSERT INTO vendor (Vendor_ID, Vendor_Name, Vendor_Phone_Number, Last_Updated) VALUES (4, "Beats", 20212223, now());
INSERT INTO vendor (Vendor_ID, Vendor_Name, Vendor_Phone_Number, Last_Updated) VALUES (5, "Nokia", 01239297, now());
INSERT INTO vendor (Vendor_ID, Vendor_Name, Vendor_Phone_Number, Last_Updated) VALUES (6, "Sony", 11134344, now());
INSERT INTO vendor (Vendor_ID, Vendor_Name, Vendor_Phone_Number, Last_Updated) VALUES (7, "Hitachi", 12231718, now());
INSERT INTO vendor (Vendor_ID, Vendor_Name, Vendor_Phone_Number, Last_Updated) VALUES (8, "Panasonic ", 20249303, now());
INSERT INTO vendor (Vendor_ID, Vendor_Name, Vendor_Phone_Number, Last_Updated) VALUES (9, "	Dell", 01222267, now());
INSERT INTO vendor (Vendor_ID, Vendor_Name, Vendor_Phone_Number, Last_Updated) VALUES (10, "Oracle Corporation", 38474382, now());
INSERT INTO vendor (Vendor_ID, Vendor_Name, Vendor_Phone_Number, Last_Updated) VALUES (11, "Lenovo", 15161118, now());
INSERT INTO vendor (Vendor_ID, Vendor_Name, Vendor_Phone_Number, Last_Updated) VALUES (12, "Saint-Gobain", 20213456, now());
INSERT INTO vendor (Vendor_ID, Vendor_Name, Vendor_Phone_Number, Last_Updated) VALUES (13, "Caterpillar", 01232397, now());
INSERT INTO vendor (Vendor_ID, Vendor_Name, Vendor_Phone_Number, Last_Updated) VALUES (14, "Renault", 11134564, now());
INSERT INTO vendor (Vendor_ID, Vendor_Name, Vendor_Phone_Number, Last_Updated) VALUES (15, "Intel", 12233456, now());
INSERT INTO vendor (Vendor_ID, Vendor_Name, Vendor_Phone_Number, Last_Updated) VALUES (16, "General Electric", 20236983, now());

-- ----------------------- Equipment --------------------------------------------------------
INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (1, 12345678, 1, "Desktop Computer", null, 1, 1, 1, null, null, now());
INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (2, 11223344, 2, "Displays", null, 1, 1, 1, null, null, now());
INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (3, 1112223, 3, "Laptops", null, 1, 1, 1, null, null, now());
INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (4, 1111123, 5, "Speakers", null, 1, 1, 1, null, null, now());
INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (5, 1111223, 4, "Mobile Devices", null, 1, 1, 1, null, null, now());
INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (6, 1111332, 6, "Printers", null, 1, 1, 1, null, null, now());
INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (7, 1122332, 7, "Servers", null, 1, 1, 1, null, null, now());
INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (8, 1323332, 8, "Smartrooms", null, 1, 1, 1, null, null, now());

INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (9, 12121678, 1, "Desktop Computer", 1, null, null, null, null, null, now());
INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (10, 11234344, 2, "Displays", 2, null, null, null, null, null, now());
INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (11, 11126566, 3, "Laptops", 3, 1, 1, 1, null, null, now());
INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (12, 11113433, 5, "Speakers", 4, null, null, null, null, null, now());
INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (13, 1117623, 4, "Mobile Devices", 5, null, null, null, null, null, now());
INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (14, 1111354, 6, "Printers", 6, null, null, null, null, null, now());
INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (15, 11212122, 7, "Servers", 7, null, null, null, null, null, now());
INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (16, 132333200, 8, "Smartrooms", 8, null, null, null, null, null, now());

INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (17, 12133338, 1, "Desktop Computer", 9, null, null, null, null, null, now());
INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (18, 11255554, 2, "Displays", 10, null, null, null, null, null, now());
INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (19, 66666566, 3, "Laptops", 11, null, null, null, null, null, now());
INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (20, 11667733, 5, "Speakers", 12, null, null, null, null, null, now());
INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (21, 1177663, 4, "Mobile Devices", 13, null, null, null, null, null, now());
INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (22, 1234554, 6, "Printers", 14, null, null, null, null, null, now());
INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (23, 11453522, 7, "Servers", 15, null, null, null, null, null, now());
INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (24, 133232200, 8, "Smartrooms", 16, null, null, null, null, null, now());

INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (25, 12134448, 1, "Desktop Computer", null, null, null, null, null, 1, now());
INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (26, 112555454, 2, "Displays", null, null, null, null, null, 2, now());
INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (27, 666665626, 3, "Laptops", null, null, null, null, null, 3, now());
INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (28, 116677313, 5, "Speakers", null, null, null, null, null, 4, now());
INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (29, 1172663, 4, "Mobile Devices", null, null, null, null, null, 5, now());
INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (30, 1224554, 6, "Printers", null, null, null, null, null, 6, now());
INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (31, 114533522, 7, "Servers", null, null, null, null, null, 1, now());
INSERT INTO equipment (Equipment_ID, Equipment_Serial_Number, Vendor_ID, Equipment_Type, Employee_ID, Office_Location_ID,
 Floor_Number, Room_ID, Expiration_Date, Department_ID, Last_Updated)
VALUES (32, 133212200, 8, "Smartrooms", null, null, null, null, null, 2, now());







