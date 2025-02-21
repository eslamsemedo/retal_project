import { SensorData } from '@/app/page'
import React from "react";
import {
  FaThermometerHalf,
  FaTint,
  FaHeartbeat,
  FaLungs,
  FaThermometerFull,
} from "react-icons/fa";

export default function Monitor({ data }: { data: SensorData }) {

  // const d = data
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-4 text-gray-800">
      <h2 className="text-center text-xl font-semibold mb-4 ">
        ESP32 Patient Health Monitoring
      </h2>

      <div className="flex items-center mb-3">
        <FaThermometerHalf className="text-blue-500 mr-2 text-xl" />
        <span className="flex-1 ">Room Temperature</span>
        <span className="font-bold">{data.temp}°C</span>
      </div>

      <div className="flex items-center mb-3">
        <FaTint className="text-blue-500 mr-2 text-xl" />
        <span className="flex-1">Room Humidity</span>
        <span className="font-bold">{data.humidity}%</span>
      </div>

      <div className="flex items-center mb-3">
        <FaHeartbeat className="text-blue-500 mr-2 text-xl" />
        <span className="flex-1">Room Pressure</span>
        <span className="font-bold">{data.pressure} BPM</span>
      </div>


    </div>
  )
}
