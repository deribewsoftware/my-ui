'use client'
import { courses } from '@/lib/course';
import { useEffect, useState } from 'react';
import { BarChart, Bar, CartesianGrid, Tooltip, Legend, YAxis, XAxis, Rectangle, ResponsiveContainer } from 'recharts'


interface MonthlyData {
  name: string;
  courses: number;

}

export default function BarsTest() {


 

  const [monthlyData, setMonthlyData] = useState<MonthlyData[]>([]);

  useEffect(() => {
    // Assuming `courses` is an array of course instances
    const monthlyData: MonthlyData[] = Array.from({ length: 12 }, (_, index) => {
      const monthIndex = index + 1;
      const monthName = new Date(2022, monthIndex - 1, 1).toLocaleString('default', { month: 'short' });
      const coursesInMonth = courses.filter(
        (course) => parseInt(course.createdAt.split('-')[1]) === monthIndex
      );

      const totalPrices = coursesInMonth.reduce((sum, course) => sum + course.price, 0);

      return { name: monthName, courses: coursesInMonth.length};
    });

    setMonthlyData(monthlyData);
  }, []);
  return (
    
    <ResponsiveContainer minWidth={800} height={500} >
      <BarChart
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
     width={1000} height={500} data={monthlyData}
    >
        <Tooltip />
      <Bar dataKey="courses" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />}  />
     
      <CartesianGrid strokeDasharray="3 3" />
    
      <Legend/>
      <YAxis/>
      <XAxis dataKey='name'/>
    </BarChart>
    </ResponsiveContainer>
  )
}


