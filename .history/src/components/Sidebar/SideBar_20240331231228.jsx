import avatar from "../../assets/avatar.svg";
import "./Side"

function SideBar() {
  return (
    <div className="sidebar">
      <img src={avatar} alt="avatar" className="sidebar__avatar" />
      <p className="sidebar__username">User Name</p>
    </div>
  )
}

export default SideBar; 