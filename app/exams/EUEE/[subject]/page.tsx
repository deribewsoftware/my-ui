import Banner from '@/components/banner'
import SubjectExamCard from '@/components/card/subjectExamCard'
import YearExamCard from '@/components/card/yearExamCard'
import React from 'react'

const ExamSubjectPage = () => {
  return (
    <div className='min-h-screen w-full flex flex-col gap-10 '>
     <div className="p-4 md:p-6 lg:p-10 xl:p-20">
     <Banner>
        <div className=" h-[200px]">
          <h1 className='text-2xl font-bold'>Biology Entrance Exams</h1>
        </div>
      </Banner>
     </div>

      <div className="flex justify-center p-4">
        <div className="w-full gap-4 lg:w-10/12 xl:w-8/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
         <YearExamCard/>
         <YearExamCard/>
         <YearExamCard/>
         <YearExamCard/>
         <YearExamCard/>
         <YearExamCard/>
         <YearExamCard/>
         <YearExamCard/>
          
        </div>
      </div>

    </div>
  )
}

export default ExamSubjectPage