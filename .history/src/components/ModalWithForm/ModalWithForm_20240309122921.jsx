import "./ModalWithForm.css"
import close from "../../assets/close.svg";

const ModalWithForm = ({ title, name, buttonText, children, onClose, activeModal }) => {
  console.log("ModalWithForm");
  return (
    <div className={`modal ${activeModal}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button type="button" className="modal__close">
          <img src={close} alt="close" className="modal__close-btn" />{onClose}
        </button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit">{buttonText}</button>
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