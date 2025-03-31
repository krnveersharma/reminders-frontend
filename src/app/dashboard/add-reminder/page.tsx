"use client";
import React, { useRef, useState } from "react";
import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor";
import "../../globals.css"
const AddReminder = () => {
  const emailEditorRef = useRef<EditorRef>(null);
  const [showExtraInformation, setShowExtraInformation] = useState(false);
  const onReady: EmailEditorProps["onReady"] = (unlayer) => {};
  const [input, setInput] = useState({
    reciever_info:"",
    priority: "low",
    data: "",
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
        <input name="reciever_info" value={input?.reciever_info} onChange={handleChange}/>
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
            <button className="btn mt-4">Submit</button>
        </form>
      ) : (
        <>
          <div>
            <button onClick={exportHtml}>Export HTML</button>
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

export default AddReminder;
