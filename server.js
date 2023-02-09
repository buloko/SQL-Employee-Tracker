const express = require('express');
// import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        password: 'Kansasis123@',
        database: 'company_db'
       
        
    }
)
connection.connect(err => {
  if (err) throw err;
  console.log("Connected to the database");
  mainMenu();
});

const mainMenu = () => {
  inquirer
    .prompt([
    {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Exit"
        ]
      }