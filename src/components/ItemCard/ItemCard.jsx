import "./ItemCard.css"
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const isLoggedIn = currentUser._id;

  const isLiked = item.likes.some((id) => id === currentUser._id);

  const itemLikeButtonClassName = `card__like-button ${isLiked ? 'card__like-button_active' : ''}`;
  console.log(isLiked);

  const handleCardClick = () => {
    onCardClick(item);
  }

  const handleCardLike = () => {
    onCardLike({ _id: item._id, isLiked: isLiked });
  }

  return (
    <li className="card">
      <div className="card__header">
        <h2 className="card__name">{item.name}</h2>
        {isLoggedIn && (
          <button className={itemLikeButtonClassName} onClick={handleCardLike} />
        )}
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