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
    2023: 9800,
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
        </div>
  )
}

export default FinanceChartTrumpalaike