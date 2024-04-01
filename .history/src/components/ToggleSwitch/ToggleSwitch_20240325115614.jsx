import React, { useState } from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  console.log("Toggle");

  const handleChange = (e) => {
    console.log(e);
  }

  const [currentTemperatureUnit, handleToggleSwitchChange] = useState("C");

  return (
    <label className="switch">
      <input
        className="switch__box"
        type="checkbox"
        onChange={handleChange}
      />
      <span></span>
      <p>F</p>
      <p>C</p>
    </label>
  )
}

export default ToggleSwitch;