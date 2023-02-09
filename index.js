const db =  require("./server.js")
const inquirer = require("inquirer");

function startPrompt() {
    inquirer.prompt([
        {
            name: "question",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "View all employees",
                "Create a new department",
                "Create a new role",
                "Create a new employee",
                "Update employee role",
                "Quit"
            ]
        }])
        .then(function (res) {
            switch (res.question) {
                case "View all departments":
                viewDepart();
                break;
                case "View all roles":
                 viewRoles();
                 break;
                 case "View All employees":
                 viewEmploy();
                 break;
                 case "Create a new department":
                createDepart();
                break;
                case "Create a new role":
                createRol();
                break;
                case "Create a new employee":
                createEmploy();
                break;
                case "Update Employee Role":
                UpdateRol();
                break;
                case "Quit"
                process.exit(0):
                break;
             }
            });
        }













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