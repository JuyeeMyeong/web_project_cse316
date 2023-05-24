import { useState, useEffect } from "react";
import axios from 'axios';

export default function useFetchCourses() {
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

  return courseList;
}
