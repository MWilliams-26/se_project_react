import "./ModalWithForm.css"

const ModalWithForm = ({title, name, buttonText, children, onClose}) => {
  console.log("ModalWithForm");
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__container">
        <button className="modal__close"></button>
        <p className="modal__form-title"></p>
        <form action="" className="modal__form"></form>

      </div>
    </div>
  )
}


export default ModalWithForm;