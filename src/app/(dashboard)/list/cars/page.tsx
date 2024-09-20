import Pagination from "@/components/Pagination"
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch"
import { carsData, role } from "@/lib/data";
import Image from "next/image"
import Link from "next/link";

type Cars = {
  id:number;
  automobilioNumeris:string;
  photo:string;
  marke:string;
  modelis:string;
  pagaminimoMetai:string;
  automobilioVieta:string;
  skyrius:string;
  uzimtumas:string;
}

const columns = [
  {
    header:"Info",
    accessor:"info" 
  },
  {
    header:"Automobilio numeris",
    accessor:"automobilioNumeris",
    className:"hidden md:table-cell" 
  },
  {
    header:"Pagaminimo metai",
    accessor:"pagaminimoMetai",
    className:"hidden md:table-cell" 
  },
  {
    header:"Automobilio vieta",
    accessor:"automobilioVieta",
    className:"hidden md:table-cell" 
  },
  {
    header:"Skyrius",
    accessor:"skyrius",
    className:"hidden lg:table-cell" 
  },
  {
    header:"Užimtumas",
    accessor:"uzimtumas",
    className:"hidden lg:table-cell" 
  },
  {
    header:"Actions", accessor:"action"
  }
];

const CarListPage = () => {
  const renderRow = (item:Cars) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <td className="flex items-center gap-4 p-4">
        <Image 
        src={item.photo} 
        alt="" 
        width={40} 
        height={40} 
        className="block md:hidden lg:block w-10 h-10 rounded-full object-cover"/>
    <div className="flex flex-col ">
      <h3 className="font-semibold">{item.marke}</h3>
      <p className="text-xs text-gray-500">{item.modelis}</p>
    </div>
  </td>
  <td className="hidden md:table-cell">{item.automobilioNumeris}</td>
  <td className="hidden md:table-cell">{item.pagaminimoMetai}</td>
  <td className="hidden md:table-cell">{item.automobilioVieta}</td>
  <td className="hidden lg:table-cell">{item.skyrius}</td>
  <td className="hidden lg:table-cell">{item.uzimtumas}</td>
  <td>
    <div className="flex items-center gap-2">
      <Link href={`/list/cars/${item.id}`}>
        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
          <Image src="/view.png" alt="" width={16} height={16}/>
        </button>
      </Link>
      {role === "admin" && (
        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
      <Image src="/delete.png" alt="" width={16} height={16}/>
      </button>
        )}
    </div>
  </td>
</tr>
  );

  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/*Viršutinė eilutė*/}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Visi automobiliai</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
        <TableSearch/>
        <div className="flex items-center gap-4 self-end">
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
            <Image src="/filter.png" alt="" width={14} height={14}/>
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
            <Image src="/sort.png" alt="" width={14} height={14}/>
          </button>
          {role === "admin" && <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
            <Image src="/plus.png" alt="" width={14} height={14}/>
          </button>}
          </div>
        </div>
      </div>
      {/*Auto sarašas*/}
      <Table columns={columns} renderRow={renderRow} data={carsData}/>
      {/*Puslapių numeracija*/}
      <Pagination/>
    </div>
  );
};

export default CarListPage