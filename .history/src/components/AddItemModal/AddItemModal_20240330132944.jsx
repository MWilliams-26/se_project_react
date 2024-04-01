import React from "react"

const AddItemModal = ({onClose,}) => {



  return (
    <ModalWithForm
          isOpen={activeModal === "add-garment"}
          title="New garment"
          buttonText="Add Garment"
          activeModal={activeModal}
          onClose={closeActiveModal}
        >
          <label htmlFor="name" className="modal__label">
            Name{""}
            <input
              type="text"
              className="modal__input"
              id="name"
              placeholder="Name"
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