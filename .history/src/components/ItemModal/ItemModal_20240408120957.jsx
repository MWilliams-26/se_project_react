import "./ItemModal.css"
import close from "../../assets/close.svg";

function ItemModal({ isOpen, onClose, card, onDelete }) {
  return (
    <div className={`modal ${isOpen === "preview" && "modal_opened"}`}>
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
            Weather: {card.weather}
          </p>
        </div>
        <button onClick={onDelete}type="button" className="modal__delete-btn">
          Delete item
        </button>
      </div>
    </div>
  )
}

export default ItemModal;