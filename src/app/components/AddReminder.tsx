"use client";
import React from "react";
import "../globals.css"
import { useRouter } from "next/navigation";
const AddReminder=()=>{
    const router=useRouter()

    return(
        <div className="h-[200px] w-[200px] bg-gray-200 flex justify-center items-center cursor-pointer" onClick={()=>router.push("/dashboard/add-reminder")}>
            <div className="text">+Add</div>
        </div>
    )
}

export default AddReminder;