import '../App.css';
import React, { useState, useEffect }  from 'react';
import Search from './Search';
import Navbar from './Navbar';



function SelectCourses() {

    return (
        <div>
            <Navbar />

            <div className="container">
                <div className='searchForm'>
                    <div className='formTitle'>Search Form</div>
                    <div className='searchRow'>
                        <label id="Name" htmlFor='' className="userName">Name:</label>
                        <input type="text" name="user" id="" placeholder='Name here...'></input>
                    </div>
                    <div className='searchRow'>
                        <label id="SearchFor" htmlFor='' className="searchBox">Search for:</label>
                        <input type="text" name="searchString" id="" placeholder='Name here...'></input>
                    </div>

                    <div>
                        <button className='showCoursebtn'>Show Courses</button>
                    </div>
                </div>
            </div>

            <Search/>
        </div>
    );
};

export default SelectCourses;