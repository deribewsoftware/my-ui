"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Questions } from "@/lib/questions";
import {  useState } from "react";





const QuestionPage = () => {
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [isSelectedAll,setSelectedAll]=useState(false);
  const [score, setScore] = useState(0);
const [selectedChoices, setSelectedChoices] = useState<any>({});

const onSelectionChanged = (questionId:number, choiceIndex:string, isAnswer:boolean) => {
  const updatedChoices = {
    ...selectedChoices,
    [questionId]: {
      choiceIndex,
      isCorrect: isAnswer,
    },
  };
  setSelectedChoices(updatedChoices);
 
  

  // Calculate score
  const newScore = Object.values(updatedChoices).reduce(
    (acc:number, choice:any) => (choice.isCorrect ? acc + 1 : acc),
    0
  );
  setScore(newScore);
};

const onSubmit=()=>{
  setFeedbackVisible(true);
  setSelectedAll(true);
}


console.log("selected data",selectedChoices)
  return ( <>
  <div className="fixed z-50 w-full shadow-md h-12 w-full bg-white flex gap-4 justify-evenly">
    <div className="">home</div>
    <div className="">home</div>
    <div className="">home</div>
    <div className="">home</div>
  </div>
  
  <div className="flex relative justify-center lg:justify-start lg:px-6 xl:px-20 2xl:px-0 2xl:justify-center w-full min-h-screen py-10">
    <div className="lg:hidden fixed right-0 top-14 bg-white shadow-xl z-50 p-1 md:p-2 rounded-l-full border-l-2 ">
      <p className="text-sm md:text-lg font-bold text-green-500 ">content</p>
    </div>

    <div className="w-full md:w-11/12 lg:w-7/12 xl:w-7/12 2xl:w-6/12 2xl:mr-20 border-x-2 border-double p-4 bg-white border-gray-300   flex flex-col gap-6">
    <div className="flex justify-end p-4">
      <div className="">
        <p>{score}/{Questions.length}</p>
      </div>
  <button
    onClick={() => {
      setFeedbackVisible(true);
    }}
    className="text-white bg-green-500 px-4 py-2 rounded-md mr-2 hover:bg-green-600 focus:outline-none"
  >
    Check Right Answer Now!
  </button>
  <button
    onClick={() => {
      setFeedbackVisible(false);
    }}
    className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
  >
    Show Answers After Quiz
  </button>
</div>

      {
        Questions.map((question:any,index)=>{
        return <div key={index} className="">

<div className="flex border-b border-double border-green-600 justify-between">
        <p className="text-xl font-bold">{index+1}</p>
        <p className="text-gray-500 text-sm">{question.year}</p>
      </div>
      <p className="p-2">{question.title}</p>
      <div className="p-2 space-y-2">
        {
          question.chooses.map((choice:any,ind:number) =>{
            return <div key={ind}   
            className={`flex gap-2 p-2 ${
              (feedbackVisible&&selectedChoices[question.id]&& choice.isAnswer)&&'bg-green-200'||isSelectedAll&& choice.isAnswer&&'bg-green-200'
            } ${
              selectedChoices[(question.id)]?.choiceIndex === ind.toString() &&feedbackVisible&&
              selectedChoices[(question.id)]?.isCorrect
                ? 'bg-green-200'
                : feedbackVisible&&selectedChoices[(question.id)]?.choiceIndex === ind.toString()
                ? 'bg-red-200'
                : ''
            }`}>
             <button
             disabled={(selectedChoices[question.id]&&feedbackVisible)||isSelectedAll}
    onClick={() => {
      onSelectionChanged(
        parseInt(question.id),
        ind.toString(),
        choice.isAnswer
      );
    }}
    className={`h-4 w-4 disabled:cursor-not-allowed disabled:outline-blue-400  outline outline-2 border-2 border-white outline-blue-500 rounded-full  ${
      selectedChoices[question.id]?.choiceIndex === ind.toString()
        ? 'bg-blue-400 disabled:bg-blue-300'
        : 'bg-white'
    }`}
  >
    
  </button>
            <p>{choice.text}</p>
          </div>
          })
        }
       
      </div>
      {
  (selectedChoices[question.id] && feedbackVisible) || isSelectedAll ? (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className="hover:no-underline">Explanation</AccordionTrigger>
        <AccordionContent>
          <div className="p-2 bg-green-50">
            <p>{question.explanation}</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ) : (
    ''
  )
}




        </div>
        })
      }


      <div className="flex justify-end p-4 ">
      <button 
      onClick={onSubmit}
       className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
      </div>
      
    </div>

    <div className="fixed  hidden lg:block top-20 right-4">
      <div className=" w-[400px] h-[400px] bg-white rounded-[20px]"></div>
    </div>
  </div> </>);
}
 
export default QuestionPage;