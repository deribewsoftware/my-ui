"use client"
import MainLayout from '@/components/layouts/mainLayout'
import SubLayout from '@/components/layouts/SubLayout'
import React from 'react'


const PadfPage = () => {
  
  return ( <MainLayout>

      <SubLayout>
      <div className="w-full">
          <embed 
          className='w-full'
          title="Embedded PDF"

           src="https://www.westernsydney.edu.au/__data/assets/pdf_file/0008/1082807/Types_of_exams.pdf#zoom=85&scrollbar=0&toolbar=0&navpanes=0" 
           style={{ height: "100vh"}} />
        </div>
      
      </SubLayout>
    </MainLayout>
  )
}

export default PadfPage