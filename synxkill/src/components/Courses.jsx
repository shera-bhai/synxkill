import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import axios from "axios";

function Courses(){
    const [Data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:5000/api/users');
            setData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

    return(
        <>
        <div className='flex'>
        <Sidebar/>
        <div className="flex-1 flex flex-col overflow-hidden ml-[80.4px]">
        <div className="py-5 border-b gap-5 shadow-md shadow-gray-400 flex items-center">
          <a className="ml-8 text-5xl font-bold">Courses</a>
          <svg className="ml-[46%]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" height="24" width="30">
                          <g id="magnifying-glass--glass-search-magnifying">
                              <path id="Union" fill="#000" fillRule="evenodd" d="M2 6a4 4 0 1 1 8 0 4 4 0 0 1 -8 0Zm4 -6a6 6 0 1 0 3.476 10.89l2.817 2.817a1 1 0 0 0 1.414 -1.414l-2.816 -2.816A6 6 0 0 0 6 0Z" clipRule="evenodd" strokeWidth="1"></path>
                          </g>
                      </svg>
                      <input
                          type="text"
                          className="w-1/3 rounded-lg py-1 px-3 outline-none hover:border-blue-400 text-xl"
                          placeholder="Search for Courses"
                      />        
        </div>
        <div className='p-4 courses-navbar flex items-center'>
            <ul className="flex justify-center space-x-24 ml-6">
                <li className="cursor-pointer courses-page-below-searchbar-button"><i className="fa-solid fa-graduation-cap explore-courses-button "></i>Courses</li>
                <li className="cursor-pointer courses-page-below-searchbar-button"><i className="fa-solid fa-bolt trending-icon"></i>Trending</li>
                <li className="cursor-pointer courses-page-below-searchbar-button"><i className="fa-solid fa-crown premium-courses-button-on-courses-page"></i>Premium Courses</li>
            </ul>
        </div>
        <div className="mb-10 mt-10 flex gap-4">
            <div className="cursor-pointer course-cards-common ml-auto hover:border-2 hover:border-orange-400 hover:shadow-sm hover:shadow-orange-400" ><i className="fa-solid fa-palette"></i><p className="mt-3">Graphics & Design</p></div>
            <div className="cursor-pointer course-cards-common ml-8 hover:border-2 hover:border-orange-400 hover:shadow-sm hover:shadow-orange-400" ><i className="fa-solid fa-robot"></i><p className="mt-3"></p>Prompt Engineering</div>
            <div className="cursor-pointer course-cards-common ml-8 hover:border-2 hover:border-orange-400 hover:shadow-sm hover:shadow-orange-400" ><i className="fa-solid fa-film"></i><p className="mt-3">Video Editing</p></div>
            <div className="cursor-pointer course-cards-common ml-8 hover:border-2 hover:border-orange-400 hover:shadow-sm hover:shadow-orange-400" ><i className="fa-solid fa-images"></i><p className="mt-3">Photo Editing</p></div>
            <div className="cursor-pointer course-cards-common ml-8 hover:border-2 hover:border-orange-400 hover:shadow-sm hover:shadow-orange-400" ><i className="fa-solid fa-network-wired"></i><p className="mt-3">Programming and Tech</p></div>
            <div className="cursor-pointer course-cards-common ml-8 hover:border-2 hover:border-orange-400 hover:shadow-sm hover:shadow-orange-400" ><i className="fa-solid fa-wave-square"></i><p className="mt-3">Audio Editing</p></div>
            <div className="cursor-pointer course-cards-common ml-8 hover:border-2 hover:border-orange-400 hover:shadow-sm hover:shadow-orange-400" ><i className="fa-solid fa-briefcase"></i><p className="mt-3">Business Studies</p></div>
            <div className="cursor-pointer course-cards-common ml-8 mr-auto hover:border-2 hover:border-orange-400 hover:shadow-sm hover:shadow-orange-400" ><i className="fa-solid fa-book"></i><p className="mt-3">Commerce Subjects</p></div>
            
        </div>
        <div className="">
        <div className=" flex space-x-10 mx-20 w-full" >
        {Data.map((data, index) => (
          <div className="each-course-card-image-and-desc max-w-72 h-58">
            <img src={data.ImageLinks} className="min-h-48 min-w-60 rounded-2xl"/>
            <p className="font-semibold mt-2 ml-3">{data.Title}</p>
            <div className="ml-3 courses-sold-and-the-teacher-of-the-course-below-the-desc-of-course "><i className="fa-solid fa-dollar-sign"></i> {data.Price} <span className="dot ml-4"> <span className="ml-2">{data.Name}</span></span></div>
          </div>
        ))}
        </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Courses;