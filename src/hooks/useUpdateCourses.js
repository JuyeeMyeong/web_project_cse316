import { useCallback } from "react";
import axios from 'axios';

export default function useUpdateCourses(stuId, prevCourses, setPrevCourses, isLoggedIn) {

// make previous Courses array based on checked items
  const onCheckedItem = useCallback(
    (checked, item) => {
      if (checked) { //if it's checked then, put it
        setPrevCourses((prev) => [...prev, item]);
      } else if (!checked) {
        setPrevCourses(prevCourses.filter((el) => el !== item));
      }
    },
    [prevCourses, setPrevCourses]
  );

  const updateCourses = () => {
    if(!isLoggedIn) { //check if the user's logged in
      alert("Please Login first...")
      return;
    } 
    //if logged in...
    // the user has student_id / prevCourses -> Not, send an err message
    if (stuId === undefined || prevCourses === undefined || prevCourses.length === 0 ) {
      console.error('Failed to update courses: stuId or prevCourses is undefined');
      return;
    }
    const requestData = { courses: prevCourses };
    //update new Courses to verified users 
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
