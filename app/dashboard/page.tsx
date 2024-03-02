import DashboardCard from "./cart";
import { SiCoursera } from "react-icons/si";
import { BsPeople } from "react-icons/bs";
import { IoIosPricetags } from "react-icons/io";
import { FaBuyNLarge } from "react-icons/fa";

import BarChartComponent from "./chart";
import { courses } from "@/lib/course";
import TotalPricesInMonth from "./totalPricesinMonth";


const DashboardPage = () => {
  return ( <div className="pt-20 flex flex-col items-center gap-20 w-full">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 items-center text-center gap-4 justify-center w-full">
      <DashboardCard icon={BsPeople} content="20,234" label="Students"/>
      <DashboardCard icon={SiCoursera} content={`${courses.length}`} label="courses"/>
      <DashboardCard  icon={FaBuyNLarge} content="145" label="Payed Courses"/>
      <DashboardCard  icon={IoIosPricetags} content="64,3234" label="Total Price(ETB)"/>
    </div>

    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-medium"> Courses Bought in Months</h1>

<div className=" overflow-x-auto  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-full ">
 
<BarChartComponent/>
</div>
     
      </div>



    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-medium">Total Prices of Courses Bought  in Months</h1>

<div className=" overflow-x-auto  p-6 bg-gray-800 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-700 w-full ">
 
<TotalPricesInMonth/>
</div>
     
      </div>
    </div>

  );
}
 
export default DashboardPage;