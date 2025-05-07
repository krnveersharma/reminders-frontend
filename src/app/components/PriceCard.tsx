import axios from "axios";
import React from "react";

interface PriceDetails {
  plan: string;
  price: string;
  lowReminders: string;
  mediumReminders: string;
  highReminders: string;
}

const PriceCard = ({
  plan,
  price,
  lowReminders,
  mediumReminders,
  highReminders,
}: PriceDetails) => {
  return (
    <div className="border-2 border-gray-200 rounded-2xl bg-white shadow-lg p-6 hover:shadow-xl transition duration-300 w-full max-w-sm mx-auto">
      <div className="text-xl font-bold text-center text-indigo-600 mb-2">{plan}</div>
      <div className="text-3xl font-semibold text-center text-gray-800 mb-4">{price}</div>

      <div className="border-t border-gray-200 my-4"></div>

      <div className="text-sm font-medium text-gray-500 uppercase mb-2">Benefits</div>
      <ul className="space-y-2 text-gray-700">
        <li>• {lowReminders} Low Reminders</li>
        <li>• {mediumReminders} Medium Reminders</li>
        <li>• {highReminders} Hgh Reminders</li>
      </ul>

      <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
      onClick={async(e)=>{
e.preventDefault();
try {
  const res=await axios.post(`${process.env.SERVER}/payments/create-order`,{
    
  })
} catch (error) {
  
}
      }}>
        Choose Plan
      </button>
    </div>
  );
};

export default PriceCard;
