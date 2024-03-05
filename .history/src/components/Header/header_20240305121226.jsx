import "./Header.css"
import logo from "../../assets/logo.svg"
import avatar from "../../assets/avatar.svg"

const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} />
      <p className="header__date-and-location">LOCATION</p>
      <button className="header__add-clothes-btn">+ Add Clothes</button>
      <div className="header__user-container">
        <p className="header__username">NAME</p>
        <img src={avatar} alt="Terrence Tegegne" className="header__user-avatar" />
      </div>
    </header>
  );
}

export default Header;
