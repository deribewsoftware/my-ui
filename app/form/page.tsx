
"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import ChooseForm from "./chooseForm";
import { AiOutlineSave } from "react-icons/ai";
import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
import { yearsExams } from "@/lib/years";
import TextEditor from "@/components/textEditor";


const FormPage = () => {

    const [questions,setQuestions]=useState<any[]>([])
    const [question,setQuestion]=useState<any>(
        {Q:"",
        year:"",
        explanation:"",
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
  const qData={
    lessonId:"lesson.id",
    year:question.year,
    explanation:"",
    title:question.Q,
    chooses:[question.A,question.B,question.C,question.D]
  
  }
    
        setQuestions((prev:any)=>prev? [...prev,qData]:[qData])



        setQuestion( {
          Q:"",
        year:"",
        explanation:"",
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
        })
       

       
};


console.log("questions", questions, 'here')



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
          <div className="p-4">
          <Select onValueChange={
            (value)=>setQuestion({...question,year:value})
          }>
      <SelectTrigger  className="w-[180px]">
        <SelectValue  placeholder="Select a Quizzes Year" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup onChange={
          ()=>{
            console.log('changed')
          }
        } >
          <SelectLabel>Select a Quizzes Year</SelectLabel>
         {yearsExams.map((year,index) =>{
         return  <SelectItem  key={index} value={year}>{year}</SelectItem >
         })}
          
        </SelectGroup>
      </SelectContent>
    </Select>
          </div>
<textarea
defaultValue={question?.Q}
onChange={(event)=>setQuestion({...question,Q:event.target.value})}
className={`block 
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
${question.year!==""? 'block':'hidden'}
`}
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
   <div className="p-4">
    <TextEditor/>
   </div>
   <div className="w-full flex justify-end px-2 gap-4 py-4">
   <button 
    onClick={onAddQuestion}
    className="
    flex gap-1 
    text-sm 
    text-gray-600
     bg-gray-400 
     border 
     border-gray-300 
     rounded-[10px]
     hover:bg-gray-600
     hover:text-white
     font-medium

     px-2 py-1">submit</button>
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

     px-2 py-1"><AiOutlineSave className="mt-1"/> <p>Add</p></button>
   </div>
</div>

        </div>
       </div>


    </div>
  </div> );
}
 
export default FormPage;