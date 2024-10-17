// import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ClothesSection({ onCardClick, handleAddClick, clothingItems, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  console.log(clothingItems)
  const userItems = clothingItems.filter((item) => item.owner === currentUser._id);
  console.log(userItems);

  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__text">Your items</p>
        <button
          onClick={handleAddClick}
          type="button"
          className="clothes-section__button" >
          + Add new
        </button>
      </div>
      <ul className="clothes-section__items">
        {userItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
            />
          );
        })}
      </ul>
    </div>
  )
}

export default ClothesSection;