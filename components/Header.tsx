import Search from "./Search";
import React, { useRef } from "react";

import { scrollJs } from "../utils/scroll";
import { ButtomNav } from "../assets/ButtomNav";





const Header = () => {

const navMenuRef = useRef(null); // get ref of bottom nav (basically get the react equilvalent of getting document obj )
scrollJs(navMenuRef); // calls a scroll js method and passes the reference to the div 



  return (
    <>
      <header className="fixed top-0 left-0 w-full lg:bg-white z-10 sm:transition  ease-out">
        <nav className={"nav container h-9 lg:h-14 flex p-5 mt-2 mb-3 justify-between items-center  "}  >

          <div className="nav__logo hidden lg:block">
            <p> Finder </p>
          </div>

          <Search />
        
          < div ref={navMenuRef} className="  h-16 py-0 transition ease-in px-4 grid rounded-t content-center  fixed lg:relative bottom-0  left-0 bg-white  w-full lg:shadow-none shadow-3xl " id="nav-menu">
            
            <ul  className="nav__list flex  justify-around md:gap-x-8  md:justify-center">

              <li className="nav__item">

                <a  className="nav__link font-semibold text-gray-400 gap-y-1 flex flex-col content-center  ">
                  <i className=' bx bx-search text-2xl  ' ></i>
                  <span className="nav__link-text lg:text-lg text-xs">Explore</span>
                </a>
              </li>
              <li className="nav__item">

                <a  className="nav__link flex flex-col gap-y-1 text-gray-400 font-semibold  content-center">
                 <i className=' bx bx-shopping-bag text-2xl'></i>
                  <span className="nav__link-text lg:text-lg text-xs ">Store</span>
                </a>
              </li>
              <li className="nav__item">

                <a  className="nav__link flex flex-col gap-y-1 text-gray-400 font-semibold content-center">
                  <i className=' bx bx-user text-2xl  ' ></i>
                  <span className="nav__link-text lg:text-lg text-xs">Profile</span>
                </a>
              </li>
              <li className="nav__item">

                <a  className="nav__link flex flex-col gap-y-1 text-gray-400 font-semibold content-center">
                  <i className=' bx bx-user text-2xl ' ></i>
                   
                  <span className="nav__link-text lg:text-lg text-xs">Login</span>
                </a>
              </li>

            </ul>

          </div>
        </nav>
      </header>
    </>
  )
}


  export default Header;