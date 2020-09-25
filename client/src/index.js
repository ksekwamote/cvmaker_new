import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter} from 'react-router-dom';
import store from "./store"
import {Provider} from "react-redux"
import ReactGA from "react-ga"

export const initGA = () => {
  ReactGA.initialize('UA-179015070-1')
}

export const GApageView = (page) => {
  ReactGA.pageview(page);
}


ReactDOM.render(
  <BrowserRouter>
  <Provider store ={store}>
      
    <App />
  
    </Provider>
      </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
