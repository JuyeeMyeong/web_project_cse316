import "../App.css";
import React, { useState, useEffect, useCallback } from "react";
import Navbar from "./Navbar";
import axios from 'axios';
import { useCookies } from 'react-cookie';

function PreviousCourses() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [stuId, setStuId] = useState('');
  const [cookies] = useCookies(['isLoggedIn', 'stuId']);

  useEffect(() => {
    const isLoggedInCookie = cookies.isLoggedIn;
    const stuIdCookie = cookies.stuId;
    
    if (isLoggedInCookie && stuIdCookie) {
      setIsLoggedIn(true);
      setStuId(stuIdCookie);
    } else {
      setIsLoggedIn(false);
      setStuId('');
    }
  }, [cookies]);

  const courseList = [
    { name: "CSE101" },
    { name: "CSE114" },
    { name: "CSE214" },
    { name: "CSE215" },
    { name: "CSE216" },
    { name: "CSE220" },
    { name: "CSE300" },
    { name: "CSE303" },
    { name: "CSE304" },
    { name: "CSE305" },
    { name: "CSE306" },
    { name: "CSE310" },
    { name: "CSE316" },
    { name: "CSE320" },
    { name: "CSE331" },
    { name: "CSE416" },
  ];

  const [checkedList, setCheckedList] = useState([]);

  const onCheckedItem = useCallback(
    (checked, item) => {
      if (checked) {
        setCheckedList((prev) => [...prev, item]);
      } else if (!checked) {
        setCheckedList(checkedList.filter((el) => el !== item));
      }
    },
    [checkedList, setCheckedList]
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
  
    const requestData = { courses: checkedList };
  
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
                  id={item.name}
                  className="prevCourseInput"
                  name="checkCourse"
                  value={item.name}
                  onChange={(e) => {
                    onCheckedItem(e.target.checked, e.target.id);
                  }}
                />
                <label className="courseLabel">{item.name}</label>
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
