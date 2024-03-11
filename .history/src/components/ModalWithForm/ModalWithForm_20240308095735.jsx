import "./ModalWithForm.css"
import close from "../../assets/close.svg";

const ModalWithForm = ({ title, name, buttonText, children, onClose }) => {
  console.log("ModalWithForm");
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <h2 className="modal__title">New garment</h2>
        <button type="button" className="modal__close">
          <img src={} alt="" className="modal__close-btn" />
        </button>
        <form className="modal__form">
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
              placeholder="Image Url"
            />
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type:</legend>
            <label
              htmlFor="hot"
              className="modal__label modal__input_label_radio">
              <input id="hot" type="radio" className="modal__radio-input" /> Hot
            </label>
            <label
              htmlFor="warm"
              className="modal__label modal__input_label_radio">
              <input id="warm" type="radio" className="modal__radio-input" /> Warm
            </label>
            <label
              htmlFor="cold"
              className="modal__label modal__input_label_radio">
              <input id="cold" type="radio" className="modal__radio-input" /> Cold
            </label>
          </fieldset>
        </form>
      </div>
    </div>
  )
}


export default ModalWithForm;

{/* <div className="modal__content">
        <button type="button" className="modal__close-btn" onClick={onClose}>
          <img src={close} alt="close" />
        </button>
        <p className="modal__form-title">{title}</p>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit-btn" disabled>{buttonText}</button>
        </form>
      </div> */}