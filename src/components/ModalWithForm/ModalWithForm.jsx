import "./ModalWithForm.css"
import close from "../../assets/close.svg";

const ModalWithForm = ({ title, buttonText, redirectText, handleTextButton, children, onClose, isOpen, onSubmit }) => {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img src={close} alt="close" className="modal__close-btn" />
        </button>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <div className="modal__button_container">
            <button type="submit" className="modal__submit modal__submit">{buttonText}</button>
            <button type="button" className="modal__text-button" onClick={handleTextButton}>{redirectText}</button>
          </div>
        </form>
      </div>
    </div>
  )
}


export default ModalWithForm;
