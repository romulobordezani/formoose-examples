import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; 

import logo from './logo.svg';
import './App.css';
import FormooseForm from './components/FormooseForm/FormooseForm';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-disclaimer">
          Who are you?
        </div>
        <FormooseForm />
      </div>
    </I18nextProvider>
  );
}

export default App;
