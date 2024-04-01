import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from '../Header/Header';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ItemModal from '../ItemModal/ItemModal';
import { getWeather, filterWeatherData } from '../../utils/weatherApi';
import { coordinates, APIkey } from '../../utils/constants';
import { CurrentTemperatureUnitContext } from '../../contexts/CurrentTemperatureUnitContext';


function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');


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
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  // const handleToggleSwitchChange = () => {
  //   if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C")
  //   if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F")
  // }

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);
  console.log(weatherData.temp);
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
                <Main weatherData={weatherData} handleCardClick={handleCardClick} />
              }
            />
            <Route path="/profile" element={<p>PROFILE</p>} />
          </Routes>
          <Footer />
        </div>
        {activeModal === "create" && (
        <ModalWithForm
          isOpen={activeModal === "add-garment"}
          title="New garment"
          buttonText="Add Garment"
          activeModal={activeModal}
          onClose={closeActiveModal}
        >
          <label htmlFor="name" className="modal__label">
            Name{""}
            <input
              type="text"
              className="modal__input"
              id="name"
              placeholder="Name"
            />
          </label>
          <label htmlFor="imageUrl" className="modal__label">
            Image{""}
            <input
              type="url"
              className="modal__input"
              id="imageUrl"
              placeholder="Image URL"
            />
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type:</legend>
            <label
              htmlFor="hot"
              className="modal__label modal__label_type_radio">
              <input id="hot" type="radio" className="modal__radio-input" name="weather-type" /> Hot
            </label>
            <label
              htmlFor="warm"
              className="modal__label modal__label_type_radio">
              <input id="warm" type="radio" className="modal__radio-input" name="weather-type" /> Warm
            </label>
            <label
              htmlFor="cold"
              className="modal__label modal__label_type_radio">
              <input id="cold" type="radio" className="modal__radio-input" name="weather-type" /> Cold
            </label>
          </fieldset>
        </ModalWithForm>
        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          onClose={closeActiveModal}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App
