"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { getCookie } from "@/services/api";

interface DayCount {
  day: string;
  count: number;
}

interface MonthCount {
  month: string;
  count: number;
}

const SevenDaysReminders = () => {
  const [sevenDaysReminders, setSevenDaysReminders] = useState([]);
  const [monthlyReminders, setMonthlyReminders] = useState([]);


  useEffect(() => {
    (async () => {
      Promise.all([
        await axios.get(`${process.env.SERVER}/dashboard/reminder-seven-days`),
        await axios.get(`${process.env.SERVER}/dashboard/reminder-last-year`),

      ]).then(([res1, res2]) => {
        setSevenDaysReminders(res1?.data?.message);
        setMonthlyReminders(res2?.data?.message);
      });
      
      
    })();
  }, []);
  return (
    <div className="flex gap-4">
      <div className="flex flex-col justify-center items-center">
        <LineChart
          xAxis={[
            {
              data: sevenDaysReminders?.map((item: DayCount) => item.day),
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: sevenDaysReminders?.map((item: DayCount) => item.count),
            },
          ]}
          height={200}
          width={400}
        />
  <p className="text-center text-sm text-gray-700 mt-2">7 day reminders</p>
  </div>

      <div className="flex flex-col justify-center items-center">
        <LineChart
          xAxis={[
            {
              data: monthlyReminders?.map((item: MonthCount) => item.month),
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: monthlyReminders?.map((item: MonthCount) => item.count),
            },
          ]}
          height={200}
          width={400}
        />
          <p className="text-center text-sm text-gray-700 mt-2">Monthly Registered reminders</p>
      </div>
    </div>
  );
};

export default SevenDaysReminders;
