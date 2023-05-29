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
          <button id="Logoutbtn" type="button" form="" onClick={onLogout}>
                Logout
          </button>
        </div>
        <div className="userProfileLine"></div>
        <div id="square" ref={squareRef}>
          <div class="top"></div>
          <div class="bottom"></div>
          <div class="back"></div>
          <div class="front"></div>
          <div class="left"></div>
          <div class="right"></div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
