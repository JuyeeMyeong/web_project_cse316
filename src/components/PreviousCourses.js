import '../App.css';
import React, { useState, useEffect }  from 'react';
import { NavLink } from 'react-router-dom';

function PreviousCourses() {

    return (
        <div>
            <h2 className='text-center d-flex flex-column align-items-center'>CourseMan!</h2>
            <div className='header-container'>
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
            </div>

            <div className='previousTitle text-center'>
                <h1 className='title'>Previous Courses</h1>
            </div>

            <div className='coursePage d-flex flex-column align-items-center'>
                <h3>Student ID: {}</h3>
                <p className='prevSecond text-center'>Check off the courses you have completed with a C or better.</p>
                <div className='courseList d-flex justify-content-end flex-wrap'>
                    <div className="inputContainer d-flex justify-content-end col-md-3">
                        <input type="checkbox" className='prevCourseInput' name="checkCourse" value="CSE101"/><label className="courseLabel">CSE101</label>
                    </div>
                    <div className="inputContainer d-flex justify-content-end col-md-3">
                        <input type="checkbox" className='prevCourseInput' name="checkCourse" value="CSE114"/><label className="courseLabel">CSE114</label>
                    </div>
                    <div className="inputContainer d-flex justify-content-end col-md-3">
                        <input type="checkbox" className='prevCourseInput' name="checkCourse" value="CSE101"/><label className="courseLabel">CSE214</label>
                    </div>
                    <div className="inputContainer d-flex justify-content-end col-md-3">
                        <input type="checkbox" className='prevCourseInput' name="checkCourse" value="CSE114"/><label className="courseLabel">CSE215</label>
                    </div>
                    <div className="inputContainer d-flex justify-content-end col-md-3">
                        <input type="checkbox" className='prevCourseInput' name="checkCourse" value="CSE101"/><label className="courseLabel">CSE216</label>
                    </div>
                    <div className="inputContainer d-flex justify-content-end col-md-3">
                        <input type="checkbox" className='prevCourseInput' name="checkCourse" value="CSE114"/><label className="courseLabel">CSE220</label>
                    </div>
                    <div className="inputContainer d-flex justify-content-end col-md-3">
                        <input type="checkbox" className='prevCourseInput' name="checkCourse" value="CSE101"/><label className="courseLabel">CSE300</label>
                    </div>
                    <div className="inputContainer d-flex justify-content-end col-md-3">
                        <input type="checkbox" className='prevCourseInput' name="checkCourse" value="CSE114"/><label className="courseLabel">CSE303</label>
                    </div>
                    <div className="inputContainer d-flex justify-content-end col-md-3">
                        <input type="checkbox" className='prevCourseInput' name="checkCourse" value="CSE101"/><label className="courseLabel">CSE304</label>
                    </div>
                    <div className="inputContainer d-flex justify-content-end col-md-3">
                        <input type="checkbox" className='prevCourseInput' name="checkCourse" value="CSE114"/><label className="courseLabel">CSE305</label>
                    </div>
                    <div className="inputContainer d-flex justify-content-end col-md-3">
                        <input type="checkbox" className='prevCourseInput' name="checkCourse" value="CSE101"/><label className="courseLabel">CSE306</label>
                    </div>
                    <div className="inputContainer d-flex justify-content-end col-md-3">
                        <input type="checkbox" className='prevCourseInput' name="checkCourse" value="CSE114"/><label className="courseLabel">CSE310</label>
                    </div>
                    <div className="inputContainer d-flex justify-content-end col-md-3">
                        <input type="checkbox" className='prevCourseInput' name="checkCourse" value="CSE101"/><label className="courseLabel">CSE316</label>
                    </div>
                    <div className="inputContainer d-flex justify-content-end col-md-3">
                        <input type="checkbox" className='prevCourseInput' name="checkCourse" value="CSE114"/><label className="courseLabel">CSE320</label>
                    </div>
                    <div className="inputContainer d-flex justify-content-end col-md-3">
                        <input type="checkbox" className='prevCourseInput' name="checkCourse" value="CSE101"/><label className="courseLabel">CSE331</label>
                    </div>
                    <div className="inputContainer d-flex justify-content-end col-md-3">
                        <input type="checkbox" className='prevCourseInput' name="checkCourse" value="CSE114"/><label className="courseLabel">CSE416</label>
                    </div>
                </div>
                <div className='text-center'>
                    <button id="setCourse" type="button" form="">Set Previous Courses</button>
                </div>
            </div>
        </div>
    );
};

export default PreviousCourses;