import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({ onCardClick, handleAddClick, handleProfileEditClick, handleLogout, clothingItems }) {
  
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar
          handleProfileEditClick={handleProfileEditClick}
          handleLogout={handleLogout}
        />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          onCardClick={onCardClick}
          handleAddClick={handleAddClick}
          clothingItems={clothingItems}
        />
      </section>
    </div>
  )
}

export default Profile; 