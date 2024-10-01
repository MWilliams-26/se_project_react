import "./SideBar.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";


const SideBar = ({ handleProfileEditClick, handleLogout }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
      <div className="sidebar">
        <div className="sidebar__user-info">
          <img
            src={currentUser?.avatar}
            alt={currentUser?.avatar}
            className="sidebar__avatar" />
          <p className="sidebar__username">{currentUser.name}</p>
        </div>
        <div className="sidebar__button-container">
          <button className="sidebar__button" onClick={handleProfileEditClick}>
            Change Profile Data
          </button>
          <button className="sidebar__button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
  );
}

export default SideBar; 