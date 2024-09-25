import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css'
import Header from '../Header/Header';
// import ModalWithForm from '../ModalWithForm/ModalWithForm';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ItemModal from '../ItemModal/ItemModal';
import ProtectedRoute from '../../ProtectedRoute/ProtectedRoute';
import { getWeather, filterWeatherData } from '../../utils/weatherApi';
import { coordinates, APIkey } from '../../utils/constants';
import { CurrentTemperatureUnitContext } from '../../contexts/CurrentTemperatureUnitContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import AddItemModal from '../AddItemModal/AddItemModal';
import Profile from '../Profile/Profile';
import { getItems, addNewItem, deleteItem, updateCurrentUser, addLike, removeLike } from '../../utils/api';
import { register, login, checkToken } from '../../utils/auth';
import RegisterModal from '../RegisterModal/RegisterModal';
import LoginModal from '../LoginModal/LoginModal';
import EditProfileModal from '../EditProfileModal/EditProfileModal';

// const api = new Api({
//   baseUrl: "http://localhost:3001",
//   headers: { "Content-Type": "application/json" },
// });


function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    avatar: "",
    email: "",
    _id: "",
  });

  const navigate = useNavigate();

  const handleRegistrationClick = () => {
    setActiveModal("signup");
  }

  const handleLoginClick = () => {
    setActiveModal("login");
  }

  const handleProfileEditClick = () => {
    setActiveModal("edit-profile");
  }

  const handleAddClick = () => {
    setActiveModal("add-garment");
  }

  const closeActiveModal = () => {
    setActiveModal("");
  }

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card)
  }

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleItemDelete = (card) => {
    console.log(card._id);
    deleteItem(card._id)
      .then(() => {
        setClothingItems((cards) => cards.filter((x) => x._id !== card._id));
        closeActiveModal();
      })
      .catch((res) => {
        console.log(`Error: ${res}`);
      });
  };

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    !isLiked
      ? addLike(id, token)
        .then((updatedCard) => {
          setClothingItems((cards) => cards.map((card) =>
            card._id === updatedCard._id ? updatedCard : card))
        })
        .catch((err) => console.log(err))
      :
      removeLike(id, token)
        .then((updatedCard) => {
          setClothingItems((cards) => cards.map((card) =>
            card._id === updatedCard._id ? updatedCard : card))
        })
        .catch((err) => console.log(err));
  }

  const handleAddItemSubmit = (values) => {
    addNewItem(values)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        closeActiveModal();
      })
      .catch((err) => console.log(err));
  };

  const handleRegistration = ({ email, password, name, avatar }) => {
    register({ email, password, name, avatar })
      .then(() => {
        handleLogin({ email, password });
        closeActiveModal();
      })
      .catch((err) => console.log("Registration failed:", err));
  }

  const handleLogin = ({ email, password }) => {
    login({ email, password })
      .then((res) => {
        setIsLoggedIn(true);
        localStorage.setItem("jwt", res.token);
        navigate("/profile");
        closeActiveModal();
      })
      .catch((err) => console.log(err));
  }

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    navigate("/login");
  }

  const handleProfileEdit = ({ name, avatar, token }) => {
    updateCurrentUser({ name, avatar, token })
      .then((res) => {
        setCurrentUser(res);
        closeActiveModal();
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);
  console.log(weatherData.temp);

  useEffect(() => {
    getItems()
      .then(({ data }) => {
        // console.log(data);
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      checkToken(localStorage.getItem("jwt"))
        .then((res) => {
          setCurrentUser(res);
          setIsLoggedIn(true);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit, handleToggleSwitchChange }} >
          <div className='page__content'>
            <Header
              isLoggedIn={isLoggedIn}
              handleRegistrationClick={handleRegistrationClick}
              handleLoginClick={handleLoginClick}
              handleAddClick={handleAddClick}
              weatherData={weatherData}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    onCardLike={handleCardLike}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      onCardClick={handleCardClick}
                      clothingItems={clothingItems}
                      handleAddClick={handleAddClick}
                      handleProfileEditClick={handleProfileEditClick}
                      handleLogout={handleLogout}
                      setIsLoggedIn={setIsLoggedIn}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />
          </div>

          <AddItemModal
            isOpen={activeModal === "add-garment"}
            onClose={closeActiveModal}
            onAddItem={handleAddItemSubmit}
          />
          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            onClose={closeActiveModal}
            onDelete={handleItemDelete}
          />
          <RegisterModal
            isOpen={activeModal === "signup"}
            onClose={closeActiveModal}
            handleRegistration={handleRegistration}
            handleLoginClick={handleLoginClick}
          />
          <LoginModal
            isOpen={activeModal === "login"}
            onClose={closeActiveModal}
            onLogin={handleLogin}
          />
          <EditProfileModal
            isOpen={activeModal === "edit-profile"}
            onClose={closeActiveModal}
            handleProfileEdit={handleProfileEdit}
          />
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
