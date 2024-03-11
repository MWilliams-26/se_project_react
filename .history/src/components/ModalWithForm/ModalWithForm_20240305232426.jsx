import "./ModalWithForm.css"

const ModalWithForm = ({title, name, buttonText, children, onClose}) => {
  console.log("ModalWithForm");
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__container">
        <button className="modal__close"></button>
        form.

      </div>
    </div>
  )
}


export default ModalWithForm;