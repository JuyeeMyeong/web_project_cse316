import "../App.css";
import React from "react";
import Navbar from "./Navbar";
//utils
import cookieUtil from "../utils/cookieUtil";
//hooks
import useFetchCourses from "../hooks/useFetchCourses";
import useUpdateCourses from "../hooks/useUpdateCourses";

function PreviousCourses() {

/*********        cookieUtil/useFetchCourses/useUpdateCourses section            ********/
  const {
    stuId, isLoggedIn, prevCourses, setPrevCourses
  } = cookieUtil ();
  const courseList = useFetchCourses();
  const { onCheckedItem, updateCourses } = useUpdateCourses(stuId, prevCourses, setPrevCourses, isLoggedIn);

/*********        Return            ********/
  return (
    <div>
      <Navbar />

      <div className="previousTitle text-center">
        <h1 className="title">Previous Courses</h1>
      </div>
    {/*   Student ID   */}
      <div className="coursePage d-flex flex-column align-items-center">
        <h3>Student ID: {stuId}</h3>
        <p className="prevSecond text-center">
          Check off the courses you have completed with a C or better.
        </p>

        {/*   Course List from the server 

              Checkboxes inside of flex box div element
              left -> right / flex: wrap
              select checked courses -> automatically accumulated into a list structure
              & put it into user's courses

              later to check against the list of courses wish to register
        */}
        <div className="courseList d-flex justify-content-end flex-wrap">
          {courseList.map((item, index) => {
            return (
              <div
                key={index}
                className="inputContainer d-flex justify-content-end col-md-3"
              >
                <input
                  type="checkbox"
                  id={item}
                  className="prevCourseInput"
                  name="checkCourse"
                  value={item}
                  onChange={(e) => {
                    onCheckedItem(e.target.checked, e.target.id);
                  }}
                />
                <label className="courseLabel">{item}</label>
              </div>
            );
          })}
        </div>


        {/*  set Previous courses button   */}
        <div className="text-center">
          <button id="setCourse" type="button" form="" onClick={updateCourses}>
            Set Previous Courses
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreviousCourses;
