import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

const AddItemModal = ({ onClose, addNewClothesItem, isOpen }) => {
  const { values, handleChange, setValues, resetForm } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

  const resetActiveForm = () => {
    resetForm({
      name: "",
      imageUrl: "",
      weather: "",
    });
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    addNewClothesItem(values, resetActiveForm);
  }


  return (
    <ModalWithForm
      isOpen={isOpen}
      title="New garment"
      buttonText={"Add Garment"}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{""}
        <input
          type="text"
          className="modal__input"
          id="clothing-name"
          name="name"
          placeholder="Name"
          value={values.name}
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
          value={values.imageUrl}
          onChange={handleChange}
          required
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label
          htmlFor="hot"
          className="modal__label modal__label_type_radio">
          <input
            id="hot"
            type="radio"
            className="modal__radio-input"
            name="weather"
            value="hot"
            onChange={handleChange}
            checked={values.weather === "hot"}
          /> Hot
        </label>
        <label
          htmlFor="warm"
          className="modal__label modal__label_type_radio">
          <input
            id="warm"
            type="radio"
            className="modal__radio-input"
            name="weather"
            value="warm"
            onChange={handleChange}
            checked={values.weather === "warm"}
          /> Warm
        </label>
        <label
          htmlFor="cold"
          className="modal__label modal__label_type_radio">
          <input
            id="cold"
            type="radio"
            className="modal__radio-input"
            name="weather"
            value="cold"
            onChange={handleChange}
            checked={values.weather === "cold"}
          /> Cold
        </label>
      </fieldset>
    </ModalWithForm>
  )

}

export default AddItemModal; 