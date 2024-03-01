'use client'

import { useState } from "react";

const CustomSheet = () => {
  const [isOpen,setOpen]=useState(false);
  return ( <><div className="relative lg:hidden">
    <button  onClick={()=>{setOpen((prev)=>!prev)}}
    className={` fixed bg-white rounded-r-full left-0 top-16 border-r-2 shadow  p-2 font-bold text-lg ${isOpen?'hidden':'block'}`}>Dashboard</button>
    <div className={`absolute 
    shadow-lg 
    h-screen p-4 z-50 
    bg-white
     w-[70%]
      md:w-[50%] 
      flex flex-col 
      gap-10 
    overflow-y-auto

    ${isOpen? 'translate-x-0 opacity-100':'opacity-0 -translate-x-full'}
    transition 
    duration-300
    ease-in-out
    
    `}>
      <h1>home page</h1>
      <h1>home page</h1>
      <h1>home page</h1>
      <h1>home page</h1>
      <h1>home page </h1>
      <h1>home page</h1>
      <h1>home page</h1>
      <h1>home page</h1>

    </div>
     
  </div> 
  {isOpen&&<div onClick={()=>{setOpen((prev)=>!prev)}} className="fixed w-full h-screen bg-black bg-opacity-20"></div>}</>);
}
 
export default CustomSheet;