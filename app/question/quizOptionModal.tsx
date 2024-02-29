"use client"
import CustomModal from "@/components/modal";

import { useState } from "react";
interface CustomModalProps{
  onRightAnswer:()=>void;
  onCompleteAnswer:()=>void;
}

const QuizOption:React.FC<CustomModalProps> = ({onCompleteAnswer,onRightAnswer}) => {
  const [isOpen, setOpen] = useState(false);
 
  return (<CustomModal label={"Start Quiz"} title={"Select Quiz Option"} setOpen={() => setOpen((prev) => !prev)} isOpen={isOpen}>

      <div className="p-10 flex flex-col gap-4">
        <button
          onClick={onRightAnswer}
          className="text-white bg-green-500 px-4 py-2 rounded-md mr-2 hover:bg-green-600 focus:outline-none"
        >
          Check Right Answer Now!
        </button>
        <button
          onClick={onCompleteAnswer}
          className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Show Answers After Quiz
        </button>
      </div>

    </CustomModal>
  );
};

export default QuizOption;
