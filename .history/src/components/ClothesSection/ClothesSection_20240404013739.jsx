import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

function ClothesSection({ onCardClick }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__text">Your items</p>
        <button className="clothes-section__button">+ Add new</button>
      </div>
      <ul className="clothes-section__items">
        {defaultClothingItems
          .map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={h}
              />
            );
          })
        }
      </ul> 
    </div>
  )
}

export default ClothesSection;