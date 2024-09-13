import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"
import EventCalendar from "@/components/EventCalendar"

const ManagerPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col xl:flex-row'>
      {/*KAIRĖ*/}
      <div className="w-full xl:w-2/3">
      <div className="h-full bg-white p-4 rounded-md">
        <h1 className="text-xl font-semibold">Tvarkaraštis (Klaipėda)</h1>
        <BigCalendar/>
      </div>
      </div>
      {/*DEŠINĖ*/}
      <div className="w-full xl:w-1/3">
      <EventCalendar/>
      <Announcements/></div>
    </div>
  )
}

export default ManagerPage