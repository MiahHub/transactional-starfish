const sequelize = require('../config/connection');

const employee = require('../models/employee');
const department = require('../models/department');
const role = require('../models/role');

const employeeSeedData = require('../seeds/employeeSeedSata.json');
const departmentSeedData = require('../seeds/departmentSeedData.json');
const roleSeedData = require('../seeds/roleSeedData.json');

// Add the `async` keyword to the function `seedDatabase` to make Asynchronous.
const seedDatabase = async () => {
  // Add the `await` keyword infront of the expressions inside the `async` function.
  await sequelize.sync({ force: true });

  // Once JavaScript recogonizes the `await` keyword it waits for the promise to be fufilled before moving on.
  await employee.bulkCreate(employeeSeedData);
  console.log('\n---- employees seeded------\n');

  await department.bulkCreate(departmentSeedData);
  console.log('\n---- departments seeded------\n');

  await role.bulkCreate(roleSeedData);
  console.log('\n---- roles seeded------\n');

  process.exit(0);
};

seedDatabase();

/*const addEmployee = () => {
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
    ])
    .then((choice) => {
      db.query(
        `INSERT INTO employee(first_name, last_name) VALUES (?, ?)`,
        [choice.firstName, choice.lastName],
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
};*/
