import "./ItemModal.css"
import close from "../../assets/close.svg";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemModal({ activeModal, onClose, card, onDelete }) {
  const handleItemDelete = () => {
    onDelete(card);
  };

  const currentUser = useContext(CurrentUserContext);

  const isOwn = selectedCard.owner === currentUser._id;

  const itemDeleteButtonClassName = (
    `item__delete-button ${isOwn ? 'item__delete-button_visible' : 'item__delete-button_hidden'}`
  );


  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__preview">
        <button onClick={onClose} type="button" className="modal__close">
          <img src={close} alt="close" className="modal__close-btn" />
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