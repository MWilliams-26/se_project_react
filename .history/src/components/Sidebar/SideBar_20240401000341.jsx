import avatar from "../../assets/avatar.svg";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <img src={avatar} alt="avatar" className="sidebar__avatar" />
      <p className="sidebar__username"></p>
    </div>
  )
}

export default SideBar; 