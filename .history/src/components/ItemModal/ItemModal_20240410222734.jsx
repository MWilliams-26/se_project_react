import "./ItemModal.css"
import close from "../../assets/close.svg";

function ItemModal({ activeModal, onClose, card, onDelete }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button onClick={onClose} type="button" className="modal__close">
          <img src={close} alt="close" className="modal__close-btn" />
        </button>
        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">
            {card.name}
          </h2>
          <p className="modal__weather">
        <button onClick={onDelete} type="button" className="modal__delete-btn">
          Delete item
        </button>
            Weather: {card.weather}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ItemModal;