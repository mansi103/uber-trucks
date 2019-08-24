import React from 'react';
import ReactDOM from 'react-dom';
//import NewOrder from './newOrder/newOrder'
//import serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";

//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
import serviceWorker from './serviceWorker';
import LoginPage from './login/loginPage'
//import RegisterForm from './registrationForm/RegisterForm.js';
//import registerServiceWorker from './registerServiceWorker';

//import Yo from './yo'
import CustomerDetail from './customerDetails/customerDetails'
import ServiceProviderDetails from './serviceProvider/serviceProviderDetails'
import EditServiceProviderDetails from './Editserviceprovider/EditProfile'

import EditCustomerDetails from './Editcustomer/editcustomer2'
import NewOrder from './newOrder/newOrder'
import CurrentBidsResult from './currentBidsService/currentBidsService'
//import G from './login/g'
//ReactDOM.render((<Router><LoginPage/></Router>), document.getElementById('root'));

ReactDOM.render((
<Router>
     <LoginPage/>

   {//<Route exact path="/registerationPage" component={RegisterForm}/> 
   //<Route exact path="loginpage" component={LoginPage}/>
}
   <Route exact path="/customerDetails" component={CustomerDetail}/>
   <Route exact path="/serviceProviderDetails" component={ServiceProviderDetails}/>
   <Route exact path="/editCustomerDetails" component={EditCustomerDetails}/>
   <Route exact path="/editServiceProviderDetails" component={EditServiceProviderDetails}/>
   <Route exact path="/currentBidsResult" component={CurrentBidsResult}/>
   <Route exact path="/newOrder" component={NewOrder}/>
</Router>),
     document.getElementById('root'));
          
     /*ReactDOM.render( <NewOrder/>,
         document.getElementById('root'));*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker();
