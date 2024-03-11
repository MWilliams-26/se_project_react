import { useState } from 'react';
import './App.css'
import Header from '../Header/Header';
import ModalWithForm from '../ModalWithForm/ModalWithForm';


function App() {
  const [activeModal, setActiveModal] = useState("");
  return (
    <div className='page'>
      <div className='page__content'>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App
