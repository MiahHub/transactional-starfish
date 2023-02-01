const inquirer = require('inquirer');
const db = require('./config/connection');
const cTable = require('console.table');
const mysql = require('mysql');

const init = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'What would ou like to do?',
        name: 'start',
        choices: [
          'View all departments',
          'View all employees',
          'View all roles',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          'EXIT',
        ],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.start) {
        case 'View all departments':
          viewDepartment();
          break;
        case 'View all employees':
          viewEmployees();
          break;
        case 'View all roles':
          viewRoles();
          break;
        case 'Add a department':
          addDept();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Add an employee':
          addEmployee();
          break;
        case 'Update an employee role':
          updateEmployee();
          break;
        case 'DONE':
          console.log('Thanks for our sumbission');
          process.exit();
      }
    })
    .catch((err) => console.error(err));
};

init();

const viewDepartment = () => {
  db.query(`SELECT * FROM department order by 1 desc`, (err, results) => {
    err ? console.error(err) : console.table(results);
    init();
  });
};

const viewRoles = () => {
  db.query(`SELECT * FROM role order by 1 desc`, (err, results) => {
    err ? console.error(err) : console.table(results);
    init();
  });
};

const viewEmployees = () => {
  db.query(
    `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, manager_id FROM department JOIN role ON department.id = role.department_id JOIN employee ON role.id = employee.role_id`,
    (err, results) => {
      err ? console.error(err) : console.table(results);
      init();
    }
  );
};

const addDept = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the name of the Department you want to add?',
        name: 'addDepartment',
      },
    ])
    .then((choice) => {
      db.query(
        `INSERT INTO department (department.name) VALUES (?)`,
        choice.addDepartment,
        (err, results) => {
          if (err) {
            console.log(err);
          } else {
            db.query(
              `SELECT * FROM department order by 1 desc`,
              (err, results) => {
                err
                  ? console.error(err)
                  : console.log(`Department added successfully`);
                console.table(results);
                init();
              }
            );
          }
        }
      );
    });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: "What is the employee's First Name?",
        name: 'firstName',
      },
      {
        type: 'input',
        message: "What is the employee's Last Name?",
        name: 'lastName',
      },
      {
        type: 'input',
        message: "What is the employee's DB ID?",
        name: 'dbId',
      },
      {
        type: 'input',
        message: "What is the employee's Role ID?",
        name: 'roleId',
      },
      {
        type: 'input',
        message: "What is the employee's Manager ID?",
        name: 'managerId',
      },
    ])
    .then((choice) => {
      db.query(
        `INSERT INTO employee(id, first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?, ?)`,
        [
          choice.dbId,
          choice.firstName,
          choice.lastName,
          choice.roleId,
          choice.managerId,
        ],
        (err, results) => {
          if (err) {
            console.log(err);
          } else {
            db.query(
              `SELECT * FROM employee order by 1 desc`,
              (err, results) => {
                err
                  ? console.error(err)
                  : console.log(`Employee added successfully`);
                console.table(results);
                init();
              }
            );
          }
        }
      );
    });
};

const updateEmployee = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: "What is the employee's DB ID?",
        name: 'dbId',
      },
      {
        type: 'input',
        message: "Enter employee's new Role ID",
        name: 'roleId',
      },
    ])
    .then((choice) => {
      db.query(
        `UPDATE employee SET role_id = ? where employee.id = ?`,
        [choice.dbId, choice.roleId],
        (err, results) => {
          if (err) {
            console.log(err);
          } else {
            db.query(
              `SELECT * FROM employee order by 1 desc`,
              (err, results) => {
                err
                  ? console.error(err)
                  : console.log(`Employee role updated successfully`);
                console.table(results);
                init();
              }
            );
          }
        }
      );
    });
};

const addRole = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the Title of the Role you want to add?',
        name: 'roleTitle',
      },
      {
        type: 'input',
        message: 'What is the salary for the Role?',
        name: 'roleSalary',
      },
      {
        type: 'input',
        message: 'Which Department ID does the Role belong to?',
        name: 'departmentId',
      },
      {
        type: 'input',
        message: 'Which Role ID does the Role belong to?',
        name: 'roleId',
      },
    ])
    .then((choice) => {
      db.query(
        `INSERT INTO role(title, salary, department_id, id) VALUES (?, ?, ?, ?)`,
        [
          choice.roleTitle,
          choice.roleSalary,
          choice.departmentId,
          choice.roleId,
        ],
        (err, results) => {
          if (err) {
            console.log(err);
          } else {
            db.query(`SELECT * FROM role order by 1 desc`, (err, results) => {
              err ? console.error(err) : console.log(`Role added successfully`);
              console.table(results);
              init();
            });
          }
        }
      );
    });
};
