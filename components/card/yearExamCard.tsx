"use client"
import React from 'react'
import StartExamDialogue from '../startExamDialog'
import { useRouter } from 'next/navigation'
interface YearExamCardProps{

}
const YearExamCard = () => {
  const router=useRouter();
  return (
    <div  className="no-underline block w-full md:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
     <div className="flex flex-col gap-4 justify-center items-center p-2">
      <h1 className='text-lg font-semibold'>2016 E.C  Year Exams</h1>
      <StartExamDialogue onCheckRightAnswer={()=>{router.push('/exams/EUEE/Biology/2016')}} onShowAnswerAfterQuiz={()=>{router.push('/exams/EUEE/Biology/2016')}}/>
     </div>
    </div>
  )
}

export default YearExamCard
// href={`/exams/EUEE/Biology/2016`} 