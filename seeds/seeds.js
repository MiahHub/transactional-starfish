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

  await department.bulkCreate(departmentSeedData);

  await role.bulkCreate(roleSeedData);

  process.exit(0);
};

seedDatabase();