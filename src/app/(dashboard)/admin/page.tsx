import AttendanceChart from "@/components/AttendanceChart"
import CountChart from "@/components/CountChart"
import FinanceChartIlgalaike from "@/components/FinanceChartIlgalaike"
import FinanceChartTrumpalaike from "@/components/FinanceChartTrumpalaike"
import FinanceChartVeiklos from "@/components/FinanceChartVeiklos"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/*KAIRE*/}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
      {/*VEIKLU KORTELES */}
      <div className="flex gap-4 justify-between flex-wrap">
        <UserCard type="trumpalaikė nuoma"/>
        <UserCard type="ilgalaikė nuoma"/>
        <UserCard type="veiklos nuoma"/>
        <UserCard type="garažas"/>
      </div>
      {/*CENTRINE ATASKAITA*/}
      <div className="flex gap-4 flex-col lg:flex-row">
        {/*AUTO PARKAS*/}
        <div className="w-full lg:w-1/3 h-[450px]">
        <CountChart/>
        </div>
        {/*TRUMPALAIKĖ NUOMA*/}
        <div className="w-full lg:w-2/3 h-[450px]"><AttendanceChart>
           </AttendanceChart>
          </div>
      </div>
      {/*ILGALAIKĖ NUOMA*/}
      <div className="w-full h-[500px]">
        <FinanceChartTrumpalaike/>
      </div>
      {/*ILGALAIKĖ NUOMA*/}
      <div className="w-full h-[500px]">
        <FinanceChartIlgalaike/>
      </div>
      {/*VEIKLOS NUOMA*/}
      <div className="w-full h-[500px]">
        <FinanceChartVeiklos/>
      </div>
      </div>
      {/*RIGHT*/}
      <div className="w-full lg:w-1/3">r</div>
    </div>
  )
}

export default AdminPage