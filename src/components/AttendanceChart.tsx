"use client"

import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    važiuoja: 12,
    stovi: 33,
  },
  {
    name: 'Tue',
    važiuoja: 14,
    stovi: 30,
  },
  {
    name: 'Wed',
    važiuoja: 18,
    stovi: 26,
  },
  {
    name: 'Thu',
    važiuoja: 20,
    stovi: 24,
  },
  {
    name: 'Fri',
    važiuoja: 19,
    stovi: 25,
  },
  {
    name: 'Sat',
    važiuoja: 17,
    stovi: 27,
  },
  {
    name: 'Sun',
    važiuoja: 27,
    stovi: 17,
  },
];

const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Trumpalaikė nuoma</h1>
            <Image src="/moreDark.png" alt='' width={20} height={20}/>
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <Tooltip contentStyle={{borderRadius:"10px",borderColor:"lightgray"}}/>
          <Legend 
          align="left" 
          verticalAlign="top" 
          wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}}
          />
          <Bar 
          dataKey="važiuoja" 
          fill="#FAE27C"
          legendType="circle"
          radius={[10,10,0,0]} 
          />
          <Bar 
          dataKey="stovi" 
          fill="#C3EBFA"
          legendType="circle"
          radius={[10,10,0,0]}  
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart