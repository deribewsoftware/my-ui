import { ReactNode } from "react";
import CustomSheet from "./Customsheet";
import Link from "next/link";
import { MdOutlineDashboard } from "react-icons/md";
const DashboardLayout = ({children}:{children:ReactNode}) => {
  return ( <>
  <div className="z-50 fixed flex h-12 w-full shadow-md bg-white justify-evenly items-center">
    <h2>Home</h2>
    <h2>Home</h2>
    <h2>Home</h2>
    <h2>Home</h2>
    <h2>Home</h2>
    <h2>Home</h2>
  </div>


  <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 gap-20">


      <CustomSheet/>
  
    <div className="hidden lg:block  lg:col-span-3  xl:col-span-2 relative">
      <div 
      className="fixed mt-12 
       h-screen
        bg-white
         shadow p-4
          lg:4/12 xl:w-2/12 
          overflow-y-auto 
          flex 
          flex-col 
          gap-10">
        <Link href="" className="flex gap-2"><MdOutlineDashboard size={20}/><p>Dashboard</p></Link>
        <p>ddddddddddddddddddd</p>
        <p>ddddddddddddddddddd</p>
        <p>ddddddddddddddddddd</p>
        <p>ddddddddddddddddddd</p>
        <p>ddddddddddddddddddd</p>
        <p>ddddddddddddddddddd</p>
        <p>ddddddddddddddddddd</p>
        <p>ddddddddddddddddddd</p>
        <p>ddddddddddddddddddd</p>
        <p>ddddddddddddddddddd</p>
        <p>ddddddddddddddddddd</p>
        
        </div>
    </div>



    <div className="px-6 lg:col-span-9 xl:col-span-10 ">{children}</div>
  </div></> );
}
 
export default DashboardLayout;