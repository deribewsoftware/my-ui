import DashboardCard from "./cart";
import { SiCoursera } from "react-icons/si";
import { BsPeople } from "react-icons/bs";
import { IoIosPricetags } from "react-icons/io";
import { FaBuyNLarge } from "react-icons/fa";
import BarChart from "./chart";


const DashboardPage = () => {
  return ( <div className="pt-20 flex flex-col gap-10 w-full">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  gap-4 justify-center w-full">
      <DashboardCard icon={BsPeople} content="20,234" label="Students"/>
      <DashboardCard icon={SiCoursera} content="523" label="courses"/>
      <DashboardCard  icon={FaBuyNLarge} content="145" label="Payed Courses"/>
      <DashboardCard  icon={IoIosPricetags} content="64,3234" label="Total Price(ETB)"/>
    </div>

    <div className="flex flex-col">
      <h1 className="text-2xl font-medium">Courses Bought in Months</h1>


     <BarChart/>
      </div>
    </div>

  );
}
 
export default DashboardPage;