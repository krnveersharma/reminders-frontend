"use client"
import React from "react";
import { useRouter } from "next/navigation";


type Props={
    name:string
    redirect:string
}
const DashBoardBlock=({name,redirect}:Props)=>{
    const router=useRouter();

    return(
        <div className="flex items-center justify-center h-[40px] hover:bg-blue-500 hover:bg-[#3b82f6] cursor-pointer" onClick={()=>router.push(redirect)}>
            {name}
        </div>
    )
}

export default DashBoardBlock;