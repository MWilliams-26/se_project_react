import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from '../Header/Header';
// import ModalWithForm from '../ModalWithForm/ModalWithForm';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ItemModal from '../ItemModal/ItemModal';
import { getWeather, filterWeatherData } from '../../utils/weatherApi';
import { coordinates, APIkey } from '../../utils/constants';
import { CurrentTemperatureUnitContext } from '../../contexts/CurrentTemperatureUnitContext';
import AddItemModal from '../AddItemModal/AddItemModal';
import Profile from '../Profile/Profile';
import Api from '../../utils/api';

const api = new Api({
  baseUrl: "http://localhost:3001",
  headers: { "Content-Type": "application/json" },
});


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

  // const onAddItem = (values) => {
  //   console.log(values)
  //   // console.log(e.target);
  // }



  const handleItemDelete = (card) => {
    console.log(card._id);
    api
      .deleteItem(card._id)
      .then(() => {
        setClothingItems((cards) => cards.filter((x) => x._id !== card._id));
        closeActiveModal();
      })
      .catch((res) => {
        console.log(`Error: ${res}`);
      });
  }

  const handleAddItemSubmit = (values) => {
    api
      .addNewItem(values)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        closeActiveModal();
      })
      .catch((err) => console.log(err));
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
        // console.log(data);
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className='page'>
      <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit, handleToggleSwitchChange }} >
        <div className='page__content'>
          <Header
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
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  onCardClick={handleCardClick}
                  clothingItems={clothingItems}
                  handleAddClick={handleAddClick}
                />
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
      </CurrentTemperatureUnitContext.Provider>
    </div >
  );
}

export default App
