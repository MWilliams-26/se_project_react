import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({ onCardClick, handleAddClick, clothingItems }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection 
        onCardClick={onCardClick}
        handleAddClick={handleAddClick}
        
         />
      </section>
    </div>
  )
}

export default Profile; 