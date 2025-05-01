"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import LiveCount from "@/app/components/LiveCount"
import "@/app/globals.css"
import SevenDaysReminders from "../components/SevenDaysReminders";
import PrevUserReminders from "../components/PrevUserReminders";
const DashBoard = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <LiveCount />

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">All Reminders</h2>
          <div className="bg-gray-50 p-4 rounded-2xl shadow-sm">
            <SevenDaysReminders />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Reminders</h2>
          <div className="bg-gray-50 p-4 rounded-2xl shadow-sm">
            <PrevUserReminders />
          </div>
        </div>
      </div>
    </div>
  );
};


export default DashBoard;
