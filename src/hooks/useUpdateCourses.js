import { useCallback } from "react";
import axios from 'axios';

export default function useUpdateCourses(stuId, prevCourses, setPrevCourses, isLoggedIn) {
  const onCheckedItem = useCallback(
    (checked, item) => {
      if (checked) {
        setPrevCourses((prev) => [...prev, item]);
      } else if (!checked) {
        setPrevCourses(prevCourses.filter((el) => el !== item));
      }
    },
    [prevCourses, setPrevCourses]
  );

  const updateCourses = () => {
    if(!isLoggedIn) {
      alert("Please Login first...")
      return;
    } 
    if (stuId === undefined || prevCourses === undefined ) {
      console.error('Failed to update courses: stuId or prevCourses is undefined');
      return;
    }

    const requestData = { courses: prevCourses };

    axios.put(`http://localhost:4000/user/${stuId}`, requestData)
      .then((response) => {
        alert("Courses Updated! Please go to SelectCourses")
      })
      .catch((error) => {
        console.error('Failed to update courses:', error);
      });
  };

  return { onCheckedItem, updateCourses };
}
