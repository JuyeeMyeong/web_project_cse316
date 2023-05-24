import React, { useState } from "react";
import axios from "axios";

function Search({ filteredCourses, name }) {
  
  const [prerequisite, setPrerequisite] = useState({});
  async function getPrerequisites(courseId) {
    try {
      const response = await axios.get(`http://localhost:4000/prerequisite?courseId=${courseId}`);
      if (response.data && response.data.data) {
        return JSON.parse(response.data.data.prerequisite);
      }
    } catch (error) {
      console.log(error);
    }
    return [];
  };


  const [selectedCourses, setSelectedCourses] = useState([]);

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
    const errors = [];

    for (let course of selectedCourses) {
      const prerequisites = await getPrerequisites(course);

      const hasPrerequisites = prerequisites.every((prerequisite) =>
        filteredCourses.find((course) => course.name === prerequisite)
      );

      if (!hasPrerequisites) {
        errors.push(
          `You don't have the necessary prerequisites for ${course}.`
        );
      }

      if (filteredCourses.find((prevCourse) => prevCourse.name === course)) {
        errors.push(`You have already taken ${course}.`);
      }
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      alert("Courses registered successfully!");
      // handleRegistration(selectedCourses);
    }
  };

  return (
    <div className="courseContainer">
      <div className="listBox">
        <h4 id="searchHdr">{name}, here are the courses you may select.</h4>
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
                {course}
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
