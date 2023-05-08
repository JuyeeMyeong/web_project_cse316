import '../App.css';
import React, { useState, useEffect }  from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';



function SelectCourses() {

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

            <div className='searchForm'>
                <div className='formTitle'>Search Form</div>
                <div className='searchRow'>
                    <label id="Name"for="" className="userName">Name:</label>
                    <input type="text" name="user" id="" placeholder='Name here...'></input>
                </div>
                <div className='searchRow'>
                    <label id="SearchFor"for="" className="searchBox">Search for:</label>
                    <input type="text" name="searchString" id="" placeholder='Name here...'></input>
                </div>

                <div>
                    <button className='showCoursebtn'>Show Courses</button>
                </div>
            </div>

            <Search/>
        </div>
    );
};

export default SelectCourses;