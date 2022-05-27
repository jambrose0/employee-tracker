const inquirer = require("inquirer");
const mysql = require("mysql2");

const manageEmployees = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "manage",
        choices: [
          "View All Departments",
          "Add a Department",
          "View All Roles",
          "Add a Role",
          "View all Employees",
          "Add an Employee",
          "Edit an Employee",
          "Finish",
        ],
      },
    ])
    .then(({ manage }) => {
      if (manage === "View All Departments") {
        getAllDepartments().then((res) => {
          console.table(res);
          manageEmployees();
        });
      } else if (manage === "Add a Department") {
        addDepartment().then(() => {
          console.table("Department added!");
          manageEmployees;
        });
      } else if (manage === "View all Roles") {
        viewRoles().then((res) => {
          console.table(res);
          manageEmployees;
        });
      } else if (manage === "Add a Role") {
        addRole().then(() => {
          console.table("Role added!");
          manageEmployees;
        });
      } else if (manage === "View all Employees") {
        viewEmployees().then((res) => {
          console.table(res);
          manageEmployees;
        });
      } else if (manage === "Add an Employee") {
        addEmployee().then(() => {
          console.table("Role added!");
          manageEmployees;
        });
      } else if (manage === "Edit an Employee") {
        addDepartment().then(() => {
          console.table("Employee Edited!");
          manageEmployees;
        });
      }
    });
};
