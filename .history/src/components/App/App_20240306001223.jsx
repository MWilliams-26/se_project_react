import { useState } from 'react';
import './App.css'
import Header from '../Header/Header';
import ModalWithForm from '../ModalWithForm/ModalWithForm';


function App() {
  
  return (
    <div className='page'>
      <div className='page__content'>
        <Header />
        <ModalWithForm />
      </div>
    </div>
  );
}

export default App
