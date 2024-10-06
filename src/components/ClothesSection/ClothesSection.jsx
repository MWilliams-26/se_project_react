// import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ClothesSection({ onCardClick, handleAddClick, clothingItems }) {
  const currentUser = useContext(CurrentUserContext);

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
        {clothingItems
          .map((item) => {
            if (item.owner === currentUser._id) {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={onCardClick}
                />
              );
            }
          })}
      </ul>
    </div>
  )
}

export default ClothesSection;