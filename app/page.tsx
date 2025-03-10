// app/live/LiveClient.tsx
'use client';

import Monitor from '@/components/monitor';
// import { cookies } from 'next/headers';
import { useState, useEffect } from 'react';

export interface SensorData {
  pressure: string;
  temp: string;
  humidity: string;
}

export default function Home() {

  const [sensorData, setSensorData] = useState<SensorData>({
    pressure: "0",
    temp: "0",
    humidity: "0",
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use a relative URL if your page is also served from the same domain:
        const res = await fetch(`https://retal-project-opal.vercel.app/api`, {
          // credentials: "include",
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
          },

        })
        if (!res.ok) throw new Error(`Error: ${res.status} ${res.statusText}`);
        const data: SensorData = await res.json();
        setSensorData(data);
        // console.log(data)
      } catch (err: any) {
        setError(err.message);
      }
    };

    // Initial fetch
    fetchData();

    // Poll every 3 seconds
    const intervalId = setInterval(fetchData, 3000);
    return () => clearInterval(intervalId);
  }, []);


  if (error) {
    return <div style={{ color: 'red' }}>Error: {error}</div>;
  }
  // const pressure = (await cookies()).get("pressure")?.value || "N/A";
  // const temp = (await cookies()).get("temp")?.value || "N/A";
  // const humidity = (await cookies()).get("humidity")?.value || "N/A";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* {(globalThis as any).pressure} {(globalThis as any).temp} {(globalThis as any).humidity} */}
      {/* {pressure} {temp} {humidity} */}
      {/* <p>Humidity: {sensorData.humidity}</p>
      <p>Pressure: {sensorData.pressure}</p>
      <p>Temperature: {sensorData.temp}</p> */}
      <Monitor data={sensorData} />
    </div>
  );
}
