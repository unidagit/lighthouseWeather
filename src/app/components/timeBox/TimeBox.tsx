"use client";
import { useEffect, useState } from "react";
import { FiClock } from "react-icons/fi";
// import { MdOutlineDateRange } from "react-icons/md";
import dayjs from "dayjs";

export default function TimeBox() {
  // const today = dayjs(); //현재 시간, 날짜
  // const formattedDate = today.format("YYYY/MM/DD");
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(dayjs().format("HH:mm:ss"));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-5 bg-gray-800 h-40 rounded-2xl">
      <p className="text-xl font-semibold text-white ">시간</p>
      {/* <div className="flex items-center ">
        <MdOutlineDateRange className="text-3xl text-white" />
        <p className="text-xs text-white">{formattedDate}</p>
      </div> */}
      <div className="flex items-center mt-10 gap-4">
        <FiClock className="text-3xl text-white " />
        <p className="text-2xl text-white">{time}</p>
      </div>
    </div>
  );
}
