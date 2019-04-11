-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Database_Project
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Database_Project
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Database_Project` DEFAULT CHARACTER SET utf8 ;
USE `Database_Project` ;

-- -----------------------------------------------------
-- Table `Database_Project`.`Office_Location`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Database_Project`.`Office_Location` (
  `Office_Location_ID` INT NOT NULL AUTO_INCREMENT,
  `Office_City` VARCHAR(255) NOT NULL,
  `Office_State` VARCHAR(255) NOT NULL,
  `Office_Country` VARCHAR(255) NOT NULL,
  `Last_Updated` TIMESTAMP(2) NOT NULL,
  PRIMARY KEY (`Office_Location_ID`),
  UNIQUE INDEX `Office Location ID_UNIQUE` (`Office_Location_ID` ASC) VISIBLE);


-- -----------------------------------------------------
-- Table `Database_Project`.`Employee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Database_Project`.`Employee` (
  `Employee_ID` INT NOT NULL AUTO_INCREMENT,
  `First_Name` TEXT(255) NOT NULL,
  `Last_Name` TEXT(255) NOT NULL,
  `Email` VARCHAR(255) NOT NULL,
  `Phone_Number` VARCHAR(45) NOT NULL,
  `Office_Location_ID` INT NOT NULL,
  `Role_ID` INT NOT NULL,
  `Last_Updated` TIMESTAMP(2) NOT NULL,
  `Office Location_Office_Location_ID` INT NOT NULL,
  PRIMARY KEY (`Employee_ID`),
  UNIQUE INDEX `Employee ID_UNIQUE` (`Employee_ID` ASC) VISIBLE,
  UNIQUE INDEX `Email_UNIQUE` (`Email` ASC) VISIBLE,
  UNIQUE INDEX `Phone Number_UNIQUE` (`Phone_Number` ASC) VISIBLE,
  INDEX `fk_Employee_Office Location_idx` (`Office Location_Office_Location_ID` ASC) VISIBLE,
  CONSTRAINT `fk_Employee_Office Location`
    FOREIGN KEY (`Office Location_Office_Location_ID`)
    REFERENCES `Database_Project`.`Office_Location` (`Office_Location_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `Database_Project`.`Floor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Database_Project`.`Floor` (
  `Floor_Number` INT NOT NULL AUTO_INCREMENT,
  `Office_Location ID` INT NOT NULL,
  `Last_Updated` TIMESTAMP(2) NOT NULL,
  `Office Location_Office_Location_ID` INT NOT NULL,
  PRIMARY KEY (`Floor_Number`),
  UNIQUE INDEX `Floor ID_UNIQUE` (`Floor_Number` ASC) VISIBLE,
  INDEX `fk_Floor_Office Location1_idx` (`Office Location_Office_Location_ID` ASC) VISIBLE,
  CONSTRAINT `fk_Floor_Office Location1`
    FOREIGN KEY (`Office Location_Office_Location_ID`)
    REFERENCES `Database_Project`.`Office_Location` (`Office_Location_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `Database_Project`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Database_Project`.`user` (
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(32) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP);


-- -----------------------------------------------------
-- Table `Database_Project`.`Equipment_Type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Database_Project`.`Equipment_Type` (
  `Equipment_Type` VARCHAR(45) NOT NULL,
  `Equipment_Quantity` INT NOT NULL,
  `Last_Updated` TIMESTAMP(2) NOT NULL,
  UNIQUE INDEX `Equipment_Number_UNIQUE` (`Equipment_Quantity` ASC) VISIBLE,
  UNIQUE INDEX `Equipment_Type_UNIQUE` (`Equipment_Type` ASC) VISIBLE,
  PRIMARY KEY (`Equipment_Type`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Database_Project`.`Room`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Database_Project`.`Room` (
  `Room_Number` INT NOT NULL AUTO_INCREMENT,
  `Floor_Number` INT NOT NULL,
  `Last_Updated` TIMESTAMP(2) NOT NULL,
  `Floor_Floor_Number` INT NOT NULL,
  PRIMARY KEY (`Room_Number`),
  UNIQUE INDEX `Room_Number_UNIQUE` (`Room_Number` ASC) VISIBLE,
  INDEX `fk_Room_Floor1_idx` (`Floor_Floor_Number` ASC) VISIBLE,
  CONSTRAINT `fk_Room_Floor1`
    FOREIGN KEY (`Floor_Floor_Number`)
    REFERENCES `Database_Project`.`Floor` (`Floor_Number`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Database_Project`.`Vendor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Database_Project`.`Vendor` (
  `Vendor_ID` INT NOT NULL AUTO_INCREMENT,
  `Vendor_Name` VARCHAR(255) NOT NULL,
  `Vendor_Phone_Number` VARCHAR(45) NOT NULL,
  `Last_Updated` TIMESTAMP(2) NOT NULL,
  PRIMARY KEY (`Vendor_ID`),
  UNIQUE INDEX `Vendor Name_UNIQUE` (`Vendor_Name` ASC) VISIBLE,
  UNIQUE INDEX `Vendor_ID_UNIQUE` (`Vendor_ID` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Database_Project`.`Reservation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Database_Project`.`Reservation` (
  `Reservation_ID` INT NOT NULL,
  `Equipment_Serial_Number` VARCHAR(45) NULL,
  `Start_Time` DATETIME NULL,
  `End_Time` DATETIME NULL,
  `Last_Updated` TIMESTAMP(2) NOT NULL,
  `Employee_ID` INT NULL,
  PRIMARY KEY (`Reservation_ID`),
  UNIQUE INDEX `Reservation ID_UNIQUE` (`Reservation_ID` ASC) VISIBLE,
  INDEX `Employee_ID_idx` (`Employee_ID` ASC) VISIBLE,
  CONSTRAINT `Employee_ID`
    FOREIGN KEY (`Employee_ID`)
    REFERENCES `Database_Project`.`Employee` (`Employee_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Database_Project`.`Departments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Database_Project`.`Departments` (
  `Department_ID` INT NOT NULL AUTO_INCREMENT,
  `Department_Name` VARCHAR(45) NOT NULL,
  `Last_Updated` TIMESTAMP(2) NOT NULL,
  UNIQUE INDEX `Department_Name_UNIQUE` (`Department_Name` ASC) VISIBLE,
  PRIMARY KEY (`Department_ID`));


-- -----------------------------------------------------
-- Table `Database_Project`.`Equipment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Database_Project`.`Equipment` (
  `Equipment_Serial_Number` VARCHAR(45) NOT NULL,
  `Vendor_ID` INT NOT NULL,
  `Equipment_Type` VARCHAR(45) NOT NULL,
  `Employee_ID` INT NULL,
  `Office_Location_ID` INT NULL,
  `Floor_Number` INT NULL,
  `Room_Number` INT NULL,
  `Expiration_Date` DATETIME NULL,
  `Department_ID` INT NULL,
  `Last_Updated` TIMESTAMP(2) NOT NULL,
  `Equipment Type_Equipment_Number` INT NOT NULL,
  `Employee_Employee_ID` INT NOT NULL,
  `Office Location_Office_Location_ID` INT NOT NULL,
  `Room_Room_Number` INT NOT NULL,
  `Floor_Floor_Number` INT NOT NULL,
  `Vendor_Vendor_ID` INT NOT NULL,
  `Reservation_Reservation_ID` INT NOT NULL,
  `Departments_Department_ID` INT NOT NULL,
  UNIQUE INDEX `Equipment Serial Number_UNIQUE` (`Equipment_Serial_Number` ASC) VISIBLE,
  PRIMARY KEY (`Equipment_Serial_Number`),
  INDEX `fk_Equipment_Equipment Type1_idx` (`Equipment Type_Equipment_Number` ASC) VISIBLE,
  INDEX `fk_Equipment_Employee1_idx` (`Employee_Employee_ID` ASC) VISIBLE,
  INDEX `fk_Equipment_Office Location1_idx` (`Office Location_Office_Location_ID` ASC) VISIBLE,
  INDEX `fk_Equipment_Room1_idx` (`Room_Room_Number` ASC) VISIBLE,
  INDEX `fk_Equipment_Floor1_idx` (`Floor_Floor_Number` ASC) VISIBLE,
  INDEX `fk_Equipment_Vendor1_idx` (`Vendor_Vendor_ID` ASC) VISIBLE,
  INDEX `fk_Equipment_Reservation1_idx` (`Reservation_Reservation_ID` ASC) VISIBLE,
  INDEX `fk_Equipment_Departments1_idx` (`Departments_Department_ID` ASC) VISIBLE,
  CONSTRAINT `fk_Equipment_Equipment Type1`
    FOREIGN KEY (`Equipment Type_Equipment_Number`)
    REFERENCES `Database_Project`.`Equipment_Type` (`Equipment_Quantity`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Equipment_Employee1`
    FOREIGN KEY (`Employee_Employee_ID`)
    REFERENCES `Database_Project`.`Employee` (`Employee_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Equipment_Office Location1`
    FOREIGN KEY (`Office Location_Office_Location_ID`)
    REFERENCES `Database_Project`.`Office_Location` (`Office_Location_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Equipment_Room1`
    FOREIGN KEY (`Room_Room_Number`)
    REFERENCES `Database_Project`.`Room` (`Room_Number`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Equipment_Floor1`
    FOREIGN KEY (`Floor_Floor_Number`)
    REFERENCES `Database_Project`.`Floor` (`Floor_Number`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Equipment_Vendor1`
    FOREIGN KEY (`Vendor_Vendor_ID`)
    REFERENCES `Database_Project`.`Vendor` (`Vendor_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Equipment_Reservation1`
    FOREIGN KEY (`Reservation_Reservation_ID`)
    REFERENCES `Database_Project`.`Reservation` (`Reservation_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Equipment_Departments1`
    FOREIGN KEY (`Departments_Department_ID`)
    REFERENCES `Database_Project`.`Departments` (`Department_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `Database_Project`.`Roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Database_Project`.`Roles` (
  `Role_ID` INT NOT NULL AUTO_INCREMENT,
  `Role_Type` VARCHAR(45) NOT NULL,
  `Employee_Employee_ID` INT NOT NULL,
  PRIMARY KEY (`Role_ID`),
  UNIQUE INDEX `Role_Type_UNIQUE` (`Role_Type` ASC) VISIBLE,
  INDEX `fk_Roles_Employee1_idx` (`Employee_Employee_ID` ASC) VISIBLE,
  CONSTRAINT `fk_Roles_Employee1`
    FOREIGN KEY (`Employee_Employee_ID`)
    REFERENCES `Database_Project`.`Employee` (`Employee_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
