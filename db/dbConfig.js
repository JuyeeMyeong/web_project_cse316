require("dotenv").config();

var mysql = require("mysql2");
var db = "courseman";

console.log("hi! im sql");

var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL server");
});

//Create Database
con.query("CREATE DATABASE IF NOT EXISTS ??", db, function (err, result) {
  if (err) throw err;
  console.log("Database created");
  con.changeUser(
    {
      database: db,
    },
    function (err) {
      if (err) {
        console.log("error in changing database", err);
        return;
      }
      // Create User Table
      con.query(
        "CREATE TABLE IF NOT EXISTS User ( id INT PRIMARY KEY AUTO_INCREMENT, student_id VARCHAR(50) NOT NULL UNIQUE, first_name VARCHAR(100), last_name VARCHAR(100), password VARCHAR(1024), courses VARCHAR(255))",
        function (err) {
          if (err) throw err;
          console.log("User Table created");
        }
      );
      con.query(
        "CREATE TABLE IF NOT EXISTS Courses ( id INT PRIMARY KEY AUTO_INCREMENT, course_number VARCHAR(255), course_name VARCHAR(255))",
        function (err) {
          if (err) throw err;
          console.log("Courses Table created");
        }
      );
      con.query(
        "CREATE TABLE IF NOT EXISTS Prerequisites (id INT PRIMARY KEY AUTO_INCREMENT, course_number INT, prerequisite VARCHAR(255))",
        function (err) {
          if (err) throw err;
          console.log("Prerequesite Table created");
        }
      );
    }
  );
});

module.exports = {
  con,
};
