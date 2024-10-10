import "./ItemCard.css"
import likeButton from "../../assets/likeButton.svg"
import likeButtonActive from "../../assets/likeButtonActive.svg"
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const isLiked = item.likes.some((id) => id === currentUser._id);

  const itemLikeButtonClassName = `card__like-button ${isLiked ? 'card__like-button_active' : ''}`;

  const handleCardClick = () => {
    onCardClick(item);
  }

  const handleCardLike = () => {
    onCardLike({ _id: item._id, isLiked });
  }

  return (
    <li className="card">
      <div className="card__header">
        <h2 className="card__name">{item.name}</h2>
        <img className={itemLikeButtonClassName} onClick={handleCardLike} src={isLiked ? likeButton : likeButtonActive} />
      </div>
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