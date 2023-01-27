const consoleTable = require('console.table');
const mysql = require('mysql');
const inquirer = require('inquirer');


const init = () => {
  inquirer.prompt([
          {
              type: "list",
              message: "What would ou like to do?",
              name: "initialize",
              choices: [
                  "View all departments",
                "View all employees",
                "View all roles",
                "Add a department",
                "Add a role",
                  "Add an employee",
                  "Update an employee role",
                  "EXIT"
      ]
    }
  ]).then(userChoice => {
        switch (userChoice.initialize) {
          case "View all departments": viewDept();
              break;
          case "View all employees": viewEmploees();
              break;
          case "View all roles": viewRoles();
              break;
          case "Add a department": addDept();
              break;
          case "Add a role": addRole();
              break;
          case "Add an employee": addEmployee();
              break;
          case "Update an employee role": updateEmployee();
              break;
          case "DONE":
              console.log("Thanks for our sumbission");
              process.exit();
      }
  }).catch(err => console.error(err));
}

init();

const viewDepartment = () => {
     db.query(`SELECT * FROM department`, (err, results) => {
        err ? console.error(err) : console.table(results);
        init();
    })
};

const viewRoles = () => {
    db.query(`SELECT * FROM role`, (err, results) => {
        err ? console.error(err) : console.table(results);
        init();
    })
};

const viewEmployees = () => {
    db.query(`SELECT * FROM employee`, (err, results) => {
        err ? console.error(err) : console.table(results);
        init();
    })
}

const addDept = () => {
  inquirer
      .prompt([
          {type: "input",
          message: "What is the name of the Department you want to add?",
          name: "addDeartment"
      }
  ]).then(ans => {
      db.query(`INSERT INTO department(name)
              VALUES(?)`, ans.addDepartment, (err, results) => {
          if (err) {
              console.log(err)
          } else {
              db.query(`SELECT * FROM department`, (err, results) => {
                  err ? console.error(err) : console.table(results);
                  init();
              })
          }
      }
      )
  })
};


const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee's First Name?",
        name: "firstName"
      },
      {
        type: "input",
        message: "What is the employee's Last Name?",
        name: "lastName"
      },

    ]).then(ans => {
      db.query(`INSERT INTO employee(first_name, last_name)
        VALUES(?, ?)`, [ans.firstName, ans.lastName], (err, results) => {
        if (err) {
          console.log(err)
        }
        else {
          db.query(`SELECT * FROM employee`, (err, results) => {
            err ? console.error(err) : console.table(results);
            init();
          })
        }
      }
      )
    })
};

const addRole = () => {
  const deptChoices = () => db.promise().query(`SELECT * FROM department`)
      .then((rows) => {
          let arrNames = rows[0].map(obj => obj.name);
          return arrNames
      })
  inquirer
      .prompt([
          {
              type: "input",
              message: "What is the Title of the Role you want to add?",
              name: "roleTitle"
          },
          {
              type: "input",
              message: "What is the salary for the Role?",
              name: "roleSalary"
          },
          {
              type: "list",
              message: "Which Department does the Role belong to?",
              name: "addDepartment",
              choices: deptChoices
          }
      ]).then(ans => {
          db.promise().query(`SELECT id FROM department WHERE name = ?`, ans.addDepartment)
              .then(answer => {
                  let mappedId = answer[0].map(obj => obj.id);
                  // console.log(mappedId[0])
                  return mappedId[0]
              })
              .then((mappedId) => {
                  db.promise().query(`INSERT INTO role(title, salary, department_id)
              VALUES(?, ?, ?)`, [ans.roleTitle, ans.rolSalary, mappedId]);
                  init()
              })
      })
};












                  
                
                
  