import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ onClose, addNewClothesItem, isOpen }) => {
  const [data, setData] = useState({
    name: "",
    imageUrl: "",
    weather: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewClothesItem(data);
  }

  useEffect(() => {
    if (isOpen) {
      setData({
        name: "",
        imageUrl: "",
        weather: "",
      });
    }
  }, [isOpen]);


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
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{""}
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          name="imageUrl"
          placeholder="Image URL"
          value={data.imageUrl}
          onChange={handleChange}
          required
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label
          htmlFor="hot"
          className="modal__label modal__label_type_radio">
          <input id="hot" type="radio" className="modal__radio-input" name="weather" value="hot" onChange={handleChange} /> Hot
        </label>
        <label
          htmlFor="warm"
          className="modal__label modal__label_type_radio">
          <input id="warm" type="radio" className="modal__radio-input" name="weather" value="warm" onChange={handleChange} /> Warm
        </label>
        <label
          htmlFor="cold"
          className="modal__label modal__label_type_radio">
          <input id="cold" type="radio" className="modal__radio-input" name="weather" value="cold" onChange={handleChange} /> Cold
        </label>
      </fieldset>
    </ModalWithForm>
  )

}

export default AddItemModal; 