import "./ModalWithForm.css"

const ModalWithForm = ({title, name, buttonText, children, onClose}) => {
  console.log("ModalWithForm");
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button typeclassName="modal__close-btn"></button>
        <p className="modal__title">{title}</p>
        <form action="" className="modal__form"></form>

      </div>
    </div>
  )
}


export default ModalWithForm;