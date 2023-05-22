require("dotenv").config();

var mysql = require("mysql");
var db = "courseman";

console.log("hi! im sql");

var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
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
        "CREATE TABLE IF NOT EXISTS User ( id INT AUTO_INCREMENT PRIMARY KEY, student_id INT UNIQUE, first_name VARCHAR(100), last_name VARCHAR(100), password VARCHAR(256))",
        function (err) {
          if (err) throw err;
          console.log("User Table created");
        }
      );
    }
  );
});

module.exports = {
  con,
};
