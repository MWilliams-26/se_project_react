import "./Header.css"
import logo from "../../assets/logo.svg"
import avatar from "../../assets/avatar.svg"
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";


function Header({ handleAddClick, weatherData }) {

  const currentDate = new Date().toLocaleString('default',
    {
      month: 'long',
      day: 'numeric'
    });


  return (
    <header className="header">
      <Link>
      <img className="header__logo" src={logo} alt="logo"/>

      
      </Link>
      <p className="header__date-and-location">{currentDate}, {weatherData.city}</p>
        <ToggleSwitch />
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-btn">
        + Add clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="avatar" className="header__user-avatar" />
      </div>
    </header>
  );
}

export default Header;
