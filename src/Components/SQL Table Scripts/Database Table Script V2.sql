-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Final_Database_Project
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Final_Database_Project
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Final_Database_Project` DEFAULT CHARACTER SET utf8 ;
USE `Final_Database_Project` ;

-- -----------------------------------------------------
-- Table `Final_Database_Project`.`Office_Location`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Final_Database_Project`.`Office_Location` (
  `Office_Location_ID` INT NOT NULL AUTO_INCREMENT,
  `Office_City` VARCHAR(45) NOT NULL,
  `Office_State` VARCHAR(45) NOT NULL,
  `Last_Updated` TIMESTAMP(2) NOT NULL,
  PRIMARY KEY (`Office_Location_ID`),
  UNIQUE INDEX `Office_Location_ID_UNIQUE` (`Office_Location_ID` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Final_Database_Project`.`Roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Final_Database_Project`.`Roles` (
  `Role_ID` INT NOT NULL AUTO_INCREMENT,
  `Role_Type` VARCHAR(45) NOT NULL,
  `Last_Updated` TIMESTAMP(2) NOT NULL,
  PRIMARY KEY (`Role_ID`),
  UNIQUE INDEX `Role_ID_UNIQUE` (`Role_ID` ASC) VISIBLE,
  UNIQUE INDEX `Role_Type_UNIQUE` (`Role_Type` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Final_Database_Project`.`Employee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Final_Database_Project`.`Employee` (
  `Employee_ID` INT NOT NULL AUTO_INCREMENT,
  `First_Name` TEXT(255) NOT NULL,
  `Last_Name` TEXT(255) NOT NULL,
  `Role_ID` VARCHAR(45) NOT NULL,
  `Email` VARCHAR(255) NOT NULL,
  `Password` INT NOT NULL,
  `Phone_Number` VARCHAR(45) NOT NULL,
  `Office_Location_ID` INT NOT NULL,
  `Last_Updated` TIMESTAMP(2) NOT NULL,
  `Office_Location_Office_Location_ID` INT NOT NULL,
  `Roles_Role_ID` INT NOT NULL,
  PRIMARY KEY (`Employee_ID`),
  UNIQUE INDEX `Employee_ID_UNIQUE` (`Employee_ID` ASC) VISIBLE,
  UNIQUE INDEX `Email_UNIQUE` (`Email` ASC) VISIBLE,
  UNIQUE INDEX `Phone_Number_UNIQUE` (`Phone_Number` ASC) VISIBLE,
  INDEX `fk_Employee_Office_Location_idx` (`Office_Location_Office_Location_ID` ASC) VISIBLE,
  INDEX `fk_Employee_Roles1_idx` (`Roles_Role_ID` ASC) VISIBLE,
  CONSTRAINT `fk_Employee_Office_Location`
    FOREIGN KEY (`Office_Location_Office_Location_ID`)
    REFERENCES `Final_Database_Project`.`Office_Location` (`Office_Location_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Employee_Roles1`
    FOREIGN KEY (`Roles_Role_ID`)
    REFERENCES `Final_Database_Project`.`Roles` (`Role_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Final_Database_Project`.`Floor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Final_Database_Project`.`Floor` (
  `Floor_Number` INT NOT NULL AUTO_INCREMENT,
  `Office_Location_ID` INT NOT NULL,
  `Last_Updated` TIMESTAMP(2) NOT NULL,
  `Office_Location_Office_Location_ID` INT NOT NULL,
  PRIMARY KEY (`Floor_Number`),
  UNIQUE INDEX `Floor_Number_UNIQUE` (`Floor_Number` ASC) VISIBLE,
  INDEX `fk_Floor_Office_Location1_idx` (`Office_Location_Office_Location_ID` ASC) VISIBLE,
  CONSTRAINT `fk_Floor_Office_Location1`
    FOREIGN KEY (`Office_Location_Office_Location_ID`)
    REFERENCES `Final_Database_Project`.`Office_Location` (`Office_Location_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Final_Database_Project`.`Room`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Final_Database_Project`.`Room` (
  `Room_Number` INT NOT NULL AUTO_INCREMENT,
  `Floor_Number` VARCHAR(45) NOT NULL,
  `Last_Updated` TIMESTAMP(2) NOT NULL,
  `Floor_Floor_Number` INT NOT NULL,
  PRIMARY KEY (`Room_Number`),
  UNIQUE INDEX `Room_Number_UNIQUE` (`Room_Number` ASC) VISIBLE,
  INDEX `fk_Room_Floor1_idx` (`Floor_Floor_Number` ASC) VISIBLE,
  CONSTRAINT `fk_Room_Floor1`
    FOREIGN KEY (`Floor_Floor_Number`)
    REFERENCES `Final_Database_Project`.`Floor` (`Floor_Number`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Final_Database_Project`.`Vendor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Final_Database_Project`.`Vendor` (
  `Vendor_ID` INT NOT NULL AUTO_INCREMENT,
  `Vendor_Name` VARCHAR(45) NOT NULL,
  `Vendor_Phone_Number` VARCHAR(45) NOT NULL,
  `Last_Updated` TIMESTAMP(2) NOT NULL,
  PRIMARY KEY (`Vendor_ID`),
  UNIQUE INDEX `Vendor_ID_UNIQUE` (`Vendor_ID` ASC) VISIBLE,
  UNIQUE INDEX `Vendor_Name_UNIQUE` (`Vendor_Name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Final_Database_Project`.`Departments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Final_Database_Project`.`Departments` (
  `Department_ID` INT NOT NULL AUTO_INCREMENT,
  `Department_Name` VARCHAR(45) NOT NULL,
  `Last_Updated` TIMESTAMP(2) NOT NULL,
  PRIMARY KEY (`Department_ID`),
  UNIQUE INDEX `Department_Name_UNIQUE` (`Department_Name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Final_Database_Project`.`Equipment_Type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Final_Database_Project`.`Equipment_Type` (
  `Equipment_Type` VARCHAR(45) NOT NULL,
  `Equipment_Quantity` INT NOT NULL,
  `Last_Updated` TIMESTAMP(2) NOT NULL,
  PRIMARY KEY (`Equipment_Type`),
  UNIQUE INDEX `Equipment_Type_UNIQUE` (`Equipment_Type` ASC) VISIBLE,
  UNIQUE INDEX `Equipment_Quantity_UNIQUE` (`Equipment_Quantity` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Final_Database_Project`.`Equipment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Final_Database_Project`.`Equipment` (
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
  `Employee_Employee_ID` INT NOT NULL,
  `Office_Location_Office_Location_ID` INT NOT NULL,
  `Room_Room_Number` INT NOT NULL,
  `Vendor_Vendor_ID` INT NOT NULL,
  `Departments_Department_ID` INT NOT NULL,
  `Equipment_Type_Equipment_Type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Equipment_Serial_Number`),
  UNIQUE INDEX `Equipment_Serial_Number_UNIQUE` (`Equipment_Serial_Number` ASC) VISIBLE,
  INDEX `fk_Equipment_Employee1_idx` (`Employee_Employee_ID` ASC) VISIBLE,
  INDEX `fk_Equipment_Office_Location1_idx` (`Office_Location_Office_Location_ID` ASC) VISIBLE,
  INDEX `fk_Equipment_Room1_idx` (`Room_Room_Number` ASC) VISIBLE,
  INDEX `fk_Equipment_Vendor1_idx` (`Vendor_Vendor_ID` ASC) VISIBLE,
  INDEX `fk_Equipment_Departments1_idx` (`Departments_Department_ID` ASC) VISIBLE,
  INDEX `fk_Equipment_Equipment_Type1_idx` (`Equipment_Type_Equipment_Type` ASC) VISIBLE,
  CONSTRAINT `fk_Equipment_Employee1`
    FOREIGN KEY (`Employee_Employee_ID`)
    REFERENCES `Final_Database_Project`.`Employee` (`Employee_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Equipment_Office_Location1`
    FOREIGN KEY (`Office_Location_Office_Location_ID`)
    REFERENCES `Final_Database_Project`.`Office_Location` (`Office_Location_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Equipment_Room1`
    FOREIGN KEY (`Room_Room_Number`)
    REFERENCES `Final_Database_Project`.`Room` (`Room_Number`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Equipment_Vendor1`
    FOREIGN KEY (`Vendor_Vendor_ID`)
    REFERENCES `Final_Database_Project`.`Vendor` (`Vendor_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Equipment_Departments1`
    FOREIGN KEY (`Departments_Department_ID`)
    REFERENCES `Final_Database_Project`.`Departments` (`Department_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Equipment_Equipment_Type1`
    FOREIGN KEY (`Equipment_Type_Equipment_Type`)
    REFERENCES `Final_Database_Project`.`Equipment_Type` (`Equipment_Type`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Final_Database_Project`.`Reservation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Final_Database_Project`.`Reservation` (
  `Reservation_ID` INT NOT NULL,
  `Equipment_Serial_Number` VARCHAR(45) NULL,
  `Employee_ID` INT NOT NULL,
  `Start_Time` DATETIME NULL,
  `End_Time` DATETIME NULL,
  `Last_Updated` TIMESTAMP(2) NOT NULL,
  `Employee_Employee_ID` INT NOT NULL,
  PRIMARY KEY (`Reservation_ID`),
  UNIQUE INDEX `Reservation_ID_UNIQUE` (`Reservation_ID` ASC) VISIBLE,
  INDEX `fk_Reservation_Employee1_idx` (`Employee_Employee_ID` ASC) VISIBLE,
  CONSTRAINT `fk_Reservation_Employee1`
    FOREIGN KEY (`Employee_Employee_ID`)
    REFERENCES `Final_Database_Project`.`Employee` (`Employee_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
