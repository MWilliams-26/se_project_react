import { useState } from 'react';

import './App.css'
import Header from '../Header/Header';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';


function App() {
  // const [activeModal, setActiveModal] = useState("");
  const [weatherData, setWeatherData] = useState({ type: "cold" });
  return (
    <div className='page'>
      <div className='page__content'>
        <Header />
        <Main weatherData={weatherData} />
        <Footer />
      </div>
      <ModalWithForm>
        
      </ModalWithForm>
    </div>
  );
}

export default App
