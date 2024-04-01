import React, { useState } from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  console.log("Toggle");

  const [currentTemperatureUnit, handleToggleSwitchChange] = useState("C");

  const handleChange = (e) => {
    if (currentTemperatureUnit === "C") handleToggleSwitchChange("F")
    if (currentTemperatureUnit === "F") handleToggleSwitchChange("C")
  }

  console.log(currentTemperatureUnit)
  return (
    <label className="switch">
      <input
        className="switch__box"
        type="checkbox"
        onChange={handleChange}
      />
      <span className={currentTemperatureUnit === "F" ? "switch__slider-F"}></span>
      <p>F</p>
      <p>C</p>
    </label>
  )
}

export default ToggleSwitch;