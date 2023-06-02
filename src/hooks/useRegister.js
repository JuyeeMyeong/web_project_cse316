// Juyee Myeong juyee.myeong@stonybrook.edu
// Juyeon Nam juyeon.nam@stonybrook.edu

import { useState, useEffect } from "react";
import {
  getPrerequisites,
  getPrevCourses,
  getCourseName,
  putCurrEnrolled,
} from "../utils/api";
import useCookieUtil from "../hooks/useCookieUtil";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function useRegister(filteredCourses) {
  /************          useNavigate & useCookieUtil & useState section         ************/
  const navigate = useNavigate();
  const { stuId } = useCookieUtil();
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [courseInfo, setCourseInfo] = useState({});

  /************          useEffect         ************/
  useEffect(() => {
    //
    const fetchCourseInfo = async () => {
      const fetchedCourseInfo = await Promise.all(
        //from filteredCourses,
        filteredCourses.map(async (course) => {
          //get Course Name from server based on course (course_id)
          const data = await getCourseName(course);

          //get name & leftSeat from Courses table
          return [course, { name: data.course_name, leftSeat: data.leftSeat }];
        })
      );
      setCourseInfo(Object.fromEntries(fetchedCourseInfo));
    };
    fetchCourseInfo();
  }, [filteredCourses]);

  /************          functions         ************/
  //make a selected courses list from checkboxes using courseName
  const handleCheckboxChange = (courseName) => {
    setSelectedCourses((prevSelectedCourses) => {
      if (prevSelectedCourses.includes(courseName)) {
        return prevSelectedCourses.filter((course) => course !== courseName);
      } else {
        return [...prevSelectedCourses, courseName];
      }
    });
  };

  const handleRegisterClick = async () => {
    //check not available courses to reigster (errors)
    const errors = [];
    //check available courses to register (register)
    const register = [];

    //if there is no selectedCourses from checkboxes, then just return
    if (!selectedCourses || selectedCourses.length === 0) {
      alert("No courses selected.");
      return;
    }

    for (let course of selectedCourses) {
      //from the server,
      //get prerequisite based on course_id & previousCourses selected from previousCourses page
      const prerequisites = await getPrerequisites(course);
      const prevCourses = await getPrevCourses(stuId);

      //If the course not available based on prerequisite push to errors list
      const hasPrerequisites = prerequisites.every((prerequisite) =>
        prevCourses.find((course) => course === prerequisite)
      );

      if (hasPrerequisites === false) {
        errors.push(`${course} requires ${prerequisites}`);
        continue;
      }

      //If the checked courses are taken, then push to errors list
      if (prevCourses.find((prev) => prev === course)) {
        errors.push(`You have already taken ${course}.`);
        continue;
      }
      register.push(course);
    }

    //alert not available courses
    if (errors.length > 0) {
      alert(errors.join("\n"));
    }

    //available courses to register are put to currEnrolledCourse in User table
    if (register.length > 0) {
      const response = await putCurrEnrolled(stuId, register);
      if (response === 201) {
        //update the leftSeat values in the Courses table
        await axios.get("http://localhost:4000/updateLeftSeat");
        alert("Courses Selected: \n" + register.join(", "));
        navigate("/"); //go back to home
      }
    }
  };

  return {
    selectedCourses,
    courseInfo,
    handleCheckboxChange,
    handleRegisterClick,
  };
}
