const inquirer = require("inquirer");
const db = require('./server')
const { query } = require("express");
const cTable = require('console.table');


// function to view all employees
function viewEmploy() {
  db.query("SELECT * FROM employees", (err, res) => {
    if (err) throw err;
    console.table(res);
    startPrompt();
  });
}

//function to view all departments
const viewDepart = () => {
  db.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    console.table(res);
    startPrompt();
  });
};

//function to view all roles
const viewRoles = () => {
  db.query("SELECT * FROM roles", (err, res) => {
    if (err) throw err;
    console.table(res);
    startPrompt();
  });
};

// Add a new employee
const createEmploy = () => {
  db.query("SELECT * FROM roles", (err, roles) => {
    if (err) throw err;
    db.query("SELECT * FROM employees", (err, employees) => {
      if (err) throw err;
      inquirer
      .prompt([
        {
          type: "input",
          name: "firstName",
          message: "What is the employee's first name?",
        },
        {
          type: "input",
          name: "lastName",
          message: "What is the employee's last name?",
        },
        {
          type: "list",
          name: "roleId",
          message: "What is the employee's role?",
          choices: roles.map((role) => ({
            name: role.title,
            value: role.id,
          })),
        },
        {
          type: "list",
          name: "managerId",
          message: "Who is the employee's manager?",
          choices: employees.map((employee) => ({
            name: `${employee.first_name} ${employee.last_name}`,
            value: employee.id,
          })),
        },
      ])
      .then((data) => {
        db.query(
          "INSERT INTO employees SET ?",
          {
            first_name: data.firstName,
            last_name: data.lastName,
            role_id: data.roleId,
            manager_id: data.managerId,
          },
          (err) => {
            if (err) throw err;
            console.log("Employee added!");
            startPrompt();
          }
          );
        });
      });
    });
  };
  // Add a role
  const createRol = () => {
    db.query ('SELECT * FROM department', (err,res) => {
        if(err) throw err
        inquirer.prompt([
          {
            type:'input',
            name: 'title',
            message: 'What is the name of the role'
          },
          {
            type:'input',
            name:'salary',
            message:'What is the salary of this role'
          },
          {
            type: 'list',
                name: 'department',
                message: 'Which department does the role belong to?',
                choices: res.map(department => department.name)
              }
            ]) .then (data => {
              let deptName = res.find(department => department.name === data.department)
              db.query ('INSERT INTO roles SET ?', {
                title: data.title,
                salary: data.salary,
                department_id: deptName.id,
              })
              
              startPrompt()
              
            })
            
    })
    
  };
  // Add a department 
  const createDepart = () => {
    db.query('SELECT * FROM department',(err,res) => {
      if(err) throw err
      inquirer.prompt([
        {
          type: 'input',
          name:'name',
          message:'What is the new Department called?'
        },
      ])  .then (data => {
        db.query ('INSERT INTO department SET ?', {
          name: data.name,
        })
      })
    
      startPrompt()
    })
  }
    const updateEmployRol = () => {
      db.query('SELECT * FROM employees', (err, res) => {
        if (err) throw err;
        inquirer.prompt([
          {
            type: 'list',
            name: 'whichEmp',
            message: 'Which Employee would you like to Choose to Edit?',
            choices: res.map(employee => employee.first_name + ' ' + employee.last_name),
          },
        ]).then(data => {
          const chosenEmp = res.find(
            employee => employee.first_name + ' ' + employee.last_name === data.whichEmp,
          );
          db.query('SELECT * FROM roles', (err, res) => {
            if (err) throw err;
            inquirer.prompt([
              {
                type: 'list',
                name: 'newRole',
                message: 'What new role would you like to Give the Chosen Employee?',
                choices: res.map(role => role.title),
              },
            ]).then(data => {
              let chosenRole = res.find(role => role.title === data.newRole);
              db.query(
                'UPDATE employees SET role_id = ? WHERE id = ?',
                [chosenRole.id, chosenEmp.id],
                (err, res) => {
                  if (err) throw err;
                  startPrompt();
                },
              );
            });
          });
        });
      });
    };
  
    
  
  
  
  function startPrompt() {
    inquirer
      .prompt([
        {
          name: "question",
          type: "list",
          message: "What would you like to do?",
          choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Create a new department",
            "Create a new role",
            "Create a new employee",
            "Update employee role",
            "Quit",
          ],
          loop: false,
        },
      ])
      .then(function (res) {
        switch (res.question) {
          case "View all departments":
            viewDepart();
            break;
            case "Create a new department":
              createDepart();
              break;
          case "View all roles":
            viewRoles();
            break;
            case "Create a new role":
              createRol();
              break;
          case "View all employees":
            viewEmploy();
            break;
            case "Create a new employee":
              createEmploy();
              break;
              case "Update employee role":
                updateEmployRol();
                break;
          case "Quit":
            process.exit(0);
        }
      });
  };
  
  
  
  startPrompt();
