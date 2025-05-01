"use client"
import React, { useState } from "react";
import DashBoardBlock from "./DashBoardBlock";

const LeftBar = () => {
  const [currentTab,setCurrentTab]=useState("Home")
  return (
    <div className="h-full bg-white border-r border-gray-200 shadow-sm p-4 space-y-2">
      <DashBoardBlock name="Home" redirect="/dashboard" currentTab={currentTab} setCurrentTab={setCurrentTab}/>
      <DashBoardBlock name="Reminders" redirect="/dashboard/reminders" currentTab={currentTab} setCurrentTab={setCurrentTab}/>
    </div>
  );
};

export default LeftBar;
