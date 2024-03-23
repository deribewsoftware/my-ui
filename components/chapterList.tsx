import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { chapterList } from "@/lib/chapterList"

export function ChapterList() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {chapterList.map((chapter,index)=>{
        return <AccordionItem key={index} value={`${index}`}>
        <AccordionTrigger>
        <h5>{chapter.title}</h5>
        </AccordionTrigger>
        <AccordionContent>
        <div className="flex flex-col">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Lessons</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Titles</th>
              <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
           {
            chapter.lessons.map((lesson,ind)=>{
              return  <tr key={ind} className="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Lesson: {ind+1}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{lesson.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Delete</button>
              </td>
            </tr>
            })
           }

           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        </AccordionContent>
      </AccordionItem>
      
      })}
    </Accordion>
  )
}
