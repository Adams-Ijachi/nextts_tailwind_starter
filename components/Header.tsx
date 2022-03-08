
import React, { useRef } from "react";

import Image from 'next/image'





const Header = () => {


  return (
    <header className="sticky md:px-10 p-5  bg-white shadow-md top-0 z-50 grid grid-cols-3">

      <div className="relative h-10 flex cursor-pointer bg-red">

        <Image
         src="https://links.papareact.com/qd3"
         layout="fill"
         alt="logo"

         objectFit="contain"
         objectPosition="left"

         />

      </div>


      <div className="flex items-center md:border-2 md:shadow-sm p-2 rounded-full">
        <input type="text" name="" className="md:pl-5  bg-transparent flex-grow outline-none text-sm text-grey-600 placeholder-grey-400 " id="" placeholder="Start Your search" />

        {/* search icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 p-1 cursor-pointer md:mx-2  hidden md:inline-flex rounded-full text-white bg-red-500 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>

      </div>


      <div className="flex items-center justify-end text-sm  space-x-4 text-gray-500">

        <p className="cursor-pointer hidden md:inline">Add a house</p>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6  cursor-pointer w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

        <div className="flex items-center space-x-2 border-2 shadow-sm rounded-full p-2 ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 cursor-pointer w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 cursor-pointer w-5" viewBox="0 0 18 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
          </svg>

          

        </div>
        

         

      </div>
    </header>
  )
}


  export default Header;