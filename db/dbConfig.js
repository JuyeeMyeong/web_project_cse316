import dotenv from "dotenv";
import mysql from "mysql2";

var db = "courseman";

console.log("hi! im sql");

dotenv.config();

// connect with mysql
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
      // Create User Table: User (column: id, student_id, first_name, last_name, password, courses)
      con.query(
        "CREATE TABLE IF NOT EXISTS User ( id INT PRIMARY KEY AUTO_INCREMENT, student_id VARCHAR(50) NOT NULL UNIQUE, first_name VARCHAR(100), last_name VARCHAR(100), password VARCHAR(1024), courses JSON)",
        function (err) {
          if (err) throw err;
          console.log("User Table created");
        }
      );
      // Create User Table: Courses (column: id, course_id, course_name)
      con.query(
        "CREATE TABLE IF NOT EXISTS Courses ( id INT PRIMARY KEY AUTO_INCREMENT, course_id VARCHAR(255), course_name VARCHAR(255))",
        function (err) {
          if (err) throw err;
          console.log("Courses Table created");
        }
      );
      // Create User Table: Prerequisites (column: id, course_id, prerequisite)
      con.query(
        "CREATE TABLE IF NOT EXISTS Prerequisites (id INT PRIMARY KEY AUTO_INCREMENT, course_id VARCHAR(255), prerequisite JSON)",
        function (err) {
          if (err) throw err;
          console.log("Prerequesite Table created");
        }
      );
    }
  );
});

export default con;
