"use client";
import AddReminder from "@/app/components/AddReminder";
import DraftReminder from "@/app/components/DraftReminder";
import { getCookie } from "@/services/api";
import axios from "axios";
import React, { useEffect, useState } from "react";

export type ReminderDraft={
    ID:String;
    data:String;
    data_type:String;
    reminder_type:String;
}

const Reminders = () => {
  const [remindersDraft, setRemindersDraft] = useState<ReminderDraft[]>([]);
    const [selectedDraft,setSelectedDraft]=useState<ReminderDraft>()
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.SERVER}/reminder/get-drafts`,
          {
            headers: {
              Authorization: `Bearer ${getCookie("auth")}`,
            },
          }
        );
        setRemindersDraft(res?.data?.drafts);
      } catch (error) {
        console.log("error is:", error);
      }
    })();
  }, []);
  return (
    <>
    {selectedDraft?
        <DraftReminder selectedDraft={selectedDraft}/>
    :<div className="flex flex-wrap gap-4">
      <AddReminder />
      {remindersDraft.map((item:ReminderDraft,index) => (
        <div
        key={index}
          className="h-[200px] w-[200px] bg-gray-200 flex justify-center items-center cursor-pointer"
          onClick={()=>setSelectedDraft(item)}
        >draft</div>
      ))}
    </div>}
    </>
  );
};

export default Reminders;