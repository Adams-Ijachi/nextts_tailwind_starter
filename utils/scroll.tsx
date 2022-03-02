import React,{ useRef } from "react";

// Scroll util functions
  
export const scrollJs = (element_react_ref:React.RefObject<any>) =>{ // accepts a react ref object

  let lastScrollPosition = 0;// when need to capture the last scroll position 
  let element :React.RefObject<any>  = element_react_ref ; 
  


  const scrollButtomNav  = ()   => {
  //  when need to capture the last scroll position and if the last-scroll-position is lesser than current the its a scroll down and vice versa

    const currentScrollPosition = window.scrollY


    if(currentScrollPosition <= 0  && element.current){
      element.current.classList.add('bg-white');

    }

    console.log(lastScrollPosition, 'lastScroll');
    console.log(currentScrollPosition, 'currentScroll');


    if(currentScrollPosition > lastScrollPosition && element.current){
        console.log('scroll down')
        element.current.classList.add('scroll-down');
        element.current.classList.remove('bg-white');
    }

    if(currentScrollPosition < lastScrollPosition && element.current){
        console.log('scroll up5')
        element.current.classList.remove('scroll-down');
        element.current.classList.add('bg-white');
    }
   

    lastScrollPosition = currentScrollPosition;

  }

  window.addEventListener('scroll', scrollButtomNav);

}






  
