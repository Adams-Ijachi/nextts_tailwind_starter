import React from "react";





export function ButtomNav({navMenuRef}) 

{
  return <div ref={navMenuRef} className="nav__menu  h-16 py-0 transition ease-in px-4 grid rounded-t content-center  fixed bottom-0  left-0 bg-white  w-full shadow-3xl" id="nav-menu">
            
            <ul className="nav__list flex  justify-around">

              <li className="nav__item">

                <a className="nav__link font-semibold text-gray-400 gap-y-1 flex flex-col content-center  ">
                  <i className='bx bx-search text-2xl'></i>
                  <span className="nav__link-text text-xs">Explore</span>
                </a>
              </li>
              <li className="nav__item">

                <a className="nav__link flex flex-col gap-y-1 text-gray-400 font-semibold  content-center">
                <i className='bx bx-shopping-bag text-2xl'></i>
                  <span className="nav__link-text text-xs ">Store</span>
                </a>
              </li>
              <li className="nav__item">

                <a className="nav__link flex flex-col gap-y-1 text-gray-400 font-semibold content-center">
                  <i className='bx bx-user text-2xl  '></i>
                  <span className="nav__link-text text-xs">Profile</span>
                </a>
              </li>
              <li className="nav__item">

                <a className="nav__link flex flex-col gap-y-1 text-gray-400 font-semibold content-center">
                  <i className='bx bx-user text-2xl '></i>
                   
                  <span className="nav__link-text text-xs">Login</span>
                </a>
              </li>

            </ul>

          </div>;
}
  