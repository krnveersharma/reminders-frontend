import React from "react";
import DashBoardBlock from "./DashBoardBlock";

const LeftBar = () => {
  return (
    <div className="w-[200px] h-full border-[1px] border-gray">
      <DashBoardBlock name={"Home"} redirect={"/dashboard"} />
      <DashBoardBlock name={"Reminders"} redirect={"/dashboard/reminders"} />
    </div>
  );
};

export default LeftBar;
