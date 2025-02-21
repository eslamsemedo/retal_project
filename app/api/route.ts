
import { NextResponse } from "next/server";

export interface DataRequestBody {
  pressure: string;
  temp: string;
  humidity: string;
}

declare global {
  interface Global {
    pressure: string;
    temp: string;
    humidity: string;
  }
}
export async function GET() {
  return NextResponse.json(
    {
      pressure: (globalThis as any).pressure,
      temp: (globalThis as any).temp,
      humidity: (globalThis as any).humidity
    }
  )
}

export async function POST(request: Request) {
  const { pressure, temp, humidity }: DataRequestBody = await request.json();

  (globalThis as any).pressure = pressure;
  (globalThis as any).temp = temp;
  (globalThis as any).humidity = humidity;


  return NextResponse.json({ message: "done" })
}
