import { useState, useEffect } from "react";
import axios from 'axios';

export default function useFetchCourses() {

/***          GET course list from Course table & make courseList array with given course_id      ****/

  const [courseList, setCourseList] = useState([]); //useState courseList

  useEffect(() => {
    axios.get("http://localhost:4000/course") //app.get ("/course")
      .then((response) => {
        if (response.data.status === "success") {
          const courseIds = response.data.data.map((course) => course.course_id);
          setCourseList(courseIds); //setCourseList based on course_ids
        }
      })
      .catch((error) => { //failed to fetch courses
        console.error('Failed to fetch courses:', error);
      });
  }, []);s

  return courseList;
}
