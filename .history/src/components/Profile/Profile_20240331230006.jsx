import SideBar from "../Sidear/SideBar";

function Profile() {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__cloth">User Name</section>
    </div>
  )
}

export default Profile; 