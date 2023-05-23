const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");
const path = require("path");
const dbFunc = require("./dbConfig");
const con = dbFunc.con;

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, "..", "public")));

app.listen(PORT, () => {
  console.log(`Check out the app at http://localhost:${PORT}`);
});

app.get("/user", function (req, res) {
  const { stuId } = req.query;
  con.query(
    "SELECT * FROM User WHERE stuId=?",
    [stuId],
    function (err, data, fields) {
      if (err) throw err;
      res.status(200).json({
        status: "success",
        length: data?.length,
        userId: data[0].stuId,
      });
    }
  );
});

// Login
app.post("/login", function (req, res) {
  const student_id = req.body.stuId;
  const password = req.body.password;
  con.query(
    "SELECT * FROM User WHERE student_id = ?",
    [student_id],
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
        // message: "Successfully logged in.",
        // firstName: first_name,
        // lastName: last_name,
        student_id: student_id,
        id,
      });
    }
  );
});

app.put("/user/:id", function (req, res) {
  if (!req.params.id) {
    res.status(404).json({});
  }
  con.query(
    "INSERT INTO User (id, courses) VALUES(?) ON DUPLICATE KEY UPDATE courses = ?",
    [[Number(req.params.id), req.body.courses], req.body.courses],
    function (err) {
      if (err) throw err;
      res.status(201).json({
        courses: req.body.courses,
        student_id: data[0].student_id,
        first_name: data[0].first_name,
        last_name: data[0].last_name,
      });
    }
  );
});
