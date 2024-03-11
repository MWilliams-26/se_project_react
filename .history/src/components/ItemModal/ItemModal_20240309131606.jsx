import "./ImportModal.css"

function ItemModal({ activeModal, card }) {
  return (
    <div className="modal">
      <div className="modal__content modal__content_type_image">
      <button onClick={onClose} type="button" className="modal__close">
          <img src={close} alt="close" className="modal__close-btn" />
        </button>
      </div>
    </div>
  )
}

export default ItemModal;