import { useState } from "react"
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ onClose, onAddItem, isOpen }) => {

  const [name, setName] = useState("");
  const [link, setUrl] = useState("");
  const [weatherType, setWeatherType] = useState("");

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  }

  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  }
  const handleWeatherTypeChange = (e) => {
    console.log(e.target.value);
    setWeatherType(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, link, weatherType });
  }


  return (
    <ModalWithForm
      isOpen={isOpen}
      title="New garment"
      buttonText="Add Garment"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{""}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{""}
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
          value={link}
          onChange={handleUrlChange}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label
          htmlFor="hot"
          className="modal__label modal__label_type_radio">
          <input id="hot" type="radio" className="modal__radio-input" name="weather-type" value="hot" onChange={handleWeatherTypeChange} /> Hot
        </label>
        <label
          htmlFor="warm"
          className="modal__label modal__label_type_radio">
          <input id="warm" type="radio" className="modal__radio-input" name="weather-type" value="warm" onChange={handleWeatherTypeChange} /> Warm
        </label>
        <label
          htmlFor="cold"
          className="modal__label modal__label_type_radio">
          <input id="cold" type="radio" className="modal__radio-input" name="weather-type" value="cold" onChange={handleWeatherTypeChange} /> Cold
        </label>
      </fieldset>
    </ModalWithForm>
  )

}

export default AddItemModal; 