"use client"

import Image from "next/image"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Sau',
    2024: 4000,
    2023: 2400,
  },
  {
    name: 'Vas',
    2024: 3000,
    2023: 1398,
  },
  {
    name: 'Kov',
    2024: 2000,
    2023: 1800,
  },
  {
    name: 'Bal',
    2024: 2780,
    2023: 3908,
  },
  {
    name: 'Geg',
    2024: 1890,
    2023: 4800,
  },
  {
    name: 'Bir',
    2024: 2390,
    2023: 3800,
  },
  {
    name: 'Lie',
    2024: 3490,
    2023: 4300,
  },
  {
    name: 'Rug',
    2024: 3490,
    2023: 4300,
  },
  {
    name: 'Rug',
    2024: 3490,
    2023: 4300,
  },
  {
    name: 'Spa',
    2024: 3490,
    2023: 4300,
  },
  {
    name: 'Lap',
    2024: 3490,
    2023: 4300,
  },
  {
    name: 'Gru',
    2024: 3490,
    2023: 4300,
  },
];

const FinanceChartTrumpalaike = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Trumpalaikės nuomos statistika</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20}/>
            </div>
            <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis dataKey="name" 
          axisLine={false}
          tick={{fill:"#d1d5db"}}
          tickLine={false}
          tickMargin={10}/>
          <YAxis axisLine={false}
          tick={{fill:"#d1d5db"}}
          tickLine={false}
          tickMargin={15}/>
          <Tooltip />
          <Legend 
          align="center"
          verticalAlign="top"
          wrapperStyle={{paddingTop: "10px",paddingBottom:"30px"}}/>
          <Line 
          type="monotone" 
          dataKey="2024" 
          stroke="#C3EBFA"
          strokeWidth={5}
          />
          <Line 
          type="monotone" 
          dataKey="2023" 
          stroke="#CFCEFF" 
          strokeWidth={5}/>
        </LineChart>
      </ResponsiveContainer>
        </div>
  )
}

export default FinanceChartTrumpalaike