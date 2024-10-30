"use client"
import { usePathname, useRouter } from 'next/navigation'

import { House, SignOut, ChartLineUp } from 'phosphor-react';



export default function SideBar() {
    const pathname = usePathname()
    const router = useRouter()
    function goToPage(page) {
        router.push(page)
    }
    console.info(pathname)

    return (
        <div className="  gap-9 absolute left-0  min-h-screen min-w-18 p-2 flex justify-start items-center bg-[#2cf52c]
         text-white flex-col space-y-2">

            <div onClick={() => goToPage("/dashboard")} className={pathname === "/dashboard" ? "bg-green-800 p-2 rounded-md" : "cursor-pointer"}>
                <House size={30} />


            </div>

            <div onClick={() => goToPage("/investimentos")} className={pathname === "/investimentos" ? "bg-green-600 p-2 rounded-md" : "cursor-pointer"}>
                <ChartLineUp size={30} />


            </div>

            <div onClick={() => {
                if (window.confirm("Tem certeza de que deseja sair?")) {
                    goToPage("/")
                }
            }}
                className="cursor-pointer">
                <SignOut size={30} color='white' />
            </div>

        </div>


    )
}