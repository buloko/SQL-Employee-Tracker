const db = require("./server.js")
const inquirer = require("inquirer");
const { query } = require("express");
const cTable = require('console.table')
// function to view all employees
function viewEmploy() {
    db.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err
        console.table(res)
        startMenu()
    })
};
//function to view all departments
const viewDepart = () => {
    db.query('SELECT * FROM department', (err, res) => {
        if (err) throw err
        console.table(res)
        startMenu()
    })
};
const viewRoles = () => {
    db.query('SELECT * FROM roles', (err, res) => {
        if (err) throw err
        console.table(res)
        startMenu()
    })
};

const newEmploy = () => {
    db.query('SELECT * FROM role', (err,res) => {
        if(err) throw err
        inquirer.prompt([
            {
                type: input,
                name: 'firstName',
                message:"What is the employee's first name?"
            },
            {
                type: input,
                name:'lastName',
                message:"What is the employee's last name?"
            },
            {
                type: list,
                name: role,
                message: "What is the employee's role?",
                choices: [1,2,3,4,5,6,7,8,9,10,11,12,13]    
            },
        ])
        .then (data => {
          let roleTitle = res.find(role => role.title === data.role)
          db.query ('INSERT INTO employee SET ?') , {
            first_name: data.firstName,
            last_name:data.lastName,
            role_id: roleTitle.id,
            manager_id: data.managerId,
          })

          startMenu()
    })
    
})
};

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
                case 'Quit':
                process.exit(0);
            }
        });
}


startPrompt()











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
        ])};