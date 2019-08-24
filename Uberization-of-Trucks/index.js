import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
import serviceWorker from './serviceWorker';
//import registerServiceWorker from './registerServiceWorker';
//import RegisterForm from './registrationForm/RegisterFrom.js';
//import LoginPage from './login/loginPage'
//import CustomerDetail from './customerDetails/customerDetails'
import ServiceProviderDetails from './serviceProvider/serviceProviderDetails'
ReactDOM.render(<ServiceProviderDetails />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker();
