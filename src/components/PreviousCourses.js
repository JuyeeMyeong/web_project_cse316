import "../App.css";
import React, { useState, useEffect, useCallback } from "react";
import Navbar from "./Navbar";
import axios from 'axios';
//utils
import cookieUtil from "../utils/cookieUtil";

function PreviousCourses() {
  const {
    stuId, setStuId, isLoggedIn, setIsLoggedIn, cookies, prevCourses, setPrevCourses
  } = cookieUtil ();

  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/course")
      .then((response) => {
        if (response.data.status === "success") {
          const courseIds = response.data.data.map((course) => course.course_id);
          setCourseList(courseIds);
        }
      })
      .catch((error) => {
        console.error('Failed to fetch courses:', error);
      });
  }, []);

  const onCheckedItem = useCallback(
    (checked, item) => {
      if (checked) {
        setPrevCourses((prev) => [...prev, item]);
      } else if (!checked) {
        setPrevCourses(prevCourses.filter((el) => el !== item));
      }
    },
    [prevCourses, setPrevCourses]
  );

  const updateCourses = () => {
    if(!isLoggedIn) {
        alert("Please Login first...")
        return;
    } 
    if (stuId === undefined) {
      console.error('Failed to update courses: stuId is undefined');
      return;
    }
  
    if (checkedList === undefined ) {
      console.error('Failed to update courses: checkedList is undefined');
      return;
    }
  
    const requestData = { courses: prevCourses };
  
    axios.put(`http://localhost:4000/user/${stuId}`, requestData)
      .then((response) => {
        alert("Courses Updated! Please go to SelectCourses")
      })
      .catch((error) => {
        console.error('Failed to update courses:', error);
      });
  };

  return (
    <div>
      <Navbar />

      <div className="previousTitle text-center">
        <h1 className="title">Previous Courses</h1>
      </div>

      <div className="coursePage d-flex flex-column align-items-center">
        <h3>Student ID: {stuId}</h3>
        <p className="prevSecond text-center">
          Check off the courses you have completed with a C or better.
        </p>
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
