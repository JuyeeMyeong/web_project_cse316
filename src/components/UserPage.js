//Juyee Myeong juyee.myeong@stonybrook.edu
//Juyeon Nam juyeon.nam@stonybrook.edu
import "../App.css";
import React, { useEffect, useRef } from "react";

function UserPage({ stuId, onLogout }) {
  const squareRef = useRef(null);

  useEffect(() => {
    function handleMouseMove(e) {
      if (squareRef.current) {
        squareRef.current.style.transform =
          "rotateY(" + e.pageX / 2 + "deg) rotateX(" + e.pageY / 2 + "deg)";
      }
    }

    function handleWheel(e) {
      if (squareRef.current) {
        if (e.deltaY > 0) {
          squareRef.current.style.width =
            squareRef.current.clientWidth - 50 + "px";
          squareRef.current.style.height =
            squareRef.current.clientHeight + 50 + "px";
        } else {
          squareRef.current.style.width =
            squareRef.current.clientWidth + 50 + "px";
          squareRef.current.style.height =
            squareRef.current.clientHeight - 50 + "px";
        }
      }
    }

    document.body.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("wheel", handleWheel);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div id="userpage">
      <div className="d-flex justify-content-between flex-wrap">
        <div className="nameSection">
          <h2>Student ID: {stuId}</h2>
          <p> 
            If you want to logout, click, 
            <button id="Logoutbtn" type="button" form="" onClick={onLogout}>
                Logout
            </button>
          </p>
        </div>
        <div className="userProfileLine d-flex align-items-center justify-content-center">
        <div id="square" ref={squareRef}>
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="back"></div>
          <div className="front"></div>
          <div className="left"></div>
          <div className="right"></div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
