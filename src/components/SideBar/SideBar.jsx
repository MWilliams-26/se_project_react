import avatar from "../../assets/avatar.svg";
import "./SideBar.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SideBar = ({ onEditProfileModal, onLogout }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <div className="sidebar__user-info">
        <img src={currentUser.avatar || avatar} alt="avatar" className="sidebar__avatar" />
        <p className="sidebar__username">{currentUser.name}</p>
      </div>
      <div className="sidebar__button-container">
        <button className="sidebar__button" onClick={onEditProfileModal}>
          Change Profile Data
        </button>
        <button className="sidebar__button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default SideBar; 