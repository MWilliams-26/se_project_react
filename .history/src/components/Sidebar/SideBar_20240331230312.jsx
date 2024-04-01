import avatar from "../../assets/avatar.svg";

function SideBar() {
  return (
    <div className="sidebar">
      <img src={avatar} alt="" className="sidebar__avatar" />
      <p className="sidebar__username">User Name</p>
    </div>
  )
}

export default SideBar; 