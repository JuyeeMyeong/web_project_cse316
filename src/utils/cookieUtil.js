import { useCookies } from 'react-cookie';
import { useState, useEffect } from 'react';
import axios from 'axios';

const useCookieUtil = () => {

/*********           useState & useCookies section             *********/
    const [isLoggedIn, setIsLoggedIn] = useState(false); //login status
    const [stuId, setStuId] = useState(''); //student_id 
    const [cookies, setCookie, removeCookie] = useCookies(['isLoggedIn', 'stuId']); //useCookies
    const [prevCourses, setPrevCourses] = useState([]); //previous courses selected


/*********           useEffect for check cookies (student_id & isLoggedIn)             *********/
    useEffect(() => {
      const isLoggedInCookie = cookies.isLoggedIn;
      const student_id = cookies.stuId;
    
      if (isLoggedInCookie && student_id) {
        setIsLoggedIn(true);
        setStuId(student_id);

        axios.get(`http://localhost:4000/user/${student_id}`)
        .then((response) => {
          if (response.data.courses && response.data.courses.length !== 0) {
            setPrevCourses(response.data.courses);
          }
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
      } else {
        setIsLoggedIn(false);
        setStuId('');
      }
    }, [cookies, setPrevCourses]);

/*********           handleLogout (for logout button) removeCookies            *********/
    const handleLogout = () => {
      removeCookie('isLoggedIn');
      removeCookie('stuId');
      setIsLoggedIn(false);
      setStuId('');
    };

/*********           handleLogin (for login button) setCookies & set student_id & isLoggedin status            *********/
    const handleLogin = async (stuId, password) => {
      try {
        const response = await axios.post("http://localhost:4000/login", {
          stuId: stuId,
          password: password,
        });
    
        const data = response.data;
    
        if (data.status === "Success") {
          setStuId(stuId);
          setCookie('isLoggedIn', true, { path: '/' });
          setCookie('stuId', stuId, { path: '/' });
          setIsLoggedIn(true);
          return true; // Login Success!
        } else {
          throw new Error("Login failed");
        }
      } catch (error) {
        console.log(error);
        return false; // Login Failed!
      }
    };
  

    return { stuId, setStuId, isLoggedIn, setIsLoggedIn, prevCourses, setPrevCourses, cookies, handleLogin, handleLogout };
}

export default useCookieUtil;
