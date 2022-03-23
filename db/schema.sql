CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR (30) NOT NULL
);
CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR (30) NOT NULL,
    salary DECIMAL,
    dept_id INTEGER,
    FOREIGN KEY (dept_id) 
    REFERENCES departments(id)
);
CREATE TABLE employees (
id INTEGER AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR (30) NOT NULL,
last_name VARCHAR (30) NOT NULL,
role_id INTEGER,
FOREIGN KEY (role_id)
REFERENCES roles(id),
manager_id INTEGER,
FOREIGN KEY (manager_id)
REFERENCES employees(id)
);
