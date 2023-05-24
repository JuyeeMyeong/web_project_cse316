import { useCookies } from 'react-cookie';
import { useState, useEffect } from 'react';
import axios from 'axios';

const useCookieUtil = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [stuId, setStuId] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(['isLoggedIn', 'stuId']);
    const [prevCourses, setPrevCourses] = useState([])

    useEffect(() => {
      const isLoggedInCookie = cookies.isLoggedIn;
      const stuIdCookie = cookies.stuId;
    
      if (isLoggedInCookie && stuIdCookie) {
        setIsLoggedIn(true);
        setStuId(stuIdCookie);

        const requestData = {}; 
        axios.get(`http://localhost:4000/user/${stuIdCookie}`, requestData)
        .then((response) => {
          if (response.data.courses.length !== 0) {
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

    const handleLogout = () => {
      removeCookie('isLoggedIn');
      removeCookie('stuId');
      setIsLoggedIn(false);
      setStuId('');
    };

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
