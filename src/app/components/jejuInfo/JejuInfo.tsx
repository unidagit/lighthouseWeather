import React from "react";
import TimeBox from "../timeBox/TimeBox";
import TemperatureBox from "../temperatureBox/TemperatureBox";
import WindDirectionBox from "../windDirectionBox/WindDirectionBox";
import WindSpeedBox from "../windSpeedBox/WindSpeedBox";

export default function JejuInfo() {
  return (
    <div className="">
      <h2>제주</h2>
      <div className="grid grid-cols-3 gap-4">
        <TimeBox />
        <WindDirectionBox />
        <WindSpeedBox />
        <TemperatureBox />
      </div>
    </div>
  );
}
