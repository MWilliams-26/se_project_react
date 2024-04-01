import React, { useContext, useState } from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  // console.log("Toggle");

  // const [currentTemperatureUnit, handleToggleSwitchChange] = useState("F");

  // const handleChange = (e) => {
  //   if (currentTemperatureUnit === "F") handleToggleSwitchChange("C")
  //   if (currentTemperatureUnit === "C") handleToggleSwitchChange("F")
  // }

  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext{ CurrentTemperatureUnitContext }

  console.log(currentTemperatureUnit)
  return (
    <label className="switch">
      <input
        className="switch__box"
        type="checkbox"
        onChange={handleChange}
      />
      <span className={currentTemperatureUnit === "C" ? "switch__slider switch__slider-C" : "switch__slider switch__slider-F"}></span>
      <p className={`switch__temp-C ${currentTemperatureUnit === "C" && "switch__active"}`}>C</p>
      <p className={`switch__temp-F ${currentTemperatureUnit === "F" && "switch__active"}`}>F</p>
    </label>
  )
}

export default ToggleSwitch;