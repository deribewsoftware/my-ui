"use client"
import { ReactNode, useState } from "react";


interface ModalProps{
  label:string;
 
  children:ReactNode;
  title:string;
  setOpen:() => void;
  isOpen:boolean;
}
const CustomModal:React.FC<ModalProps> = ({label,children,title,setOpen,isOpen}) => {
  
  
  return ( <>
  
  <button className="border bg-gray-300" onClick={setOpen} >{label}</button>

   
   <div className={`absolute left-[40%] shadow-xl bg-white border rounded-[10px] p-2 flex flex-col  min-w-[500px]  max-w-[800px]
    ${isOpen? "-translate-y-[200%]" : "-translate-y-[1000%]"
              } transition-transform duration-500`}>
      <div className="flex justify-between p-2">
     <h1 className="">{title}</h1>
     
      <button className="border bg-gray-300" onClick={setOpen} >X</button>
      
      </div>
      <div className="">{children}</div>
    </div>
  
  {isOpen&&<div className={`fixed  h-screen w-screen top-0 bg-gray-700 dark:bg-opacity-80 bg-opacity-60 botton-0 left-0 right-0  flex justify-center items-center ${isOpen? "block opacity-1":"hidden opacity-0"} `}>
  </div>} 
  
  </>);
}
 
export default CustomModal;