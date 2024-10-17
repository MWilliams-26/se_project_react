import "./DeleteConfirmationModal.css";

const DeleteConfirmationModal = ({ isOpen, onClose, onDelete }) => {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">Are you sure you want to delete this item?</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img src={close} alt="close" className="modal__close-btn" />
        </button>
        <div className="modal__button_container">
          <button
            type="button"
            className="modal__submit"
            onClick={onDelete}>
            Yes, delete item
          </button>
          <button
            type="button"
            className="modal__text-button"
            onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirmationModal;