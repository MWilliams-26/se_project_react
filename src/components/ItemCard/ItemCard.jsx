import "./ItemCard.css"
import { useContext } from "react";
import {CurrentUserContext}  from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const isLiked = item.likes.some(id => id === currentUser._id);
  
  const cardLikeButtonClassName = (
    `card__like-button ${isLiked && 'card__like-button_active'}`
  );

  const handleCardClick = () => {
    onCardClick(item);
  }

  const handleLike = () => {
    onCardLike(item);
  }

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <button onClick={handleLike} className={cardLikeButtonClassName}>
      </button>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  )
}

export default ItemCard;