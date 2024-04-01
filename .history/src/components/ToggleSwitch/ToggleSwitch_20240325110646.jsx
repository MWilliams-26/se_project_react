import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  console.log("Toggle");

  const handleChange = () => {
    console.log(e);
  }

  }
  return (
    <label className="switch">
      <input className="switch__box" type="checkbox" />
    </label>
  )
}

export default ToggleSwitch;