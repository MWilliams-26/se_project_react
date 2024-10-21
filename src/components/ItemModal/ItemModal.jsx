import "./ItemModal.css"
import { useEffect } from "react";
// import close from "../../assets/close.svg";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemModal({ isOpen, onClose, card, onDelete }) {
  const currentUser = useContext(CurrentUserContext);

  const handleItemDelete = () => {
    onDelete(card);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleOverlayClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const isOwn = card.owner === currentUser?._id;

  const itemDeleteButtonClassName = `item__delete-button ${isOwn ? 'item__delete-button_visible' : 'item__delete-button_hidden'}`;

  return (
    <div className={`modal ${isOpen && "modal_opened"}`} onClick={handleOverlayClose}>
      <div className="modal__preview">
        <button onClick={onClose} type="button" className="modal__close_button">
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__footer-info">
            <h2 className="modal__caption">
              {card.name}
            </h2>
            <p className="modal__weather">
              Weather: {card.weather}
            </p>
          </div>
          <button
            onClick={handleItemDelete}
            type="button"
            className={itemDeleteButtonClassName}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemModal;