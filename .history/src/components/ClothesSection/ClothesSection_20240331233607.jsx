import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";

function ClothesSection() {
  return (
    <div className="clothes-section">
      <div className="">
        <p>Your items</p>
        <button>+ Add new</button>
      </div>
      <ul className="cards__list">
        {defaultClothingItems
          .map((item) => {
            return item.weather === weatherData.type;
          })
          .map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                // onCardClick={handleCardClick}
              />
            );
          })
        }
      </ul>
    </div>
  )
}

export default ClothesSection;