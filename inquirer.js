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