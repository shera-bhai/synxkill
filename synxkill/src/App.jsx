/* eslint-disable react/no-unescaped-entities */
import Chat from './components/Chat' 
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Example() {
  return (
    <>
      <Navbar/>
      <div className='rounded-[40px] mt-8 mx-20 w-[89vw] h-[82vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
        <div className="font-sans text-6xl font-bold pt-20 pl-32 w-[50%] text-white">
          <h1>Empowering Dreams and Igniting Skills </h1>
          <p className=' mt-5 text-sm font-normal text-gray-300 w-[50%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className='mt-14 text-black flex gap-3 rounded-full px-16 py-4 text-sm font-medium bg-orange-500 hover:text-white hover:bg-orange-600 active:bg-orange-700'>Get Started
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
            </svg>
          </button>
        <div>
          <p className='flex gap-32 text-4xl mt-16'>3.2<a>700+</a></p>
          <p className='flex gap-14 font-medium text-sm'>Rating on Playstore<a>Active Users</a></p>
        </div>
        </div>
        </div>

        <div id='features' className='h-[95vh]'>
          <div className='mt-2'>&nbsp;</div>
          <h4 className='mt-4 mx-24 font-mono font-bold text-black text-5xl'>Features</h4>
          <div className='rounded-md border-2 px-3 py-7 flex gap-6 items-center mt-6 mx-24'>
            <button className='absolute ml-3 left-14 rounded-full bg-slate-100 border-2 p-2'><svg className="h-8 w-8"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="15 6 9 12 15 18" /></svg></button>
            <a href="#" className='rounded-md font-bold text-2xl text-white text-center ml-3 min-h-60 max-h-60 min-w-48 max-w-48 py-28 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-200 via-purple-400 to-purple-800 cursor-pointer' >Video Editing</a>
            <a href="#" className='rounded-md font-bold text-2xl text-white text-center min-h-60 max-h-60 min-w-48 max-w-48 py-28  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-400 to-rose-400 cursor-pointer'>SEO</a>
            <a href="#" className='rounded-md font-bold text-2xl text-white text-center min-h-60 max-h-60 min-w-48 max-w-48 py-28 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-200 to-green-500 cursor-pointer'>Social Media</a>
            <a href="#" className='rounded-md font-bold text-2xl text-white text-center min-h-60 max-h-60 min-w-48 max-w-48 py-28 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-200 to-yellow-500 cursor-pointer'>Web Dev</a>
            <a href="#" className='rounded-md font-bold text-2xl text-white text-center min-h-60 max-h-60 min-w-48 max-w-48 py-28 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 cursor-pointer'>Logo Design</a>
            <a href="#" className='rounded-md font-bold text-2xl text-white text-center min-h-60 max-h-60 min-w-48 max-w-48 py-28 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-600 to-pink-600 cursor-pointer'>Architecture</a>
            <button className='absolute ml-3 right-[70px] rounded-full bg-slate-100 border-2 p-2'><svg className="h-8 w-8"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="9 6 15 12 9 18" /></svg></button>
          </div>
          <h4 className='mt-16 mx-24 font-mono font-bold text-black text-5xl'>Ways to Get Started</h4>
          <div className='flex gap-10 mx-24 mt-10'>
            <a className='flex gap-32 rounded-md ml-8 pl-10 text-white font-medium text-4xl text-left min-w-96 py-12 bg-gradient-to-r from-purple-900 to-indigo-500 cursor-pointer shadow-xl hover:shadow-purple-500/50'>Teachers
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-8 mt-2 w-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
              </svg>
            </a>
            <a className='flex gap-20 rounded-md pl-10 text-white font-medium text-4xl text-left min-w-96 py-12 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-200 to-yellow-500 cursor-pointer shadow-xl hover:shadow-yellow-500/50'>Professional
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-8 mt-2 w-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
              </svg>
            </a>
            <a className='flex gap-32 rounded-md pl-10 text-white font-medium text-4xl text-left min-w-96 py-12 bg-gradient-to-r from-orange-400 to-rose-400 cursor-pointer shadow-xl hover:shadow-orange-500/50'>Students
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-8 mt-2 w-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
              </svg>
            </a>
          </div>

        <div id='pricing'>
          <div className='mt-8'>&nbsp;</div>
            <div className='rounded-[40px] mx-20 w-[89vw] h-[92vh] bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
              <h4 className='font-sans text-white font-bold text-6xl px-24 pt-16'>Choose Your Plan</h4>
              <div className='rounded-lg bg-slate-600 py-4 flex gap-[375px] mx-24 mt-16 text-lg'>
                <a className='text-white font-normal pl-8'>Subscription Level</a>
                <a className='flex gap-3 absolute ml-[45.45rem] -mt-[4.25rem] rounded-t-lg bg-blue-400 px-[2.05rem] py-3 text-white font-medium'>Best Selling<svg className="h-6 w-5 mt-0.5 font-medium"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg></a>
                <p className='flex gap-20 text-lg '>
                  <a className='flex gap-3 rounded-lg px-6 bg-green-300'>Basic
                    <svg className="w-3 h-6 text-gray-700 pt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
                      <path d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z"></path>
                    </svg>
                  </a>
                  <a className='rounded-b-lg absolute -mt-5 ml-44 min-w-48 pb-[26.5rem] border-2 border-blue-400'></a>
                  <a className='flex gap-3 rounded-lg px-6 bg-purple-300'>Advanced
                    <svg className="w-3.5 h-6 text-gray-700 pt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                      <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z"></path>
                    </svg>
                  </a>
                  <a className='flex gap-3 rounded-lg px-6 bg-yellow-300'>Premium
                    <svg className="w-4 h-6 text-gray-700 pt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                      <path d="M19 0H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM2 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6H2Zm11 3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0h2a1 1 0 0 1 2 0v1Z"></path>
                    </svg>
                  </a>
                </p>
              </div>

              <div className='flex gap-[375px] border-b border-slate-700 mx-24 py-4 text-lg'>
                <a className='text-white font-normal pl-8'>Number of Users</a>
                <p className='flex gap-36 text-lg '>
                  <a className='text-white absolute left-[750px]  font-medium rounded-lg px-6'>1</a>
                  <a className='text-white absolute left-[940px]  font-medium rounded-lg px-6'>Up to 5</a>
                  <a className='text-white absolute left-[1160px] font-medium rounded-lg px-6'>Unlimited</a>
                </p>
              </div>

              <div className='flex gap-[360px] border-b border-slate-700 mx-24 py-4 text-lg'>
                <a className='text-white font-normal pl-8'>Customer Support</a>
                <p className='flex gap-36 text-lg '>
                  <a className='text-white absolute left-[730px] font-medium rounded-lg px-6'>Online</a>
                  <a className='text-white absolute left-[940px] font-medium rounded-lg px-6'>Priority</a>
                  <a className='text-white absolute left-[1160px] font-medium rounded-lg px-6'>Premium</a>
                </p>
              </div>

              <div className='flex gap-[375px] border-b border-slate-700 mx-24 py-4 text-lg'>
                <a className='text-white font-normal pl-8'>Monthly Requests</a>
                <p className='flex gap-36 text-lg '>
                  <a className='text-white absolute left-[730px] font-medium rounded-lg px-6'>1000</a>
                  <a className='text-white absolute left-[940px] font-medium rounded-lg px-6'>5000</a>
                  <a className='text-white absolute left-[1160px] font-medium rounded-lg px-6'>Unlimited</a>
                </p>
              </div>

              <div className='flex gap-[375px] border-b border-slate-700 mx-24 py-4 text-lg'>
                <a className='text-white font-normal pl-8'>Data Packages</a>
                <p className='flex gap-36 text-lg '>
                  <a className='text-white absolute left-[730px]  font-medium rounded-lg px-6'>1 GB</a>
                  <a className='text-white absolute left-[940px]  font-medium rounded-lg px-6'>5 GB</a>
                  <a className='text-white absolute left-[1160px] font-medium rounded-lg px-6'>10 GB</a>
                </p>
              </div>

              <div className='flex gap-[375px] border-b border-slate-700 mx-24 py-4 text-lg'>
                <a className='text-white font-normal pl-8'>Cancellation</a>
                <p className='flex gap-36 text-lg '>
                  <a className='text-white absolute left-[730px]  font-medium rounded-lg px-6'>Available</a>
                  <a className='text-white absolute left-[940px]  font-medium rounded-lg px-6'>Available</a>
                  <a className='text-white absolute left-[1160px] font-medium rounded-lg px-6'>Available</a>
                </p>
              </div>

              <div className='flex gap-[375px] border-b border-slate-700 mx-24 py-4 text-lg'>
                <a className='text-white font-normal pl-8'>Monthly Cost</a>
                <p className='flex gap-36 text-lg '>
                  <a className='text-white absolute left-[730px] text-2xl font-bold rounded-lg px-6'>$9.99</a>
                  <a className='text-white absolute left-[940px] text-2xl font-bold rounded-lg px-6'>$19.99</a>
                  <a className='text-white absolute left-[1160px] text-2xl font-bold rounded-lg px-6'>$39.99</a>
                </p>
              </div>
            </div>
          </div>

          <div id='testimonials' className="h-[95vh]">
            <div className='mt-2'>&nbsp;</div>
            <h4 className='mt-4 mx-24 font-mono font-bold text-black text-5xl'>Testimonials</h4>
            <div className='flex gap-8'>
              <p className='mx-28 mt-10 text-base font-medium text-black w-[30%]'>Don't just take our owrd for it - hear from our satisfied clients who have experienced the transformative impact of our Education tools</p>
              <p className='mx-28 mt-10 text-base font-medium text-black w-[30%]'>Learn how this powerful tools has revolutionized their work and accelerated their success.</p>
            </div>
            <div className='flex gap-32 mt-14 mx-32'>
              <div className='rounded-lg px-12 py-12 min-w-80 max-w-80 min-h-96 max-h-96 items-center text-lg font-medium bg-green-400'>"The excellent voice recognition quality of AI Ally app makes it perfect for dictation and note taking. I have never come acress such accuracy before"
                <div className='flex gap-2 mx-4'>
                  <svg className="h-12 w-12 mt-11 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 20a8 8 0 0 1-5-1.8v-.6c0-1.8 1.5-3.3 3.3-3.3h3.4c1.8 0 3.3 1.5 3.3 3.3v.6a8 8 0 0 1-5 1.8ZM2 12a10 10 0 1 1 10 10A10 10 0 0 1 2 12Zm10-5a3.3 3.3 0 0 0-3.3 3.3c0 1.7 1.5 3.2 3.3 3.2 1.8 0 3.3-1.5 3.3-3.3C15.3 8.6 13.8 7 12 7Z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <p className='mt-12 text-sm'>Harsh Yadav</p>
                    <p className='text-sm'>Full Stack</p>
                  </div>
                </div>
              </div>
              <div className='rounded-lg px-12 py-12 min-w-80 max-w-80 min-h-96 max-h-96 items-center text-lg font-medium bg-blue-400'>"The excellent voice recognition quality of AI Ally app makes it perfect for dictation and note taking. I have never come acress such accuracy before"
                <div className='flex gap-2 mx-4'>
                  <svg className="h-12 w-12 mt-11 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 20a8 8 0 0 1-5-1.8v-.6c0-1.8 1.5-3.3 3.3-3.3h3.4c1.8 0 3.3 1.5 3.3 3.3v.6a8 8 0 0 1-5 1.8ZM2 12a10 10 0 1 1 10 10A10 10 0 0 1 2 12Zm10-5a3.3 3.3 0 0 0-3.3 3.3c0 1.7 1.5 3.2 3.3 3.2 1.8 0 3.3-1.5 3.3-3.3C15.3 8.6 13.8 7 12 7Z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <p className='mt-12 text-sm'>Akshat Jain</p>
                    <p className='text-sm'>Back-End</p>
                  </div>
                </div>
              </div>
              <div className='rounded-lg px-12 py-12 min-w-80 max-w-80 min-h-96 max-h-96 items-center text-lg font-medium bg-rose-400'>"The excellent voice recognition quality of AI Ally app makes it perfect for dictation and note taking. I have never come acress such accuracy before"
                <div className='flex gap-2 mx-4'>
                  <svg className="h-12 w-12 mt-11 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 20a8 8 0 0 1-5-1.8v-.6c0-1.8 1.5-3.3 3.3-3.3h3.4c1.8 0 3.3 1.5 3.3 3.3v.6a8 8 0 0 1-5 1.8ZM2 12a10 10 0 1 1 10 10A10 10 0 0 1 2 12Zm10-5a3.3 3.3 0 0 0-3.3 3.3c0 1.7 1.5 3.2 3.3 3.2 1.8 0 3.3-1.5 3.3-3.3C15.3 8.6 13.8 7 12 7Z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <p className='mt-12 text-sm'>Yatinder Kumar</p>
                    <p className='text-sm'>Front-End</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Chat/>
        <Footer/>
      </div>
    </>
  )
}

