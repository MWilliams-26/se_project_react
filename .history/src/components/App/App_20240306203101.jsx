import { useState } from 'react';
import './App.css'
import Header from '../Header/Header';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import Main from '../Main/Main';


function App() {
  const [activeModal, setActiveModal] = useState("");
  const
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
