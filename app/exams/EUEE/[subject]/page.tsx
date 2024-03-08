import Banner from '@/components/banner'

import YearExamCard from '@/components/card/yearExamCard'
import { ExamsYear } from '@/lib/examsYear'
import React from 'react'

const ExamSubjectPage = ({params}:{params:{subject:string}}) => {
  return (
    <div className='min-h-screen w-full flex flex-col gap-10 '>
     <div className="p-4 md:p-6 lg:p-10 xl:p-20">
     <Banner>
        <div className="flex  justify-center items-center h-[200px]">
          <h1 className='text-2xl  text-white font-bold'>{params.subject} Entrance Exams</h1>
        </div>
      </Banner>
     </div>

      <div className="flex justify-center p-4">
        <div className="w-full gap-4 lg:w-10/12 xl:w-8/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
         {ExamsYear.map((year,index)=>{
          return <YearExamCard key={index} year={year} subject={params.subject}/>
         })}
         
          
        </div>
      </div>

    </div>
  )
}

export default ExamSubjectPage