import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css'
import Header from '../Header/Header';
// import ModalWithForm from '../ModalWithForm/ModalWithForm';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ItemModal from '../ItemModal/ItemModal';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { getWeather, filterWeatherData } from '../../utils/weatherApi';
import { coordinates, APIkey } from '../../utils/constants';
import { CurrentTemperatureUnitContext } from '../../contexts/CurrentTemperatureUnitContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import AddItemModal from '../AddItemModal/AddItemModal';
import Profile from '../Profile/Profile';
import RegisterModal from '../RegisterModal/RegisterModal';
import LoginModal from '../LoginModal/LoginModal';
import EditProfileModal from '../EditProfileModal/EditProfileModal';
import * as auth from '../../utils/auth';
import * as api from '../../utils/api';


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
  console.log(currentUser);

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
    const token = localStorage.getItem("jwt");
    api
      .deleteItem(card._id, token)
      .then(() => {
        const updatedCards = clothingItems.filter((item) => {
          return item._id !== card._id;
        });
        setClothingItems(updatedCards);
        closeActiveModal();
      })
      .catch((err) => console.log(err));
  };

  const handleCardLike = ({ _id, isLiked }) => {
    const token = localStorage.getItem("jwt");

    !isLiked
      ? api
        .addLike(_id, token)
        .then((updatedCard) => {
          console.log(updatedCard);
          setClothingItems((cards) =>
            cards.map((item) => (item._id === _id ? updatedCard.data : item)),
          );
        })
        .catch((err) => console.log(err))
      :
      api
        .removeLike(_id, token)
        .then((updatedCard) => {
          console.log(updatedCard);
          setClothingItems((cards) =>
            cards.map((item) => (item._id === _id ? updatedCard.data : item)),
          );
        })
        .catch((err) => console.log(err));
  }

  const handleAddItemSubmit = (values) => {
    const token = localStorage.getItem("jwt");
    api
      .addNewItem(values.name, values.imageUrl, values.weather, token)
      .then((newItem) => {
        setClothingItems([newItem.data, ...clothingItems]);
        closeActiveModal();
      })
      .catch((err) => console.log(err));
  };

  const handleRegistration = ({ email, password, name, avatar }) => {
    return auth
      .register({ email, password, name, avatar })
      .then(() => {
        handleLogin({ email, password });
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }

    return auth
      .login({ email, password })
      .then((data) => {
        console.log(data);
        localStorage.setItem("jwt", data.token);
        api.getUserInfo(data.token).then((userData) => {
          setCurrentUser(userData);
          setIsLoggedIn(true);
          closeActiveModal();
          navigate("/profile");
        });
      })
      .catch(console.error);
  }

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    navigate("/");
    setIsLoggedIn(false);
  }

  const updateUserProfile = (data) => {
    const token = localStorage.getItem("jwt");
    return auth
      .editProfile(data, token)
      .then((res) => {
        setCurrentUser(res);
        closeActiveModal();
      })
      .catch(console.error);
  };

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
    api
      .getItems()
      .then((data) => {
        console.log(data);
        setClothingItems(data);
      })
      .catch(console.error);
  }, [isLoggedIn]);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      return;
    }

    api
      .getUserInfo(token)
      .then((data) => {
        setIsLoggedIn(true);
        setCurrentUser(data);
        navigate("/profile");
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
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
                      onCardLike={handleCardLike}
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
            addNewClothesItem={handleAddItemSubmit}
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
            handleTextButton={handleLoginClick}
          />
          <LoginModal
            isOpen={activeModal === "login"}
            onClose={closeActiveModal}
            onLogin={handleLogin}
            handleTextButton={handleRegistrationClick}
          />
          <EditProfileModal
            isOpen={activeModal === "edit-profile"}
            onClose={closeActiveModal}
            updateUserProfile={updateUserProfile}
          />
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
