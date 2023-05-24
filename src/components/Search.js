import React, { useState } from "react";
import { getPrevCourses, getPrerequisites } from "../utils/api";
import useCookieUtil from "../hooks/useCookieUtil";

function Search({ filteredCourses, name }) {
  const { stuId } = useCookieUtil();

  const [selectedCourses, setSelectedCourses] = useState([]);
  const [registerable, setRegisterable] = useState([]);

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
    let register = [];

    for (let course of selectedCourses) {
      const prerequisites = await getPrerequisites(course);
      const prevCourses = await getPrevCourses(stuId);

      const hasPrerequisites = prerequisites.every((prerequisite) =>
        prevCourses.find((course) => course === prerequisite)
      );

      if (hasPrerequisites === false) {
        errors.push(`You don't have the necessary prerequisites for ${course}.`);
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
      setRegisterable(register);
      console.log("register this: ", register);
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
