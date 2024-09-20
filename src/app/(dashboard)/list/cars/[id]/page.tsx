import Image from "next/image"


const SingleCarPage = () => {
  return (
    <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
        {/* Kairė pusė */}
        <div className="w-full xl:w-2/3">
        {/*Viršus*/}
        <div className="flex flex-col lg:flex-row gap-4">
        {/*Automobilio info kortelė*/}
        <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
            <Image src="/cars/lvi278.webp" alt="" width={144} height={144} className="w-36 h-36 rounded-md object-cover"/>
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
            <h1 className="text-xl font-semibold">Toyota Yaris</h1>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
                <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                    <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                        <Image src="/date.png" alt="" width={14} height={14}/>
                        <span>2022</span>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                        <Image src="/blood.png" alt="" width={14} height={14}/>
                        <span>2025</span>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                        <Image src="/mail.png" alt="" width={14} height={14}/>
                        <span>54000 km</span>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                        <Image src="/phone.png" alt="" width={14} height={14}/>
                        <span>dfasdfxcvdf</span>
                    </div>
                </div>
            </div>            
        </div>
        {/*Informacinės kortelės*/}
        <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/*1 Kortelė*/}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[47%] xl:w-[45%] 2xl:w-[46%] ">
                <Image src="/singleAttendance.png" alt="" width={24} height={24} className="w-6 h-6"/>
                <div className="">
                    <h1 className="text-xl font-semibold">90%</h1>
                    <span className="text-sm text-gray-400">Kazkokia info</span>
                </div>
            </div>
            {/*2 Kortelė*/}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[47%] xl:w-[45%] 2xl:w-[46%] ">
                <Image src="/singleBranch.png" alt="" width={24} height={24} className="w-6 h-6"/>
                <div className="">
                    <h1 className="text-xl font-semibold">6</h1>
                    <span className="text-sm text-gray-400">Kita info</span>
                </div>
            </div>
            {/*3 Kortelė*/}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[47%] xl:w-[45%] 2xl:w-[46%] ">
                <Image src="/singleLesson.png" alt="" width={24} height={24} className="w-6 h-6"/>
                <div className="">
                    <h1 className="text-xl font-semibold">58</h1>
                    <span className="text-sm text-gray-400">Kita info</span>
                </div>
            </div>
            {/*4 Kortelė*/}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[47%] xl:w-[45%] 2xl:w-[46%] ">
                <Image src="/singleClass.png" alt="" width={24} height={24} className="w-6 h-6"/>
                <div className="">
                    <h1 className="text-xl font-semibold">150</h1>
                    <span className="text-sm text-gray-400">Kita info</span>
                </div>
            </div>
        </div>
        </div>
        {/*Apačia*/}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
            <h1>Papildoma informacija</h1>
        </div>
        </div>
        {/* Dešinė pusė */}
        <div className="w-full xl:w-1/3">r</div>
    </div>
  )
}

export default SingleCarPage