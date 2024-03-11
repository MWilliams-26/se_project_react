import "./ModalWithForm.css"

const ModalWithForm = ({title, name, buttonText, children, onClose}) => {
  console.log("ModalWithForm");
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button type="button" className="modal__close-btn" onClick={onClose}></button>
        <p className="modal__title">{title}</p>
        <form className="modal__form">
          
        </form>

      </div>
    </div>
  )
}


export default ModalWithForm;