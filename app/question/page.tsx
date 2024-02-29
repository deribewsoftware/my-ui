
import SubLayout from "@/components/layouts/SubLayout";
import MainLayout from "@/components/layouts/mainLayout";

import QuizClient from "./quizClient";
import Notes from "./note";
import QuizOption from "./quizOptionModal";






const QuestionPage = () => {
  


  return ( <>
  <div className="fixed z-50 w-full shadow-md h-12 w-full bg-white flex gap-4 justify-evenly">
    <div className="">home</div>
    <div className="">home</div>
    <div className="">home</div>
    <div className="">home</div>
  </div>
<MainLayout>
    <div className="lg:hidden fixed right-0 top-14 bg-white shadow-xl z-50 p-1 md:p-2 rounded-l-full border-l-2 ">
      <p className="text-sm md:text-lg font-bold text-green-500 ">content</p>
    </div>

<SubLayout>

<Notes/>
 

<QuizClient/>


    
      </SubLayout>

    <div className="fixed  hidden lg:block top-20 right-4">
      <div className=" w-[400px] h-[400px] bg-white rounded-[20px]"></div>
    </div>
    </MainLayout>
   </>);
}
 
export default QuestionPage;