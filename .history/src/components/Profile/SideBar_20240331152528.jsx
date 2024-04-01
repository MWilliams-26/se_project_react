import avatar from "../../assets/avatar.svg"


function SideBar() {
  return (
    <div className="sidebar">
      <img src={avatar} alt="avatar" />
      <p className="sidebar__username"></p>
    </div>
  )
}

export default SideBar;