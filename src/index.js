import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react'
import { store, persistor } from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PersistGate loading={null} persistor={persistor}>
  <Provider store={store}>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </Provider>
  </PersistGate>
);


