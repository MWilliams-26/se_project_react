import SideBar from "../SideBar/SideBar";

function Profile() {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothes-section">User Name</section>
    </div>
  )
}

export default Profile; 