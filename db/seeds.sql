INSERT INTO departments (dept_name)
VALUES
<<<<<<< HEAD
('')
=======
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO roles(role_name, salary, dept_id)
VALUES
('Sales Lead', '100000', 1),
('Salesperson', '80000', 1),
('Lead Engineer', '150000', 2),
('Software Engineer', '120000', 2),
('Account Manager', '160000', 3),
('Accountant', '125000', 3),
('Legal Team Lead', '250000', 4),
('Lawyer', '190000', 4);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES
('John', 'Doe', 1, null),
('Mike', 'Chan', 1, 'John Doe'),
('Ashley', 'Rodriguez', 2, null ),
('Kevin', 'Tupik', 2, 'Ashley Rodriguez'),
('Kunal', 'Signh', 3, null),
('Malia', 'Brown', 3, 'Kunal Signh'),
('Sarah', 'Lourd', 4, null),
('Tom', 'Allen', 4, 'Sarah Lourd');



>>>>>>> feature/server
