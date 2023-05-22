import React, { useState } from 'react';

function Search({ prevCourses, handleRegistration, name }) {
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

  const handleRegisterClick = () => {
    const errors = [];

    selectedCourses.forEach((course) => {
      const prerequisites = getPrerequisites(course);
      const hasPrerequisites = prerequisites.every((prerequisite) =>
        selectedCourses.includes(prerequisite)
      );

      if (!hasPrerequisites) {
        errors.push(
          `You don't have the necessary prerequisites for ${course}.`
        );
      }

      if (prevCourses.find((prevCourse) => prevCourse.name === course)) {
        errors.push(`You have already taken ${course}.`);
      }
    });

    if (errors.length > 0) {
      alert(errors.join('\n'));
    } else {
      alert('Courses registered successfully!');
      handleRegistration(selectedCourses);
    }
  };

  const getPrerequisites = (courseName) => {
    switch (courseName) {
      case 'CSE214':
        return ['CSE114'];
      case 'CSE216':
        return ['CSE114', 'CSE214', 'CSE215'];
      default:
        return [];
    }
  };


  return (
    <div className="courseContainer">
      <div className="listBox">
        <h4 id="searchHdr">
          {name}, here are the courses you may select.
        </h4>
        <div className="d-flex flex-column">
          {prevCourses.map((course, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={`course-${index}`}
                checked={selectedCourses.includes(course.name)}
                onChange={() => handleCheckboxChange(course.name)}
              />
              <label
                htmlFor={`course-${index}`}
                style={{ fontStyle: 'italic', fontWeight: '600' }}
              >
                {course.name}
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