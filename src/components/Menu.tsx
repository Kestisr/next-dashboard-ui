import Link from "next/link";
import Image from "next/image";
import { role } from "@/lib/data";

const menuItems = [
  {
    title: "MENIU",
    items: [
      {
        icon: "/home.png",
        label: "Pradžia",
        href: "/",
        visible: ["admin", "trumpalaikė", "klientai", "administracija","garažas"],
      },
      {
        icon: "/class.png",
        label: "Veiklos",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/subject.png",
        label: "Ilgalaikė",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/student.png",
        label: "Trumpalaikė",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/lesson.png",
        label: "Administracija",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/exam.png",
        label: "Garažas",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/teacher.png",
        label: "Automobiliai",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/parent.png",
        label: "Klientai",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map(i=>(
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">{i.title}</span>
          {i.items.map(item=>{
            if(item.visible.includes(role)){
              return (
                <Link 
                href={item.href} 
                key={item.label} 
                className="flex item-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight">
                <Image src={item.icon} alt="" width={20} height={20}/>
                <span className="hidden lg:block">{item.label}</span>
                </Link>
              )
            }
          })}
        </div>
      ))}
    </div>
  )
}

export default Menu