import "./ItemModal.css"

function ItemModal({ activeModal, onClose, card }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button onClick={onClose} type="button" className="modal__close">
          <img src={close} alt="close" className="modal__close-btn" />
        </button>
        <img src={card.link} alt="" className="modal__image" />
        
      </div>
    </div>
  )
}

export default ItemModal;