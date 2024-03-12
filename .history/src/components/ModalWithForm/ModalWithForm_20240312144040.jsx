import "./ModalWithForm.css"
import close from "../../assets/close.svg";

const ModalWithForm = ({ title, buttonText, children, onClose, activeModal, isOpen }) => {
  console.log("ModalWithForm");
  return (
    <div className={`modal ${activeModal === "add-garment" && "modal_opened"}`}>
      {isOpen}
      debug
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img src={close} alt="close" className="modal__close-btn" />
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
