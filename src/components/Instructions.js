// Juyee Myeong juyee.myeong@stonybrook.edu
// Juyeon Nam juyeon.nam@stonybrook.edu

import "../App.css";
import React from "react";
import Navbar from "./Navbar";

function Instructions() {
  return (
    <div>
      <Navbar header={"CourseMan!"} navColor={"blurred"} textColor={"white"} />
      {/**    4 paragraphs with a lightblue bg
       *      2 pixel solid grey border / font-size 24pixels
       *      font Helvetica     **/}
      <div className="instruction">
        <p className="textShown text-center">
          First, proceed to 'Login' page and enter your 9 digit student id and
          your password.{" "}
          <ex>
            {" "}
            ID: 567891234 password: abc123 (Every student's password is 'abc123'
            in this project)
          </ex>{" "}
          Click the 'Login' button to verify your password and save your student
          id for the session.
        </p>
        <p className="textShown text-center">
          Next, proceed to 'Enter Previous Courses'. Click on each course you
          have completed with a C or better grade. Click Set Previous Courses.
        </p>
        <p className="textShown text-center">
          Return to the home page and click 'Select Courses'. Enter your name
          and any search term to restrict course selections with the provided
          string in the course name. Please be careful when entering your name.
          You should write exactly the same as your register name (Especially,
          name is case-sensitive & put both first and last name in this format:
          'firstName lastName'). This can be left blank to see all CSE courses.
        </p>
        <p className="textShown text-center">
          Click the checkbox by each course for which you would like to
          register. Click the Register button to register. If you are missing
          prerequisites, you must go back and select a different set of courses.
          In this case, click 'ok' on the alert box and try again.On success, an
          alert box will indicate the coures for which you have registered.
        </p>
      </div>
    </div>
  );
}

export default Instructions;
