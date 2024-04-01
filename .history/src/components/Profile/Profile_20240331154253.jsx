import SideBar from "../Sidebar/SideBar";
import "./Profile.css";
function Profile() {
  return (
    <div className="profile">
      <section className="profile__sidebar" >
        <SideBar />
      </section>
      <section className="profile__clothes-section"></section>
    </div>
  );
}

export default Profile;
