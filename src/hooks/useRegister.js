import { useState, useEffect } from "react";
import { getPrerequisites, getPrevCourses, getCourseName, putCourses, putCurrEnrolled, registerAgain, getEnrolled } from "../utils/api";
import useCookieUtil from "../hooks/useCookieUtil";
import { useNavigate } from "react-router-dom";

export function useRegister(filteredCourses) {
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
      }

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
        register.map((course) => putCourses(course));
        alert('Courses Selected: \n' + register.join(', '));
        navigate('/');
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
