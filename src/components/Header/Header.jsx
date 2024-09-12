import "./Header.css"
import logo from "../../assets/logo.svg"
import avatar from "../../assets/avatar.svg"
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import { useContext } from "react";


function Header({ handleAddClick, weatherData, handleRegistrationClick, handleLoginClick, isLoggedIn }) {

  const currentDate = new Date().toLocaleString('default',
    {
      month: 'long',
      day: 'numeric'
    });

  const currentUser = useContext(CurrentUserContext);

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      {isLoggedIn ? (
        <>
          <button
            onClick={handleAddClick}
            type="button"
            className="header__add-clothes-btn"
          >
            + Add clothes
          </button>
          <Link to="/profile" className="header__link">
            <div className="header__user-container">
              <p className="header__username">{currentUser?.name}</p>
              {currentUser?.avatar ? (
                <img
                  src={currentUser?.avatar}
                  alt={currentUser?.name}
                  className="header__user-avatar"
                />
              ) : (
                <div className="header__avatar-placeholder">
                  {currentUser?.name?.charAt(0).toUpperCase() || ""}
                </div>
              )}
            </div>
          </Link>
        </>
      ) : (
        <div className="header__auth">
          <button className="header__register-btn" onClick={handleRegistrationClick}>
            Sign Up
          </button>
          <button className="header__login-btn" onClick={handleLoginClick}>
            Log In
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;