/* eslint-disable react/no-unescaped-entities */
import Sidebar from "./Sidebar";
import Calendar from './Calendar';
import StudentsCardList from './StudentsCardList';


function Dashboard() {
  return (
      <>
          <div className="flex bg-color1">
              <Sidebar/>
              <div className="flex-1 flex flex-col overflow-hidden ml-[80.4px]">
                  <div className="py-5 border-b gap-5 shadow-md shadow-gray-400 flex items-center">
                    <a className="ml-8 text-5xl font-bold">Dashboard</a>
                      <div className="p-4 flex items-center justify-between space-x-14">
                      </div>
                  </div>
                        {/* Content section below the search bar */}
                        <div className="p-3 flex flex-row justify-evenly h-96">
                        <div className="flex-none ml-5">
                          <Calendar />
                        </div>
                        <div className="ml-2 mt-4 flex-none">
                          <StudentsCardList />
                        </div>
                        <div>
                        <div className="w-max mt-4 bg-white rounded-2xl shadow-md ml-8 shadow-gray-400 pr-10 pl-10 pb-6 pt-5 ">
                          <h2 className="text-2xl font-semibold mb-6 ml-0 inline">Documents</h2>
                          <a href="#">
                          <h2 className="text-xl  mt-0 text-blue-700 float-end">View all</h2>
                          </a>
                          <div className="space-y-5 mt-5">
                          <div className="flex items-center ">
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="red" d="M224 152a8 8 0 0 1-8 8h-24v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0v-56a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8M92 172a28 28 0 0 1-28 28h-8v8a8 8 0 0 1-16 0v-56a8 8 0 0 1 8-8h16a28 28 0 0 1 28 28m-16 0a12 12 0 0 0-12-12h-8v24h8a12 12 0 0 0 12-12m88 8a36 36 0 0 1-36 36h-16a8 8 0 0 1-8-8v-56a8 8 0 0 1 8-8h16a36 36 0 0 1 36 36m-16 0a20 20 0 0 0-20-20h-8v40h8a20 20 0 0 0 20-20M40 112V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0m120-32h28.69L160 51.31Z"/></svg>
                          <div className="ml-3">
                          <h2 className="text-xl font-normal mr-6 ml-2 inline">Class 1 notes.pdf</h2>
                          <p className="text-sm font-normal mr-7 ml-2 text-gray-600">157kb</p>
                          </div>
                          <a href="#">
                          <svg className="mt-2"xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="blue" d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"/><path fill="blue" d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06z"/></svg>
                          </a>
                          </div>
                          <div className="flex items-center justify-center ">
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="blue" d="M147.81 196.31a20.82 20.82 0 0 1-9.19 15.23C133.43 215 127 216 121.13 216a60.63 60.63 0 0 1-15.19-2a8 8 0 0 1 4.31-15.41c4.38 1.21 15 2.71 19.55-.35c.88-.6 1.83-1.52 2.14-3.93c.34-2.67-.72-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.58 20.58 0 0 1 9-14.95c11.85-8 30.72-3.31 32.84-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.08 1.11 1.9c2.31 1.49 6.45 2.68 10.45 3.84c9.83 2.82 26.34 7.65 24.15 24.96M72 144a8 8 0 0 0-8 8v38a10 10 0 0 1-20 0a8 8 0 0 0-16 0a26 26 0 0 0 52 0v-38a8 8 0 0 0-8-8m140.65 1.49a8 8 0 0 0-11.16 1.86L188 166.24l-13.49-18.89a8 8 0 0 0-13 9.3L178.17 180l-16.68 23.35a8 8 0 0 0 13 9.3L188 193.76l13.49 18.89a8 8 0 0 0 13-9.3L197.83 180l16.68-23.35a8 8 0 0 0-1.86-11.16M216 88v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-27.31-8L160 51.31V80Z"/></svg>
                          <div className="ml-3">
                          <h2 className="text-xl font-normal mr-8 ml-2 inline">react snippet.jsx</h2>
                          <p className="text-sm font-normal mr-7 ml-2 text-gray-600">213kb</p>
                          </div>
                          <a href="#">
                          <svg className="mt-2"xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="blue" d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"/><path fill="blue" d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06z"/></svg>
                          </a>
                          </div>
                          <div className="flex items-center justify-between ">
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16"><path fill="green" fillRule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-6.839 9.688v-.522a1.5 1.5 0 0 0-.117-.641a.86.86 0 0 0-.322-.387a.86.86 0 0 0-.469-.129a.87.87 0 0 0-.471.13a.87.87 0 0 0-.32.386a1.5 1.5 0 0 0-.117.641v.522q0 .384.117.641a.87.87 0 0 0 .32.387a.9.9 0 0 0 .471.126a.9.9 0 0 0 .469-.126a.86.86 0 0 0 .322-.386a1.55 1.55 0 0 0 .117-.642m.803-.516v.513q0 .563-.205.973a1.47 1.47 0 0 1-.589.627q-.381.216-.917.216a1.86 1.86 0 0 1-.92-.216a1.46 1.46 0 0 1-.589-.627a2.15 2.15 0 0 1-.205-.973v-.513q0-.569.205-.975q.205-.411.59-.627q.386-.22.92-.22q.535 0 .916.22q.383.219.59.63q.204.406.204.972M1 15.925v-3.999h1.459q.609 0 1.005.235q.396.233.589.68q.196.445.196 1.074q0 .634-.196 1.084q-.197.451-.595.689q-.396.237-.999.237zm1.354-3.354H1.79v2.707h.563q.277 0 .483-.082a.8.8 0 0 0 .334-.252q.132-.17.196-.422a2.3 2.3 0 0 0 .068-.592q0-.45-.118-.753a.9.9 0 0 0-.354-.454q-.237-.152-.61-.152Zm6.756 1.116q0-.373.103-.633a.87.87 0 0 1 .301-.398a.8.8 0 0 1 .475-.138q.225 0 .398.097a.7.7 0 0 1 .273.26a.85.85 0 0 1 .12.381h.765v-.073a1.33 1.33 0 0 0-.466-.964a1.4 1.4 0 0 0-.49-.272a1.8 1.8 0 0 0-.606-.097q-.534 0-.911.223q-.375.222-.571.633q-.197.41-.197.978v.498q0 .568.194.976q.195.406.571.627q.375.216.914.216q.44 0 .785-.164t.551-.454a1.27 1.27 0 0 0 .226-.674v-.076h-.765a.8.8 0 0 1-.117.364a.7.7 0 0 1-.273.248a.9.9 0 0 1-.401.088a.85.85 0 0 1-.478-.131a.83.83 0 0 1-.298-.393a1.7 1.7 0 0 1-.103-.627zm5.092-1.76h.894l-1.275 2.006l1.254 1.992h-.908l-.85-1.415h-.035l-.852 1.415h-.862l1.24-2.015l-1.228-1.984h.932l.832 1.439h.035z"/></svg>
                          <div className="ml-3">
                          <h2 className="text-xl font-normal mr-6 ml-2">test content.docx</h2>
                          <p className="text-sm font-normal mr-6 ml-2 text-gray-600">200kb</p>
                        </div>
                          <a href="#">
                          <svg className="mt-2"xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="blue" d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"/><path fill="blue" d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06z"/></svg>
                          </a>
                          </div>
                          <div className="flex items-center justify-center ">
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="purple" d="M156 208a8 8 0 0 1-8 8h-28a8 8 0 0 1-8-8v-56a8 8 0 0 1 16 0v48h20a8 8 0 0 1 8 8m-63.35-62.51a8 8 0 0 0-11.16 1.86L68 166.24l-13.49-18.89a8 8 0 1 0-13 9.3L58.17 180l-16.68 23.35a8 8 0 0 0 13 9.3L68 193.76l13.49 18.89a8 8 0 0 0 13-9.3L77.83 180l16.68-23.35a8 8 0 0 0-1.86-11.16m98.94 25.82c-4-1.16-8.14-2.35-10.45-3.84c-1.25-.82-1.23-1-1.12-1.9a4.54 4.54 0 0 1 2-3.67c4.6-3.12 15.34-1.72 19.82-.56a8 8 0 0 0 4.07-15.48c-2.11-.55-21-5.22-32.83 2.76a20.58 20.58 0 0 0-8.95 14.95c-2 15.88 13.65 20.41 23 23.11c12.06 3.49 13.12 4.92 12.78 7.59c-.31 2.41-1.26 3.33-2.15 3.93c-4.6 3.06-15.16 1.55-19.54.35a8 8 0 0 0-4.29 15.45a60.63 60.63 0 0 0 15.19 2c5.82 0 12.3-1 17.49-4.46a20.81 20.81 0 0 0 9.18-15.23c2.21-17.31-14.31-22.14-24.2-25M40 112V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88v24a8 8 0 1 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0m120-32h28.68L160 51.31Z"/></svg>
                          <div className="ml-3">
                          <h2 className="text-xl font-normal mr-9 ml-3 inline">new content.xls</h2>
                          <p className="text-sm font-normal mr-9 ml-3 text-gray-600">800kb</p>
                          </div>
                          <a href="#">
                          <svg className="mt-2"xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="blue" d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"/><path fill="blue" d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06z"/></svg>
                          </a>
                          </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        <div className="p-3 flex flex-row justify-between ">
                        <div className="flex-none">
                          <div className="flex mt-2">
                          <div className="flex justify-center items-center ml-5 mr-4">
  <div className="bg-white p-4 ml-4 shadow-gray-400 shadow-md rounded-3xl w-96">
    <div className="text-gray-800 border-b-2 border-gray-300 p-4 flex justify-between items-center">
      <h1 className="font-bold text-2xl">Upcoming lessons</h1>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013z"/><path fill="currentColor" fillRule="evenodd" d="M2 12c0-.839 0-1.585.013-2.25h19.974C22 10.415 22 11.161 22 12v2c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14zm15 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-4-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-6-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clipRule="evenodd"/></svg>
    </div>
    <div className="bg-white p-2 ">
      <div className="flex justify-between items-center time-slot mb-5 mt-5 ">
        <span className="text-gray-700">08:00</span>
        <div className="border-b-2 border-gray-300 w-72">  </div>
        
      </div>
      <div className="flex justify-between items-center time-slot mb-5">
        <span className="text-gray-700">09:20</span>
       <div className="border-b-2 border-gray-300 w-72">  </div>
      </div>
      <div className="flex items-center time-slot mb-5">
        <span className="text-gray-700">10:00</span>
         <div className="border-b-2 border-gray-300 ml-2 w-32">  </div>
        
        <div className="lesson-details flex bg-blue-500 rounded-2xl p-2">
        
          <img className="w-10 h-10 avatar rounded-full" src="https://placekitten.com/200/300" alt="James Smith"></img>
          <div className=" flex flex-col ml-3">
          <span className="lesson-name text-white font-semibold">James smith</span>
          <span className="lesson-name text-white ">React</span>
          </div>
        </div>
       
      </div>
      <div className="flex justify-between items-center time-slot mb-5">
        <span className="text-gray-700">12:00</span>
        <div className="border-b-2 border-gray-300 w-72">  </div>
      </div>
      <div className="flex  items-center time-slot mb-5">
        <span className="text-gray-700">13:00</span>
         <div className="border-b-2 border-gray-300 ml-2 w-28">  </div>
        <div className="lesson-details flex bg-orange-500 rounded-2xl p-2">
          <img className="w-10 h-10 avatar rounded-full" src="https://placekitten.com/202/300" alt="Amanda green"></img>
          <div className=" flex flex-col ml-3">
          <span className="lesson-name text-white font-semibold">Amanda green</span>
          <span className="lesson-name text-white ">JavaScript</span>
          </div>
        </div>
        </div>
        <div className="flex justify-between items-center time-slot mb-5">
        <span className="text-gray-700">14:30</span>
       <div className="border-b-2 border-gray-300 w-72">  </div>
      </div>
    </div>
  </div>
</div>
<div>
<div className="bg-white shadow-md shadow-gray-400 rounded-3xl p-5 w-96 ml-20 mt">
  <div className="flex justify-between items-center mb-4">
    <h1 className="font-bold text-slate-900 text-2xl">My Classes</h1>
    <div className="flex space-x-2">
    <a href="#">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"/></svg></a>
    <a href="#">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2M6.17 5a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 0 1 0-2zM15 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2zM9 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2z"/></svg>
    </a>
    </div>
  </div>
  <div className="mb-4  shadow-gray-400 shadow-md rounded-lg p-4">
    <h2 className="text-md font-bold text-slate-900  mb-2">React</h2>
    <p className="text-sm mb-2 font-semibold  text-gray-600 ">I need more lessons on hooks . What study materials can you recommend to me?</p>
    <div className="flex justify-between items-center mt-5">
    <div className="flex space-x-2 items-center">
    <img className="w-8 h-8 rounded-full" src="https://placekitten.com/200/300"></img>
    <p className="text-base font-semibold">Dustin Cox  </p>
    </div>
    <div className="flex space-x-1 items-center">
    <p className="text-xs" >09.11.23</p>
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" strokeLinecap="round" stroke-width="1.5" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828c-.653.654-1.528.943-2.828 1.07M7 4V2.5M17 4V2.5M21.5 9H10.75M2 9h3.875"/><path fill="currentColor" d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/></g></svg>
    </div>
    </div>
  </div>
  <div className="mb-4 shadow-gray-400 shadow-md rounded-lg p-4 ">
    <h2 className="text-md font-bold text-slate-900  mb-2">Tailwincss</h2>
    <p className="text-sm mb-2 font-semibold  text-gray-600 ">I'm still having issues with setting up tailwind in my pc can you help me with that?</p>
    <div className="flex justify-between items-center mt-5">
    <div className="flex space-x-2 items-center ">
    <img className="w-8 h-8 rounded-full" src="https://placekitten.com/200/400"></img>
    <p className="text-base font-semibold">Jeff poter </p>
    </div>
    <div className="flex space-x-1 items-center">
    <p className="text-xs" >12.11.23</p>
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828c-.653.654-1.528.943-2.828 1.07M7 4V2.5M17 4V2.5M21.5 9H10.75M2 9h3.875"/><path fill="currentColor" d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/></g></svg>
    </div>
    </div>
  </div>
</div>
</div>
<div>
<div className="bg-white shadow-md shadow-gray-400 rounded-3xl p-4 w-96 flex-col justify-center items-center mb-10 ml-24">
<div className="flex justify-between items-center ">
<h2 className="text-2xl font-semibold  ml-5 ">Wallet</h2>
<a href="#">
      <h2 className="text-sm  mt-0 text-blue-700 ">Edit</h2>
      </a>
</div>
<div className="card bg-gradient-to-r from-blue-400 to-pink-500 rounded-3xl shadow-lg p-6 mt-10 ml-2 mr-2 mb-2 w-70">
        <div className="flex justify-between items-center">
            
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 199"><path d="M46.54 198.011V184.84c0-5.05-3.074-8.342-8.343-8.342c-2.634 0-5.488.878-7.464 3.732c-1.536-2.415-3.731-3.732-7.024-3.732c-2.196 0-4.39.658-6.147 3.073v-2.634h-4.61v21.074h4.61v-11.635c0-3.731 1.976-5.488 5.05-5.488c3.072 0 4.61 1.976 4.61 5.488v11.635h4.61v-11.635c0-3.731 2.194-5.488 5.048-5.488c3.074 0 4.61 1.976 4.61 5.488v11.635zm68.271-21.074h-7.463v-6.366h-4.61v6.366h-4.171v4.17h4.17v9.66c0 4.83 1.976 7.683 7.245 7.683c1.976 0 4.17-.658 5.708-1.536l-1.318-3.952c-1.317.878-2.853 1.098-3.951 1.098c-2.195 0-3.073-1.317-3.073-3.513v-9.44h7.463zm39.076-.44c-2.634 0-4.39 1.318-5.488 3.074v-2.634h-4.61v21.074h4.61v-11.854c0-3.512 1.536-5.488 4.39-5.488c.878 0 1.976.22 2.854.439l1.317-4.39c-.878-.22-2.195-.22-3.073-.22m-59.052 2.196c-2.196-1.537-5.269-2.195-8.562-2.195c-5.268 0-8.78 2.634-8.78 6.805c0 3.513 2.634 5.488 7.244 6.147l2.195.22c2.415.438 3.732 1.097 3.732 2.195c0 1.536-1.756 2.634-4.83 2.634c-3.073 0-5.488-1.098-7.025-2.195l-2.195 3.512c2.415 1.756 5.708 2.634 9 2.634c6.147 0 9.66-2.853 9.66-6.805c0-3.732-2.854-5.708-7.245-6.366l-2.195-.22c-1.976-.22-3.512-.658-3.512-1.975c0-1.537 1.536-2.415 3.951-2.415c2.635 0 5.269 1.097 6.586 1.756zm122.495-2.195c-2.635 0-4.391 1.317-5.489 3.073v-2.634h-4.61v21.074h4.61v-11.854c0-3.512 1.537-5.488 4.39-5.488c.879 0 1.977.22 2.855.439l1.317-4.39c-.878-.22-2.195-.22-3.073-.22m-58.833 10.976c0 6.366 4.39 10.976 11.196 10.976c3.073 0 5.268-.658 7.463-2.414l-2.195-3.732c-1.756 1.317-3.512 1.975-5.488 1.975c-3.732 0-6.366-2.634-6.366-6.805c0-3.951 2.634-6.586 6.366-6.805c1.976 0 3.732.658 5.488 1.976l2.195-3.732c-2.195-1.757-4.39-2.415-7.463-2.415c-6.806 0-11.196 4.61-11.196 10.976m42.588 0v-10.537h-4.61v2.634c-1.537-1.975-3.732-3.073-6.586-3.073c-5.927 0-10.537 4.61-10.537 10.976c0 6.366 4.61 10.976 10.537 10.976c3.073 0 5.269-1.097 6.586-3.073v2.634h4.61zm-16.904 0c0-3.732 2.415-6.805 6.366-6.805c3.732 0 6.367 2.854 6.367 6.805c0 3.732-2.635 6.805-6.367 6.805c-3.951-.22-6.366-3.073-6.366-6.805m-55.1-10.976c-6.147 0-10.538 4.39-10.538 10.976c0 6.586 4.39 10.976 10.757 10.976c3.073 0 6.147-.878 8.562-2.853l-2.196-3.293c-1.756 1.317-3.951 2.195-6.146 2.195c-2.854 0-5.708-1.317-6.367-5.05h15.587v-1.755c.22-6.806-3.732-11.196-9.66-11.196m0 3.951c2.853 0 4.83 1.757 5.268 5.05h-10.976c.439-2.854 2.415-5.05 5.708-5.05m114.372 7.025v-18.879h-4.61v10.976c-1.537-1.975-3.732-3.073-6.586-3.073c-5.927 0-10.537 4.61-10.537 10.976c0 6.366 4.61 10.976 10.537 10.976c3.074 0 5.269-1.097 6.586-3.073v2.634h4.61zm-16.903 0c0-3.732 2.414-6.805 6.366-6.805c3.732 0 6.366 2.854 6.366 6.805c0 3.732-2.634 6.805-6.366 6.805c-3.952-.22-6.366-3.073-6.366-6.805m-154.107 0v-10.537h-4.61v2.634c-1.537-1.975-3.732-3.073-6.586-3.073c-5.927 0-10.537 4.61-10.537 10.976c0 6.366 4.61 10.976 10.537 10.976c3.074 0 5.269-1.097 6.586-3.073v2.634h4.61zm-17.123 0c0-3.732 2.415-6.805 6.366-6.805c3.732 0 6.367 2.854 6.367 6.805c0 3.732-2.635 6.805-6.367 6.805c-3.951-.22-6.366-3.073-6.366-6.805"/><path fill="#FF5F00" d="M93.298 16.903h69.15v124.251h-69.15z"/><path fill="#EB001B" d="M97.689 79.029c0-25.245 11.854-47.637 30.074-62.126C114.373 6.366 97.47 0 79.03 0C35.343 0 0 35.343 0 79.029c0 43.685 35.343 79.029 79.029 79.029c18.44 0 35.343-6.366 48.734-16.904c-18.22-14.269-30.074-36.88-30.074-62.125"/><path fill="#F79E1B" d="M255.746 79.029c0 43.685-35.343 79.029-79.029 79.029c-18.44 0-35.343-6.366-48.734-16.904c18.44-14.488 30.075-36.88 30.075-62.125c0-25.245-11.855-47.637-30.075-62.126C141.373 6.366 158.277 0 176.717 0c43.686 0 79.03 35.563 79.03 79.029"/></svg>
            
            <div className="text-white text-opacity-75">
                **** 4841
            </div>
        </div>
        <div className="text-4xl font-bold text-white mt-12">
            ₹10,000
        </div>
        <div className="text-white text-opacity-75 mt-2">
          Akshat Jain
        </div>
    </div>
                          </div>
                          </div>
                        </div>
                        </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Dashboard;