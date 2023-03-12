const inquirer = require("inquirer");
const db = require('./server')


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
        case "Quit":
          process.exit(0);
      }
    });
}
// function to view all employees
function viewEmploy() {
  db.query("SELECT * FROM employee", (err, res) => {
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
const viewRoles = () => {
  db.query("SELECT * FROM roles", (err, res) => {
    if (err) throw err;
    console.table(res);
    startPrompt();
  });
};

// Add a new employee
const createEmploy = () => {
  db.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    inquirer
      .prompt([
        {
          type: 'input',
          name: "firstName",
          message: "What is the employee's first name?",
        },
        {
          type: 'input',
          name: "lastName",
          message: "What is the employee's last name?",
        },
        {
          type: 'list',
          name: "role",
          message: "What is the employee's role?",
          choices:res.map(role => role.title)
        },
        {
          type: 'list',
          name: 'managerId',
          message: 'What is the ID of the manager?',
          choices: [1,2,3,5,7]
        },
      ])
      .then((data) => {
        let roleTitle = res.find((role) => role.title === data.role);
        db.query("INSERT INTO employee SET ?"),
          {
            first_name: data.firstName,
            last_name: data.lastName,
            role_id: roleTitle.id,
            manager_id: data.managerId,
          };
      });

    startPrompt();
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
            db.query ('INSERT INTO role SET ?', {
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

    
};
       
    

            
    

startPrompt();



