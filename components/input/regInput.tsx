import React from 'react'

const RegInput = () => {
  return (<div className="relative w-full min-w-[200px] h-10">
  <input
    className="peer
     w-full h-full 
     bg-transparent
      text-gray-700
       font-sans font-normal
        outline 
        outline-0 
        focus:outline-0 
        disabled:bg-gray-50 
        disabled:border-0 
        transition-all 
     
        placeholder-shown:border-2

        
       border
        focus:border-t-transparent
         placeholder-shown:border-gray-500 
         placeholder-shown:dark:border-gray-600 
       
         
         dark:border-gray-600
         focus:border-2
          text-base
          px-3
           py-2.5
           rounded-[7px] 
          border-gray-400
           focus:border-blue-600
        dark:text-gray-400
           "
           placeholder=''
     /><label
    className="
    flex w-full h-full 
    select-none 
    pointer-events-none absolute left-0 
    font-normal !overflow-visible 
    truncate peer-placeholder-shown:text-gray-500
     leading-tight 
     peer-focus:leading-tight peer-disabled:text-transparent
      peer-disabled:peer-placeholder-shown:text-gray-500 
    transition-all -top-1.5 
    peer-placeholder-shown:text-sm 
    text-[11px] peer-focus:text-[11px]
     before:content[' ']
      before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px]
       before:mr-1 
       peer-placeholder-shown:before:border-transparent 
       peer-placeholder-shown:before:border-yellow-700 
       before:rounded-tl-md before:border-t peer-focus:before:border-t-2 
       before:border-l 
       
       peer-focus:before:border-l-2 
       before:pointer-events-none before:transition-all 
       peer-disabled:before:border-transparent 
       after:content[' '] 
       after:block after:flex-grow 
       after:box-border after:w-2.5 
       after:h-1.5 after:mt-[6.5px] 
       after:ml-1 
       peer-placeholder-shown:after:border-transparent 
       peer-placeholder-shown:after:border-green-500 
       peer-placeholder-shown:before:border-green-500 
       after:rounded-tr-md
        after:border-t 
       peer-focus:after:border-t-2 
       after:border-r 
       peer-focus:after:border-r-2 
      
       after:pointer-events-none after:transition-all 
       peer-disabled:after:border-transparent 
       peer-placeholder-shown:leading-[3.75]
        text-gray-600
        dark:text-gray-400
         peer-focus:text-gray-900 
         peer-focus:dark:text-gray-200 
        before:border-gray-400
        before:dark:border-gray-600
         
         after:border-red-400 
         after:dark:border-gray-600
         peer-focus:after:!border-gray-900
         ">Username
  </label>
</div>
  )
}

export default RegInput