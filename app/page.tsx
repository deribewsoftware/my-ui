import Hero from "@/components/hero/hero";
import { CiSearch } from "react-icons/ci";

export default function Home() {
  return (
  <main>
     <div className="min-h-screen flex flex-col gap-20">
      <Hero/>
      <div className="py-10 flex justify-center">
        <div className="flex w-sm border rounded-[8px] border-gray-200 overflow-hidden ">
         <CiSearch size={30} className="pt-1"/> <input type="search" className="w-full border-none outline-none px-2 py-1"/>
        </div>
      </div>
     </div>
  </main>
  );
}
