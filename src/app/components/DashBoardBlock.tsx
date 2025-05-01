"use client"
import React from "react";
import { useRouter } from "next/navigation";
import { SetStateAction,Dispatch } from "react";

type Props={
    name:string
    redirect:string,
    currentTab: string,
    setCurrentTab:Dispatch<SetStateAction<string>>
}

const DashBoardBlock = ({ name, redirect ,currentTab,setCurrentTab}: Props) => {
    const router = useRouter();
  
    return (
      <div
        className={`px-4 py-2 rounded-lg hover:bg-blue-100 text-gray-700 font-medium cursor-pointer transition-all duration-150 ${currentTab==name?"bg-blue-100":""}`}
        onClick={() => {
          setCurrentTab(name)
          router.push(redirect)}}
      >
        {name}
      </div>
    );
  };
  

export default DashBoardBlock;