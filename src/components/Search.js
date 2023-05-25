import React, { useState, useEffect } from "react";
import { getPrevCourses, getPrerequisites, getCourseName, putCourses, putCurrEnrolled, registerAgain, getEnrolled } from "../utils/api";
import useCookieUtil from "../hooks/useCookieUtil";
import { useNavigate } from "react-router-dom";

function Search({ filteredCourses, name }) {
  const navigate = useNavigate();
  const { stuId } = useCookieUtil();

  const [selectedCourses, setSelectedCourses] = useState([]);
  const [courseInfo, setCourseInfo] = useState({});

  useEffect(() => {
    const fetchCourseInfo = async () => {
      const fetchedCourseInfo = await Promise.all(
        filteredCourses.map(async (course) => {
          const data = await getCourseName(course);

          return [course, { name: data.course_name, leftSeat: data.leftSeat }];
        })
      );
      setCourseInfo(Object.fromEntries(fetchedCourseInfo));
    };

    fetchCourseInfo();
  }, [filteredCourses]);


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
    const enrolled = await getEnrolled(stuId);
    if (enrolled.length > 0) {
      console.log("enrolled", enrolled);
      await registerAgain(stuId);
    }
    const errors = [];
    const register = [];

    if (!selectedCourses || selectedCourses.length === 0) {
      alert("No courses selected.");
      return;
    }

    for (let course of selectedCourses) {
      const prerequisites = await getPrerequisites(course);
      const prevCourses = await getPrevCourses(stuId);

      const hasPrerequisites = prerequisites.every((prerequisite) =>
        prevCourses.find((course) => course === prerequisite)
      );

      if (hasPrerequisites === false) {
        errors.push(`${course} requires ${prerequisites}`);
        continue;
      };

      if (prevCourses.find((prev) => prev === course)) {
        errors.push(`You have already taken ${course}.`);
        continue;
      }
      register.push(course);
    }
    if (errors.length > 0) {
      alert(errors.join("\n"));
    }
    if (register.length > 0) {
      const response = await putCurrEnrolled(stuId, register);
      if (response === 201) {
        // Registration was successful
        register.map((course) => putCourses(course));
        alert('Courses Selected: \n' + register.join(', '));
        navigate('/');
      }
    }
  };

  return (
    <div className="courseContainer">
      <div className="listBox">
        <h4 id="searchHdr">{name} here are the courses you may select.</h4>
        <div className="d-flex flex-column">
          {filteredCourses.map((course, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={`course-${index}`}
                checked={selectedCourses.includes(course)}
                onChange={() => handleCheckboxChange(course)}
              />
              <label
                htmlFor={`course-${index}`}
                style={{ fontStyle: "italic", fontWeight: "600" }}
              >
                {course} {courseInfo[course]?.name} - {courseInfo[course]?.leftSeat} of 40
              </label>
            </div>
          ))}
        </div>
        <button className="resgisterBtn" onClick={handleRegisterClick}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Search;
