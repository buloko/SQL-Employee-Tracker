DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db

CREATE TABLE department (
id INT PRIMARY KEY
name: VARCHAR(30)
):

CREATE TABLE roles(

id: INT PRIMARY KEY
title: VARCHAR(30)
salary: DECIMAL
department_id: INT
FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

CREATE TABLE employees (
first_name: VARCHAR(30)
last_name: VARCHAR(30)
role_id:INT
manager_id:INT,NULL
FOREIGN KEY (role_id) REFERENCES roles(role_id)
FOREIGN KEY (manager_id) REFERENCES employees(employees(id))
);