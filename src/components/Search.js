import React from "react";
import { useRegister } from "../hooks/useRegister";

function Search({ filteredCourses, name }) {
  const {
    selectedCourses,
    courseInfo,
    handleCheckboxChange,
    handleRegisterClick,
  } = useRegister(filteredCourses);

  return (
    <div className="courseContainer">
      <div className="listBox">
        <h4 id="searchHdr">{name} here are the courses you may select.</h4>
        <div className="d-flex flex-column">
          
          {/* filtered Courses are shown here */}
          {filteredCourses.map((course, index) => (
            <div key={index}>
              {/* checkbox & checkbox change (make the checked items into list) */}
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
                {course} {courseInfo[course]?.name} -{" "}
                {courseInfo[course]?.leftSeat} of 40
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
