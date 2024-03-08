"use client"

import Banner from '@/components/banner'
import SubjectExamCard from '@/components/card/subjectExamCard'

import { universityDepartment } from '@/lib/universitydepartment'
import React, { useState } from 'react'
import { Check, ChevronsUpDown } from "lucide-react"
 
import { cn } from "@/lib/utils"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from '@/components/ui/button'
const ExitPage = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  return (<div className='min-h-screen w-full flex flex-col gap-10 '>
  <div className="p-4 md:p-6 lg:p-10 xl:p-20">
  <Banner>
     <div className="flex  justify-center items-center h-[200px]">
       <h1 className='text-2xl text-white  font-bold'>Ethiopian University Exit Exams</h1>
     </div>
   </Banner>
  </div>


<div className="">
<Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? universityDepartment.find((department) => department.department === value)?.department
            : "Select Your Department..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            { universityDepartment.map((department) => (
              <CommandItem
                key={department.department}
                value={department.department}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === department.department ? "opacity-100" : "opacity-0"
                  )}
                />
                {department.department}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
</div>
   <div className="flex justify-center p-4">
     <div className="w-full gap-4 lg:w-10/12 xl:w-8/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {universityDepartment.map((department,index)=>{
       return  <SubjectExamCard 
       key={index}
        subject={department.department}
        url={department.department}
        cover={department.image}
        />
      })}
      
     </div>
   </div>

 </div>
  )
}

export default ExitPage