import "./ModalWithForm.css"
import close from "../../assets/close.svg";

const ModalWithForm = ({title, name, buttonText, children, onClose}) => {
  console.log("ModalWithForm");
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button type="button" className="modal__close-btn" onClick={onClose}>
          <img src={close} alt="close" />
        </button>
        <p className="modal__form-title">{title}</p>
        <form className="modal__form">
          {children}
          <button typeclassName="modal__submit-btn" disabled></button>
        </form>

      </div>
    </div>
  )
}


export default ModalWithForm;