import "./Header.css"
import logo from "../../assets/logo.svg"
import avatar from 

function Header() {
  return (
    <header className="header">
      <img className="header__logo" />
      <p className="header__date-and-location">DATE, LOCATION</p>
      <button className="header__add-clothes-btn">+ Add Clothes</button>
      <div className="header__user-container">
        <p className="header__username">NAME</p>
        <img src="" alt="" className="header__user-avatar" />
      </div>
    </header>
  );
}

export default Header;
