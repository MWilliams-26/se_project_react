import "./ModalWithForm.css"
import close from "../../assets/close.svg";

const ModalWithForm = ({ title, name, buttonText, children, onClose }) => {
  console.log("ModalWithForm");
  return (
    <div className={`modal modal_type_${name}`}>
      <form className="modal__form">
        <h2 className="modal__title">New garment</h2>
        button.
      </form>
    </div>
  )
}


export default ModalWithForm;
