DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS roles;


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
    REFERENCES departments(id) ON DELETE SET NULL
);
CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    
    role_id INTEGER NOT NULL,
    FOREIGN KEY (role_id),
    REFERENCES roles(id) ON DELETE CASCADE,
    manager_id INTEGER,
    FOREIGN KEY (manager_id) 
    REFERENCES employees(id) ON DELETE SET NULL
);