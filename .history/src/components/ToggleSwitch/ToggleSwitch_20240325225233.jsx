import React, { useState } from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  console.log("Toggle");

  const [currentTemperatureUnit, handleToggleSwitchChange] = useState("F");

  const handleChange = (e) => {
    if (currentTemperatureUnit === "F") handleToggleSwitchChange("C")
    if (currentTemperatureUnit === "C") handleToggleSwitchChange("F")
  }

  console.log(currentTemperatureUnit)
  return (
    <label className="switch">
      <input
        className="switch__box"
        type="checkbox"
        onChange={handleChange}
      />
        <span className={currentTemperatureUnit === "C" ? "switch__slider switch__slider-" : "switch__slider switch__slider-C"}></span>
      <p className={`switch__temp-F ${currentTemperatureUnit === "F" && "switch__active"}`}>F</p>
      <p className={`switch__temp-C ${currentTemperatureUnit === "C" && "switch__active"}`}>C</p>
    </label>
  )
}

export default ToggleSwitch;