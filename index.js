var inquirer = require("inquirer");
const { Action } = require("rxjs/internal/scheduler/Action");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "5GcXHEHKPR5?gs*y",
  database: "staffing",
});

const gatherInfo = (data) => {
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
      if (answers.action === "View All Employees") {
        console.log("Heres the department:");
        const sql = `SELECT * FROM departments`;
        db.query(sql, (err, rows) => {
          if (err) {
            console.log(error.message);
          }
          //new commands
          console.table(rows);
        });
      }
    });
};

module.exports();
