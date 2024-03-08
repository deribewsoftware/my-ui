import CategoryCard from "@/components/card/categoryCard";
import Hero from "@/components/hero/hero";
import { ExamsCategory } from "@/lib/examsCategory";
import { CiSearch } from "react-icons/ci";

export default function Home() {

  const videoUrl = "https://firebasestorage.googleapis.com/v0/b/ethio-exams-store.appspot.com/o/course%2Fvideos%2F1708778304285-biology.mp4?alt=media&token=54b3f553-6ec6-4451-a1c9-0da4f198c6e6";
  const filename=videoUrl.split('/').pop()?.split("?")[0].split("%2F").pop();
  console.log("filename: " , filename)

  return (
  <main>
     <div className="min-h-screen w-full flex flex-col gap-20">
      <Hero/>
      <div className="py-10 flex justify-center">
        <div className="flex w-sm border rounded-[8px] border-gray-200 overflow-hidden ">
         <CiSearch size={30} className="pt-1"/> <input type="search" className="w-full border-none outline-none px-2 py-1"/>
        </div>
      </div>

      <div className="py-10 w-full px-4 xl:px-20  grid grid-cols-1 md:grid-cols-2  gap-6 lg:grid-cols-3  xl:grid-cols-4 items-center justify-center">
        {ExamsCategory.map((exam,index)=>{
          return <CategoryCard key={index} name={exam.name} url={exam.url} image={exam.image}/>
        })}
       

      </div>

      <div className="h-73"></div>
     </div>
  </main>
  );
}
