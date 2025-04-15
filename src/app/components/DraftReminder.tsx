"use client";
import React, { useRef, useState } from "react";
import { EditorRef, EmailEditorProps } from "react-email-editor";
import "../globals.css";
import dynamic from "next/dynamic";
import axios from "axios";
import { getCookie } from "@/services/api";
import { ReminderDraft } from "../dashboard/reminders/page";

const EmailEditor = dynamic(() => import("react-email-editor"), { ssr: false });

const DraftReminder = ({selectedDraft}:{selectedDraft:ReminderDraft}) => {
  const emailEditorRef = useRef<EditorRef>(null);
  const [showExtraInformation, setShowExtraInformation] = useState(false);
  const onReady: EmailEditorProps["onReady"] = (unlayer) => {};
  const [input, setInput] = useState({
    reciever_info: "",
    priority: "low",
    data: selectedDraft?.data,
    data_type: "html",
    reminder_type: "email",
    date: "",
    time: "",
  });

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const { design, html } = data;
      setShowExtraInformation(true);
      setInput((prev) => ({
        ...prev,
        data: html,
      }));
    });
  };

  const handleChange = (e: any) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="h-full">
      {showExtraInformation ? (
        <form className="form-container">
          <div> Reciever Email</div>
          <input
            name="reciever_info"
            value={input?.reciever_info}
            onChange={handleChange}
          />
          <div>Priority</div>
          <select
            name="priority"
            value={input?.priority}
            onChange={handleChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">Hight</option>
          </select>
          <div>Data Type</div>
          <select disabled>
            <option value={"html"}>HTML</option>
          </select>
          <div>Date</div>
          <input
            name="date"
            value={input?.date}
            onChange={handleChange}
            type="date"
          />
          <div>Time</div>
          <input
            name="time"
            value={input?.time}
            onChange={handleChange}
            type="time"
          />
          <button
            className="btn mt-4"
            onClick={async (e) => {
              e.preventDefault();
              try {
                const res = await axios.post(
                  `${process.env.SERVER}/reminder/add-reminder`,
                  {
                    reciever_info: input?.reciever_info,
                    priority: input?.priority,
                    data: input?.data,
                    data_type: input?.data_type,
                    reminder_type: input?.reminder_type,
                    date: input?.date,
                    time: input?.time,
                  },
                  {
                    headers: {
                      Authorization: `Bearer ${getCookie("auth")}`,
                    },
                  }
                );
              } catch (error) {
                console.log("Error is:", error);
              }
            }}
          >
            Submit
          </button>
        </form>
      ) : (
        <>
          <div className="flex gap-2">
            <button
              className="bg-gray-400 p-2 rounded-md text-white"
              onClick={async (e) => {
                try {
                  let str=""
                  const unlayer = emailEditorRef.current?.editor;
                  unlayer?.exportHtml(async(data) => {
                    const { design, html } = data;
                    console.log("data is:",html)
                    const res = await axios.post(
                      `${process.env.SERVER}/reminder/add-draft`,
                      {
                        data: html,
                        data_type: input?.data_type,
                        reminder_type: input?.reminder_type,
                      },
                      {
                        headers: {
                          Authorization: `Bearer ${getCookie("auth")}`,
                        },
                      }
                    );
                  });
                } catch (error) {
                  console.log("Error is:", error);
                }
              }}
            >
              Save Draft
            </button>
            <button
              className="bg-blue-500 p-2 rounded-md text-white"
              onClick={exportHtml}
            >
              Export HTML
            </button>
          </div>

          <EmailEditor
            ref={emailEditorRef}
            onReady={onReady}
            minHeight={"100%"}
          />
        </>
      )}
    </div>
  );
};

export default DraftReminder;
