import React, { useState } from "react"
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({closeActiveModal, onAddItem, isOpen}) => {

  const [name, setName] = useState("");

  const handleNameChange = () => {
    setName(e);
  }


  return (
    <ModalWithForm
          isOpen={isOpen}
          title="New garment"
          buttonText="Add Garment"
          onClose={closeActiveModal}
          onSubmit={onAddItem}
        >
          <label htmlFor="name" className="modal__label">
            Name{""}
            <input
              type="text"
              className="modal__input"
              id="name"
              placeholder="Name"
              value={name}
            />
          </label>
          <label htmlFor="imageUrl" className="modal__label">
            Image{""}
            <input
              type="url"
              className="modal__input"
              id="imageUrl"
              placeholder="Image URL"
            />
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type:</legend>
            <label
              htmlFor="hot"
              className="modal__label modal__label_type_radio">
              <input id="hot" type="radio" className="modal__radio-input" name="weather-type" /> Hot
            </label>
            <label
              htmlFor="warm"
              className="modal__label modal__label_type_radio">
              <input id="warm" type="radio" className="modal__radio-input" name="weather-type" /> Warm
            </label>
            <label
              htmlFor="cold"
              className="modal__label modal__label_type_radio">
              <input id="cold" type="radio" className="modal__radio-input" name="weather-type" /> Cold
            </label>
          </fieldset>
        </ModalWithForm>
  )

}

export default AddItemModal; 