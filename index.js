const inquirer = require("inquirer");
const mysql = require("mysql2");
require("dotenv").config();
// console.log(process.env);

const db = mysql.createConnection({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "staffing",
});

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
        viewDepartments();
        // .then((res) => {
        //   console.table(res);
        //   manageEmployees();
        // });
      } else if (manage === "Add a Department") {
        addDepartment();
        // .then(() => {
        // console.table("Department added!");
        // manageEmployees;
        // });
      } else if (manage === "View all Roles") {
        viewRoles();
        // .then((res) => {
        //   console.table(res);
        //   manageEmployees;
        // });
      } else if (manage === "Add a Role") {
        addRole();
        // .then(() => {
        //   console.table("Role added!");
        //   manageEmployees;
        // });
      } else if (manage === "View all Employees") {
        viewEmployees();
        // .then((res) => {
        //   console.table(res);
        //   manageEmployees;
        // });
      } else if (manage === "Add an Employee") {
        addEmployee();
        // .then(() => {
        //   console.table("Role added!");
        //   manageEmployees;
        // });
      } else if (manage === "Edit an Employee") {
        editEmployee().then(() => {
          //   console.table("Employee Edited!");
          manageEmployees;
        });
      } else if (manage === "Finish") {
      }
    });
};

//view  departments and add departments
const viewDepartments = () => {
  // console.log("here are the departments");
  return db
    .promise()
    .query("SELECT * FROM departments")
    .then(([rows, fields]) => {
      // console.log("here are the departments");
      console.table("Departments:", rows);
    });

  // db.promise()
  //   .query("SELECT * FROM departments")
  //   .then(([rows, fields]) => {
  //     // console.log("");
  //     console.table("All Departments", rows);
  //   })
  //   .then(() => {
  //     manageEmployees();
  //   });
};

const addDepartment = () => {
  console.log("ADD DEPARTMENT HERE");
  //   inquirer
  //     .prompt({
  //       name: "name",
  //       type: "input",
  //       message: "Add new department name:",
  //     })
  //     .then((response) => {
  //       db.query(
  //         "INSERT INTO departments SET ?",
  //         {
  //           dept_name: response.name,
  //         },
  //         (err, res) => {
  //           if (err) throw err;
  //           console.log("");
  //           console.log("Department Added!");
  //           console.log("");
  //           manageEmployees();
  //         }
  //       );
  //     });
};

//view roles and add roles
const viewRoles = () => {
  console.log("VIEW ROLES HERE");

  //   db.promise()
  //     .query("SELECT * FROM roles")
  //     .then(([rows, fields]) => {
  //       console.log("");
  //       console.table("All Roles", rows);
  //     })
  //     .then(() => {
  //       manageEmployees();
  //     });
};
const addRole = () => {
  console.log("ADD ROLE HERE");

  //   db.query("SELECT * FROM departments", (err, results) => {
  //     if (err) throw err;

  //     inquirer
  //       .prompt([
  //         {
  //           name: "departments",
  //           type: "list",
  //           choices: function () {
  //             const deptArray = [];
  //             results.forEach(({ id, name }) => {
  //               deptArray.push({
  //                 name: role_name,
  //                 value: id,
  //               });
  //             });
  //             return deptArray;
  //           },
  //         },
  //         {
  //           name: "role_name",
  //           type: "input",
  //           message: "New role name:",
  //         },
  //         {
  //           name: "salary",
  //           type: "input",
  //           message: "New roles salary:",
  //         },
  //       ])
  //       .then((response) => {
  //         db.query(
  //           "INSERT INTO roles SET ?",
  //           {
  //             role_name: response.role_name,
  //             salary: response.salary,
  //             dept_id: response.departments,
  //           },
  //           (err, res) => {
  //             if (err) throw err;
  //             console.log("");
  //             console.log("Role added!");
  //             console.log("");
  //             manageEmployees();
  //           }
  //         );
  //       });
  //   });
};

//view employees, add, employees, and EDIT employees
const viewEmployees = () => {
  console.log("VIEW EMPLOYEES HERE");

  // db.promise()
  //   .query("SELECT * FROM employees")
  //   .then(([rows, fields]) => {
  //     console.log("");
  //     console.table("All Employees", rows);
  //   })
  //   .then(() => {
  //     manageEmployees();
  //   });
};

const addEmployee = () => {
  console.log("ADD EMPLOYEE HERE");

  //     db.query('SELECT * FROM roles', (err, results) => {
  //         if(err) throw err;

  //    inquirer.prompt([
  //     {
  //         name: 'roles',
  //         type: "list",
  //         choices: function () {
  //             const rolesArray = [];
  //             results.forEach(({ id, name }) => {
  //                 rolesArray.push({
  //                     name: role_name,
  //                     value: id,
  //                 });
  //             });
  //             return rolesArray;
  //         };
  //         },
  //         {
  //             name: 'first_name',
  //             type: 'input',
  //             message: 'First Name:'
  //         },
  //         {
  //             name: 'last_name',
  //             type: 'input',
  //             message: 'Last name:'

  //         },
  //         {
  //             name: 'manager_id',
  //             type: 'input',
  //             message: 'Who is this Employees Manager?'
  //         }
  //     }
  // ])
  // .then((response) => {
  //     db.query(
  //         'INSERT INTO employees SET ?',
  //         {
  //             first_name: response.first_name,
  //             last_name: response.last_name,
  //             manager_id: response.manager_id
  //         },
  //         (err, res) => {
  //             if(err) throw err;
  //             console.log('');
  //             console.log('Employee Added!');
  //             console.log('');

  //         }
  //     )
};

const editEmployee = () => {
  console.log("EDIT EMPLOYEE HERE");

  //     db.query('SELECT * FROM employees', (err, results) => {
  //         if(err) throw err;

  //         inquirer.prompt([
  //             {
  //                 name:
  //             }
  //         ])
  //     })
};

manageEmployees();
