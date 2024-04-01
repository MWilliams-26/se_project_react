import SideBar from "../SideBar/SideBar";

function Profile() {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothe">
        <ClothesSection />
      </section>
    </div>
  )
}

export default Profile; 