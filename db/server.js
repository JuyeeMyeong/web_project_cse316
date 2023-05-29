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
    res.status(400).json({ error: "Invalid student id" });
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
        data: data[0],
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

// GET: get course id
app.get("/getCourseName", function (req, res) {
  const { courseId } = req.query;
  con.query(
    "SELECT * FROM Courses where course_id=?",
    [courseId],
    function (err, data, fields) {
      if (err) throw err;
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    }
  );
});

// Login by student id and password(using hashing)
app.post("/userCheck", function (req, res) {
  const stuId = req.body.stuId;
  const name = req.body.name;
  const first_name = name.split(" ")[0];
  const last_name = name.split(" ")[1];

  con.query(
    "SELECT * FROM User WHERE student_id = ?",
    [stuId],
    function (err, data, field) {
      if (err) throw err;
      if (data.length === 0) {
        res.status(400).json({
          status: "Failed",
        });
        return;
      }
      if (
        data[0].first_name === first_name &&
        data[0].last_name === last_name
      ) {
        res.status(201).json({
          status: "Success",
          data: data,
        });
      } else {
        res.status(401).json({
          status: "Failed",
          message: "Student Id and name do not match",
        });
      }
    }
  );
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
      const hashCheck = hashutil(
        data[0].first_name,
        data[0].last_name,
        password
      );
      console.log(hashCheck);
      console.log(data[0].password);
      if (hashCheck !== data[0].password) {
        res
          .status(402)
          .json({ status: "Failed", message: "Invalid password." });
        return;
      }

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
    res.status(201).json({ email });
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
          res.status(201).json({ message: "Courses updated successfully" });
        } else {
          res.status(404).json({ error: "User not found" });
        }
      }
    }
  );
});

//get currEnrolledCourse based on student_id
app.put("/currEnrolled", function (req, res) {
  const stuId = req.body.stuId;
  const currEnrolledCourse = req.body.currEnrolledCourse;
  con.query(
    "UPDATE User SET currEnrolledCourse = ? WHERE student_id=?",
    [JSON.stringify(currEnrolledCourse), stuId],
    function (err, result) {
      if (err) throw err;
      res.status(201).json({
        status: "Success",
        data: result,
      });
    }
  );
});

//update leftSeat # of each course after updating currEnrolledCourse of User
app.get("/updateLeftSeat", function (req, res) {
  //default value 40
  con.query("UPDATE Courses SET leftSeat = 40", function (err, result) {
    if (err) {
      console.error("Failed to update leftSeat:", err);
      res.status(500).json({
        status: "Error",
        message: "Failed to update leftSeat",
      });
      return;
    }

    //get all currEnrolledCourse from User table
    con.query("SELECT currEnrolledCourse FROM User", function (err, users) {
      if (err) {
        console.error("Failed to fetch currEnrolledCourse:", err);
        res.status(500).json({
          status: "Error",
          message: "Failed to fetch currEnrolledCourse",
        });
        return;
      }
      //for each course in currEnrolledCourse
      users.forEach((user) => {
        try {
          const currEnrolledCourse = user.currEnrolledCourse;

          //if there is no currEnrolled Course, just return
          if (!currEnrolledCourse || currEnrolledCourse.length === 0) {
            return;
          }
          //or UPDATE the Courses table (leftSeat = leftSeat - 1) based on course_id
          currEnrolledCourse.forEach((courseId) => {
            con.query(
              "UPDATE Courses SET leftSeat = leftSeat - 1 WHERE course_id = ?",
              [courseId],
              function (err, result) {
                if (err) {
                  console.error("Failed to update leftSeat:", courseId);
                }
              }
            );
          }); // error handling
        } catch (error) {
          console.error(
            "Something went wrong while getting currEnrolledCourse for user:",
            error
          );
        }
      });

      console.log("leftSeat values updated");
      //success status
      res.status(201).json({
        status: "Success",
        message: "LeftSeat values updated successfully.",
      });
    });
  });
});
