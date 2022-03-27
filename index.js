var inquirer = require("inquirer");
const mysql = require("mysql2");
const { Action } = require("rxjs/internal/scheduler/Action");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "5GcXHEHKPR5?gs*y",
  database: "staffing",
});

const toStart = (data) => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add Department",
          "Quit",
        ],
      },
    ])
    .then((answers) => {
      if (answers.action === "Add Employee") {
        return inquirer.prompt([
          {
            type: "input",
            name: "first_name",
            message: "What is the employee's first name?",
          },
          {
            type: "input",
            name: "last_name",
            message: "What is the employee's last name?",
          },
          {
            type: "list",
            name: "role_name",
            choices: [
              "Sales Lead",
              "Salesperson",
              "Lead Engineer",
              "Software Engineer",
              "Account Manager",
              "Accountant",
              "Legal Team Lead",
            ],
          },
        ]);
        const sql = `INSERT INTO employees(first_name, last_name, role_name)`;
        db.query(sql, (err, rows) => {
          if (err) {
            console.log(error.message);
          }
          console.table(rows);
        });
      } else if (answers.action === "View All Employees") {
        const sql = `SELECT * FROM employees`;
        db.query(sql, (err, rows) => {
          if (err) {
            console.log(error.message);
          }
          //new commands
          console.table(rows);
        });
      } else if (answers.action === "Update Employee Role") {
      } else if (answers.action === "View All Roles") {
      } else if (answers.action === "Add Role") {
      } else if (answers.action === "View All Departments") {
        console.log("Heres the department:");
        const sql = `SELECT * FROM departments`;
        db.query(sql, (err, rows) => {
          if (err) {
            console.log(error.message);
          }
          //new commands
          console.table(rows);
        });
      } else if (answers.action === "Add Department") {
      }
    });
};

toStart();
// module.exports();
