import '../App.css';
import React, { useState, useEffect }  from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';



function SelectCourses() {

    return (
        <div>
            <Navbar />

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