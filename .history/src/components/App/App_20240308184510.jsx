import { useState } from 'react';

import './App.css'
import Header from '../Header/Header';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';


function App() {
  // const [activeModal, setActiveModal] = useState("");
  const [weatherData, setWeatherData] = useState({ type: "cold" });
  const [activeModal,]
  return (
    <div className='page'>
      <div className='page__content'>
        <Header />
        <Main weatherData={weatherData} />
        <Footer />
      </div>
      <ModalWithForm title="New garment" buttonText="Add Garment">
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
            <input id="hot" type="radio" className="modal__radio-input" /> Hot
          </label>
          <label
            htmlFor="warm"
            className="modal__label modal__label_type_radio">
            <input id="warm" type="radio" className="modal__radio-input" /> Warm
          </label>
          <label
            htmlFor="cold"
            className="modal__label modal__label_type_radio">
            <input id="cold" type="radio" className="modal__radio-input" /> Cold
          </label>
        </fieldset>
      </ModalWithForm>
    </div>
  );
}

export default App
