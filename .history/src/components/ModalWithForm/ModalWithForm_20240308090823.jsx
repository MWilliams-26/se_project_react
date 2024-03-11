import "./ModalWithForm.css"
import close from "../../assets/close.svg";

const ModalWithForm = ({ title, name, buttonText, children, onClose }) => {
  console.log("ModalWithForm");
  return (
    <div className={`modal modal_type_${name}`}>
      <form className="modal__form">
        <h2 className="modal__title">New garment</h2>
        <button type="button" className="modal__close">
          BUTTON
        </button>
        <label htmlFor="name" className="modal__label">

        </label>
      </form>
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