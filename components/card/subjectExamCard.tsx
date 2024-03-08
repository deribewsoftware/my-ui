import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Biology from "../../public/biology.png"
interface SubjectExamCardProps{
  subject:string;
  url:string;
  cover:any;
}
const SubjectExamCard:React.FC<SubjectExamCardProps>= ({subject,url,cover}) => {
  return (
    <Link href={`/exams/EUEE/${url}`}  className=" text-center flex no-underline block w-full space-y-2 md:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    
    <div className="">
      <Image height={100} width={100} src={cover} alt={subject}/>
    </div>
 
      <div className="flex flex-col w-full items-center gap-2 ">
      <h1 className='text-md font-semibold'>{subject} Exams</h1>
      <p className='text-gray-500 text-sm dark:text-gray-400'>3000 questions</p>
      </div>

  
  

  
    </Link>
  )
}

export default SubjectExamCard