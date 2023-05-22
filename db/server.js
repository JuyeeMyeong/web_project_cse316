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
  const password = req.body.password;
  con.query(
    "SELECT * FROM User WHERE email = ?", //instead of email=?, use first and last name
    [email], // change this also

    function (err, data, field) {
      if (err) throw err;
      if (data.length === 0) {
        res.status(401).json({
          status: "Failed",
          message: "No user found with the provided email.",
        });
        return;
      }

      const id = data[0].id;
      const studentId = data[0].student_id;
      const hashCheck = hashutil(email, password);

      if (hashCheck !== data[0].password) {
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
        id,
        studentId,
      });
    }
  );
});
