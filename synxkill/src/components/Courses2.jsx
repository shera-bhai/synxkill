import React from "react";
import Sidebar from './Sidebar';

function Courses(){

    return(
        <>
        <div className='flex'>
        <Sidebar/> 
        <div className="flex-1 flex flex-col overflow-hidden margin-left-from-navbar">
        <div className='p-4   flex items-center '>
        <div className="rounded-full bg-gray-300 p-2"><i className="fa-solid fa-arrows-rotate text-gray-600"></i></div>
        <div className="search-bar-element-of-courses-page ml-10">
        <svg className="search-icon-in-courses-page" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
        <input placeholder="Search Courses" type="search" className="search-bar-input-of-courses-page"/>
        </div>
        <button className="unlock-premiuim-button-on-course">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
                <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
            </svg>
            Unlock Pro
        </button>
        </div>
        <div className='p-4  courses-navbar flex items-center'>
            <ul className="flex justify-center space-x-24">
                <li className="cursor-pointer courses-page-below-searchbar-button"><i className="fa-solid fa-graduation-cap explore-courses-button "></i>Courses</li>
                <li className="cursor-pointer courses-page-below-searchbar-button"><i className="fa-solid fa-bolt trending-icon"></i>Trending</li>
                <li className="cursor-pointer courses-page-below-searchbar-button"><i className="fa-solid fa-crown premium-courses-button-on-courses-page"></i>Premium Courses</li>
            </ul>
        </div>
        
        </div>
        </div>
        </>
    )
}

export default Courses;