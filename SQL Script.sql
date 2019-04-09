SET @Department_ID_to_select = <{row_id}>;
SELECT equipment.*
    FROM equipment, departments
    WHERE `departments`.`Department_ID` = `equipment`.`Departments_Department_ID`
          AND departments.Department_ID = @Department_ID_to_select;
SELECT departments.*
    FROM departments
    WHERE departments.Department_ID = @Department_ID_to_select;SELECT * FROM database_project.departments;
    
SET @Employee_ID_to_select = <{row_id}>;
SELECT equipment.*
    FROM equipment, employee
    WHERE `employee`.`Employee_ID` = `equipment`.`Employee_Employee_ID`
          AND employee.Employee_ID = @Employee_ID_to_select;
SELECT reservation.*
    FROM reservation, employee
    WHERE `employee`.`Employee_ID` = `reservation`.`Employee_ID`
          AND employee.Employee_ID = @Employee_ID_to_select;
SELECT roles.*
    FROM roles, employee
    WHERE `employee`.`Employee_ID` = `roles`.`Employee_Employee_ID`
          AND employee.Employee_ID = @Employee_ID_to_select;
SELECT employee.*
    FROM employee
    WHERE employee.Employee_ID = @Employee_ID_to_select;
SET @Equipment_Serial_Number_to_select = <{row_id}>;
SELECT equipment.*
    FROM equipment
    WHERE equipment.Equipment_Serial_Number = @Equipment_Serial_Number_to_select;
SET @Equipment_Type_to_select = <{row_id}>;
SELECT equipment type.*
    FROM equipment type
    WHERE equipment type.Equipment_Type = @Equipment_Type_to_select;
SET @Floor_Number_to_select = <{row_id}>;
SELECT room.*
    FROM room, floor
    WHERE `floor`.`Floor_Number` = `room`.`Floor_Floor_Number`
          AND floor.Floor_Number = @Floor_Number_to_select;
SELECT floor.*
    FROM floor
    WHERE floor.Floor_Number = @Floor_Number_to_select;
SET @Office_Location_ID_to_select = <{row_id}>;
SELECT office location.*
    FROM office location
    WHERE office location.Office_Location_ID = @Office_Location_ID_to_select;
SET @Reservation_ID_to_select = <{row_id}>;
SELECT reservation.*
    FROM reservation
    WHERE reservation.Reservation_ID = @Reservation_ID_to_select;
SET @Role_ID_to_select = <{row_id}>;
SELECT roles.*
    FROM roles
    WHERE roles.Role_ID = @Role_ID_to_select;
SET @Room_Number_to_select = <{row_id}>;
SELECT room.*
    FROM room
    WHERE room.Room_Number = @Room_Number_to_select;
SET @Vendor_ID_to_select = <{row_id}>;
SELECT vendor.*
    FROM vendor
    WHERE vendor.Vendor_ID = @Vendor_ID_to_select;