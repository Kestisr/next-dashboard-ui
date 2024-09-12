"use client"

import Image from "next/image"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Sau',
    2024: 13000,
    2023: 11000,
  },
  {
    name: 'Vas',
    2024: 13000,
    2023: 11398,
  },
  {
    name: 'Kov',
    2024: 12000,
    2023: 10500,
  },
  {
    name: 'Bal',
    2024: 15780,
    2023: 13908,
  },
  {
    name: 'Geg',
    2024: 15890,
    2023: 14800,
  },
  {
    name: 'Bir',
    2024: 12390,
    2023: 13800,
  },
  {
    name: 'Lie',
    2024: 16490,
    2023: 14300,
  },
  {
    name: 'Rug',
    2024: 16490,
    2023: 14300,
  },
  {
    name: 'Rug',
    2024: 15490,
    2023: 14300,
  },
  {
    name: 'Spa',
    2024: 16490,
    2023: 14300,
  },
  {
    name: 'Lap',
    2024: 16490,
    2023: 13300,
  },
  {
    name: 'Gru',
    2024: 16690,
    2023: 12300,
  },
];


const FinanceChartVeiklos = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
    <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Veiklos nuomos statistika</h1>
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

export default FinanceChartVeiklos