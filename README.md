# transactional-starfish

# MySQL Employee App

## Purpose

The purpose of this app was to create a CLI to interact with a MySQL database storing employee information such as employee persoanl information, departments and roles.

## Technology Stack

> Node JS

> MySQL

> NPM MySql, Express, and Inquirer

## User Story

AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## Walkthrough Video

### [Video Link](https://drive.google.com/file/d/1EhdOludFLTIeVaiHVCID4EmuvZND2OrA/view)

### [Repository on Github](https://github.com/MiahHub/nimbot-yeti)

## Installation/Usage

Clone the repository onto your local machine and note that the project requires the following dependencies:

'npm install mysql12'
'npm install express'
'npm install console.table'
'npm install inquirer'

## Questions

Developer GitHub: <a href=https://github.com/MiahHub/transactional-starfish></a>

Developer Email: <a href=https://github.com/MiahHub></a>

## License [ISC License](http://opensource.org/licenses/ISC)

CLI Employee Database Tool for MySQL
