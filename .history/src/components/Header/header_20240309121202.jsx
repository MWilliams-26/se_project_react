import "./Header.css"
import logo from "../../assets/logo.svg"
import avatar from "../../assets/avatar.svg"

const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });

function Header({ handleAddClick }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} />
      <p className="header__date-and-location">{currentDate}, LOCATION</p>
      <button
      
        className="header__add-clothes-btn">
        + Add Clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="avatar" className="header__user-avatar" />
      </div>
    </header>
  );
}

export default Header;
