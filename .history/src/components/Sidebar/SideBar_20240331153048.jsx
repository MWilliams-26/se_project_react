import avatar from "../../assets/avatar.svg"


function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="avatar" />
      <p className="sidebar__username">User Name</p>
    </div>
  )
}

export default SideBar;