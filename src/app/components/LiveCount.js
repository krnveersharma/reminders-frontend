"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "@/app/globals.css";
const LiveCount = () => {
  const [remindersCount, setRemindersCount] = useState(0);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.SERVER}/dashboard/reminder-count`
        );
        setRemindersCount(res?.data?.message);

        const eventSource = new EventSource(
          `${process.env.SERVER}/sse-dashboard/get-total-reminders`
        );

        eventSource.onmessage = (event) => {
          const newCount = parseInt(event.data);
          console.log("new count is:", newCount);
          setRemindersCount(newCount);
        };

        eventSource.onerror = (error) => {
          console.log("SSE connection error:", error);
          eventSource.close();
        };

        return () => {
          eventSource.close();
        };
      } catch (error) {}
    })();
  }, []);
  return (
    <div className="flex justify-end">
      <div className="flex items-center gap-2">
        <div className="blinking-circle"></div>
        <div>{remindersCount} reminders</div>
      </div>
    </div>
  );
};

export default LiveCount;
