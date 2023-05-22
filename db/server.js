const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const dbFunc = require("./dbConfig");
const con = dbFunc.con;

const app = express();

app.use(express.json());
var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, "..", "public")));

app.listen(PORT, () => {
  console.log(`Check out the app at http://localhost:${PORT}`);
});

// Login
app.post("/login", function (req, res) {
  // get first and last name from body
  const student_id = req.body.stuId;
  const password = req.body.password;
  con.query(
    "SELECT * FROM User WHERE student_id = ?", //instead of email=?, use first and last name
    [student_id], // change this also

    function (err, data, field) {
      if (err) throw err;
      if (data.length === 0) {
        res.status(401).json({
          status: "Failed",
          message: "No user found with the provided student_id.",
        });
        return;
      }

      const id = data[0].id;

      if (password !== data[0].password) {
        res
          .status(402)
          .json({ status: "Failed", message: "Invalid password." });
        return;
      }

      res.status(201).json({
        status: "Success",
        message: "Successfully logged in.",
        firstName: first_name,
        lastName: last_name,
        student_id: student_id,
        id,
      });
    }
  );
});
