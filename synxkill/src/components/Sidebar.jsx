function Sidebar(){
    return(
        <>
         {/* Sidebar */}
    <div className="inline-flex h-screen fixed overflow-auto shadow-md shadow-gray-500">
        <div className="flex h-full w-20 shadow-md shadow-gray-400">
            <div className="flex flex-col items-center h-full">
            <div>
                <a href="/"><img className="p-1 w-20 h-20 border-r" src="https://cdn.discordapp.com/attachments/1199433438755819570/1200109191906472026/Logo3.png?ex=65c4fbc8&is=65b286c8&hm=f3d345a08b9fd4f9a4adce7b8d1a6c238159c2a8958881d36a6dfbc2a3372fe3&" /></a>
            </div>

                 {/* Sidebar Buttons */}
                <div className="mt-3 space-y-24">
                    <a href="/dashboard">
                        <svg className="w-10 h-10 mb-8 rounded-full text-gray-400 hover:ring-2 hover:ring-offset-4 hover:ring-orange-400 transition-all 0.2s hover:ease-in-out hover:text-orange-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 3.9H4v16h8v-13h5v13h3v-16h-8Z"/>
                        </svg>
                    </a>
                    <a href="/add_course">
                        <svg className="w-10 h-10 mb-8 mt-4 rounded-full text-gray-400 hover:ring-2 hover:ring-offset-4 hover:ring-orange-400 transition-all 0.2s hover:ease-in-out hover:text-orange-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1" d="M7.1 20A3.1 3.1 0 0 1 4 16.9v-12c0-.5.4-.9.9-.9h4.4c.5 0 1 .4 1 .9v12c0 1.7-1.5 3.1-3.2 3.1Zm0 0h12c.5 0 .9-.4.9-.9v-4.4c0-.5-.4-1-.9-1h-4.4l-.6.3-3.8 3.7-.1.2c-.9 1.4-1.6 1.8-3 2.1Zm0-3.6h0m8-10.9 3.1 3.2c.3.3.3.9 0 1.2l-8 8V9l3.6-3.6c.3-.3 1-.3 1.3 0Z"/>
                        </svg>
                    </a>
                    <a href="/courses">
                        <svg className="w-10 h-10 mb-8 mt-4 rounded-full text-gray-400 hover:ring-2 hover:ring-offset-4 hover:ring-orange-400 transition-all 0.2s hover:ease-in-out hover:text-orange-400 focus:ring-2 focus:ring-offset-4 focus:ring-orange-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8H5m12 0c.6 0 1 .4 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1Z"/>
                        </svg>
                    </a>
                    <a href="#">
                        <svg className="w-10 h-10 mb-8 mt-4 rounded-full text-gray-400 hover:ring-2 hover:ring-offset-4 hover:ring-orange-400 transition-all 0.2s hover:ease-in-out hover:text-orange-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 10.5h0m-4 0h0m-4 0h0M5 5h14c.6 0 1 .4 1 1v9c0 .6-.4 1-1 1h-6.6a1 1 0 0 0-.7.3L8.8 19c-.3.3-.8 0-.8-.4V17c0-.6-.4-1-1-1H5a1 1 0 0 1-1-1V6c0-.6.4-1 1-1Z"/>
                        </svg>
                    </a>
                    <a href="/">
                        <svg className="w-10 h-10 mb-8 mt-52 mt-4 rounded-full text-gray-400 hover:ring-2 hover:ring-offset-4 hover:ring-orange-400 transition-all 0.2s hover:ease-in-out hover:text-orange-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m4 12 8-8 8 8M6 10.5V19c0 .6.4 1 1 1h3v-3c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v3h3c.6 0 1-.4 1-1v-8.5"/>
                        </svg>
                    </a>
                    <a href="">
                        <svg className="w-10 h-10 mb-8 mt-4 rounded-full text-gray-400 hover:ring-2 hover:ring-offset-4 hover:ring-orange-400 transition-all 0.2s hover:ease-in-out hover:text-orange-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"/>
                        </svg>
                    </a>
                    </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Sidebar;