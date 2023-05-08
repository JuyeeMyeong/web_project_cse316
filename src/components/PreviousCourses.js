import '../App.css';
import React, { useState, useEffect }  from 'react';
import { NavLink } from 'react-router-dom';

function PreviousCourses() {

    return (
        <div>
            <h2 className='text-center'>CourseMan!</h2>
            <header className="header d-flex justify-content-end">
                <h1>
                    <NavLink to="/" className={({isActive}) => (isActive? "activeNav" : "defaultNav")} style={{ textDecoration: "none" }}>Home</NavLink>
                </h1>
                <h1>
                    <NavLink to="/Instructions" className={({isActive}) => (isActive? "activeNav" : "defaultNav")} style={{ textDecoration: "none" }}>Instructions</NavLink>
                </h1>
                <h1>
                    <NavLink to="/Login" className={({isActive}) => (isActive? "activeNav" : "defaultNav")} style={{ textDecoration: "none" }}>Login</NavLink>
                </h1>
                <h1>
                    <NavLink to="/PreviousCourses" className={({isActive}) => (isActive? "activeNav" : "defaultNav")} style={{ textDecoration: "none" }}>PreviousCourses</NavLink>
                </h1>
                <h1>
                    <NavLink to="/SelectCourses" className={({isActive}) => (isActive? "activeNav" : "defaultNav")} style={{ textDecoration: "none" }}>SelectCourses</NavLink>
                </h1>
            </header>

            <div className='previousTitle text-center'>
                <h1 className='title'>Previous Courses</h1>
            </div>

            <div className='coursePage d-flex flex-column align-items-center'>
                <h3>Student ID: {}</h3>
                <p className='prevSecond'>Check off the courses you have completed with a C or better.</p>
                <div className='courseRow'>
                    <input type="radio" className='prevCourseInput' name="checkCourse" value="CSE101"/>CSE101
                    <input type="radio" className='prevCourseInput' name="checkCourse" value="CSE114"/>CSE114
                    <input type="radio" className='prevCourseInput' name="checkCourse" value="CSE214"/>CSE214
                    <input type="radio" className='prevCourseInput' name="checkCourse" value="CSE215"/>CSE215
                </div>
                <div className='courseRow'>
                    <input type="radio" className='prevCourseInput' name="checkCourse" value="CSE216"/>CSE216
                    <input type="radio" className='prevCourseInput' name="checkCourse" value="CSE220"/>CSE220
                    <input type="radio" className='prevCourseInput' name="checkCourse" value="CSE300"/>CSE300
                    <input type="radio" className='prevCourseInput' name="checkCourse" value="CSE303"/>CSE303
                </div>
                <div className='courseRow'>
                    <input type="radio" className='prevCourseInput' name="checkCourse" value="CSE304"/>CSE304
                    <input type="radio" className='prevCourseInput' name="checkCourse" value="CSE305"/>CSE305
                    <input type="radio" className='prevCourseInput' name="checkCourse" value="CSE306"/>CSE306
                    <input type="radio" className='prevCourseInput' name="checkCourse" value="CSE310"/>CSE310
                </div>
                <div className='courseRow'>
                    <input type="radio" className='prevCourseInput' name="checkCourse" value="CSE316"/>CSE316
                    <input type="radio" className='prevCourseInput' name="checkCourse" value="CSE320"/>CSE320
                    <input type="radio" className='prevCourseInput' name="checkCourse" value="CSE331"/>CSE331
                    <input type="radio" className='prevCourseInput' name="checkCourse" value="CSE416"/>CSE416
                </div>
                <div className='text-center'>
                    <button id="setCourse" type="button" form="">Set Previous Courses</button>
                </div>
            </div>
        </div>
    );
};

export default PreviousCourses;