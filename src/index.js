import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom'
import All from './Components/Pages/All';
import ContainerChart from './Components/Layout/ContainerChart';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    
      <BrowserRouter>
      <App />
     <ContainerChart/>
     
      </BrowserRouter>
     
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


