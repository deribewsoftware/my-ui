
"use client"


import ChooseForm from "./chooseForm";
import { AiOutlineSave } from "react-icons/ai";
import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";


const FormPage = () => {

    const [questions,setQuestions]=useState<any[]>([])
    const [question,setQuestion]=useState<any>(
        {Q:"",
A:{
    choose:"",
    isAnswer:false,
},
B:{
    choose:"",
    isAnswer:false,
},

C:{
    choose:"",
    isAnswer:false,
},
D:{
    choose:"",
    isAnswer:false,
},
});
const {register,handleSubmit,formState:{errors}}=useForm<FieldValues>({
    defaultValues:{
        title:"",
        video:"",
        image:"",
        content:"",
        questions:[],
    }
})


const onAddQuestion=() => {
    
        setQuestions((prev:any)=>prev? [...prev,question]:[question])
        console.log("questions", questions)
       
};


console.log("questions", questions)



  return ( <div className="flex min-h-screen w-full  justify-center py-20">

    <div className="w-full lg:w-8/12 xl:w-7/12 xl:px-4 flex flex-col gap-10 border-y bg-white ">
       <div className="border-b border-double p-2 flex flex-wrap  justify-between w-full ">
        <h1 className="font-medium">Biology Grade 12</h1>
        <h5 className="font-medium text-gray-600">Indroduction of Biology</h5>

       </div>
       <h1 className="py-2 text-xl font-semibold">Create The Lesson of This Course</h1>

      

       <div className="flex flex-col px-4 gap-2 py-10">
        <div className="flex w-full justify-between pb-4">
          <h1 className="text-xl font-semibold">Add Question from this lesson</h1>
          <p className="text-gray-600">{questions.length} question</p>
        </div>

        <div className="w-full">
<textarea
onChange={(event)=>setQuestion({...question,Q:event.target.value})}
className="block 
p-2.5 w-full 
text-sm 
text-gray-900 
bg-gray-50 

rounded-lg 
border 
border-gray-300
 focus:ring-blue-500 
 focus:border-blue-500 
 dark:bg-gray-700 
 dark:border-gray-600 
 dark:placeholder-gray-400 
 dark:text-white 
 dark:focus:ring-blue-500 
dark:focus:border-blue-500
"
rows={4}
></textarea>



<div className={`p-4 flex flex-col gap-2 ${question.Q!==""? 'block':'hidden'}`}>

   <ChooseForm 
    onChange={(event) => setQuestion({ ...question, A:{ ...question.A,choose: event.target.value } })} 
    label="A"
    onAnswer={(event) => setQuestion({ ...question, A: {...question.A, isAnswer: event.target.value } })} />

   <ChooseForm 
    label="B"
   onChange={(event)=>setQuestion({...question,B:{...question.B,choose:event.target.value}})}
   onAnswer={(event) => setQuestion({ ...question, B: { ...question.B,isAnswer: event.target.value } })} 
   />
   

   <ChooseForm 
    label="C"
   onChange={(event)=>setQuestion({...question,C:{...question.C,choose:event.target.value}})}
   onAnswer={(event) => setQuestion({ ...question, C: {...question.C, isAnswer: event.target.value} })} 
   />

   <ChooseForm 
   label="D"
   onChange={(event)=>setQuestion({...question,D:{...question.D,choose:event.target.value}})}
   onAnswer={(event) => setQuestion({ ...question, D: {...question.D, isAnswer: event.target.value } })} 
   />
   
   <div className="w-full flex justify-end px-2 py-4">
    <button 
    onClick={onAddQuestion}
    className="
    flex gap-1 
    text-sm 
    text-gray-600
     bg-gray-200 
     border 
     border-gray-300 
     rounded-[10px]
     hover:bg-gray-600
     hover:text-white
     font-medium

     px-2 py-1"><AiOutlineSave className="mt-1"/> <p>save</p></button>
   </div>
</div>

        </div>
       </div>


    </div>
  </div> );
}
 
export default FormPage;