import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
import serviceWorker from './serviceWorker';
//import registerServiceWorker from './registerServiceWorker';
//import RegisterForm from './registrationForm/RegisterFrom.js';
//import LoginPage from './login/loginPage'
import CustomerDetail from './customerDetails/customerDetails'
//import EditCustomerDetails from './customerDetails/editprofilecustomer'
import EditCustomerDetails2 from './customerDetails/editcustomer2'
import ServiceProviderDetails from './serviceProvider/serviceProviderDetails'
import EditProfile2 from './serviceProvider/EditProfile'
import UserList from './customerDetails/jsonfetch1'
//ReactDOM.render(<ServiceProviderDetails />, document.getElementById('root'));
//ReactDOM.render(<EditCustomerDetails2 />, document.getElementById('root'));
ReactDOM.render(<EditProfile2 />, document.getElementById('root'));
//ReactDOM.render(<jsonfetch1 />, document.getElementById('root'));
//ReactDOM.render(<CustomerDetail />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker();
