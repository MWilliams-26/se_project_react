import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({ onCardClick, handleAddClick, onEditProfileModal, onLogout, clothingItems }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar
          onEditProfileModal={onEditProfileModal}
          onLogout={onLogout}
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