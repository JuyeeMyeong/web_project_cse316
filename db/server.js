import express from "express";
import path from "path";
import cors from "cors";

import con from "./dbConfig.js";

import hashutil from "./../src/utils/hashutil.mjs";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json());
app.use(cors());

// use port 4000 for the server
const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, "..", "public")));

app.listen(PORT, () => {
  console.log(`Check out the app at http://localhost:${PORT}`);
});

// GET: get user info by its student id
app.get("/user/:student_id", function (req, res) {
  const student_id = Number(req.params.student_id);

  if (isNaN(student_id)) {
    res.status(400).json({ error: 'Invalid student id' });
    return;
  }

  con.query(
    "SELECT * FROM User WHERE student_id=?",
    [student_id],
    function (err, data, fields) {
      if (err) throw err;
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data[0],
      });
    }
  );
});

// GET: get prerequistie course name by course id
app.get("/prerequisite", function (req, res) {
  const { courseId } = req.query;
  con.query(
    "SELECT prerequisite FROM Prerequisites WHERE course_id=?",
    [courseId],
    function (err, data, fields) {
      if (err) throw err;
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data[0]
      });
    }
  );
});

// GET: get course id
app.get("/course", function (req, res) {
  con.query("SELECT course_id FROM Courses", function (err, data, fields) {
    if (err) throw err;
    res.status(200).json({
      status: "success",
      length: data?.length,
      data: data,
    });
  });
});

// Login by student id and password(using hashing)
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
      // const hashCheck = hashutil(
      //   data[0].first_name,
      //   data[0].last_name,
      //   password
      // );

      // if (hashCheck !== data[0].password) {
      //   res
      //     .status(402)
      //     .json({ status: "Failed", message: "Invalid password." });
      //   return;
      // }

      res.status(201).json({
        status: "Success",
        message: "Successfully logged in.",
        firstName: data[0].first_name,
        lastName: data[0].last_name,
        student_id: student_id,
        id,
      });
    }
  );
});

// Middleware checks if the user is logged in
const checkLoggedIn = (req, res, next) => {
  console.log("Session:", req.session);
  if (!req.session.user) {
    console.log("User not logged in");

    return;
  }
  next();
};

// Check if the user is logged in
app.get("/api/checkLoggedInStatus", checkLoggedIn, (req, res) => {
  console.log("User:", req.session.user);
  if (req.session.user) {
    const { email } = req.session.user;
    res.status(200).json({ email });
  } else {
    res
      .status(401)
      .json({ status: "Failed", message: "Unauthorized. Please log in." });
  }
});

//PUT: update student courses by their student id
app.put("/user/:id", function (req, res) {
  const userId = req.params.id;
  const { courses } = req.body;

  con.query(
    "UPDATE User SET courses = ? WHERE student_id = ?",
    [JSON.stringify(courses), userId],
    function (err, result) {
      if (err) {
        console.error("Failed to update courses in MySQL:", err);
        res.status(500).json({ error: "Failed to update courses" });
      } else {
        if (result.affectedRows > 0) {
          res.status(200).json({ message: "Courses updated successfully" });
        } else {
          res.status(404).json({ error: "User not found" });
        }
      }
    }
  );
});
