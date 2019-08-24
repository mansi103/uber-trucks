import React from 'react';
import './style.css';
import RegisterForm from '../registrationForm/RegisterForm';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router';
import axios from 'axios'
class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
      //redirect: false;
      redirect: false,
      successful: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.submituserLoginPage = this.submituserLoginPage.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submituserLoginPage(e) {
    //this.setState({redirect: true});
    e.preventDefault();
    if (this.validateForm()) {
      console.log(JSON.stringify(this.state.fields))
      /*fetch('https://my-json-server.typicode.com/kumargauravsingh14/demo', 
        {
          method:'POST', 
          body: JSON.stringify(this.state.fields)
        }
      )*/
      /*
      let fields = {};
      fields["emailid"] = "";
      fields["password"] = "";
      
      
      this.setState({fields:fields});
      alert("Form submitted");*/
      //handleSubmit(e) {
      e.preventDefault();
      var apiURL = "http://192.168.43.41:8080/orders/getAllOrders";
      /*var data={
      'email': this.state.email,
      'username': this.state.username,
      'password': this.state.password,
      'name': this.state.name,
      'role': this.state.role
      }*/
      /*axios.get(apiURL,data)
      .then(function (response){
      console.log(response);
      if(response.status === 200)
      {
      alert('there');
      this.setState({redirect : true});
      console.log('success');
      }
      else{
      alert('invalid');
      console.log('invalid');
      }
      }
      ).catch(function(error){
      console.log('eror');
      }
      )*/
      this.setState({ successful: true })
      if (this.state.successful) {
        this.setState({ redirect: true })
      }
      else {
        this.setState({ redirect: false })
      }
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }


    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }



  render() {
    /*
    if(this.state.redirect){
      return <Redirect to="/path" />
    }*/
    return (
      <Router>
        <Route path="/" exact render={() => {
          return (
            <div id="main-login-container">
              <div id="loginPage">
                <h3>Login page</h3>
                <form method="post" name="userLoginPage" onSubmit={this.submituserLoginPage} >

                  <label>Email ID:</label>
                  <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange} />
                  <div className="errorMsg">{this.state.errors.emailid}</div>
                  <label>Password</label>
                  <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                  <div className="errorMsg">{this.state.errors.password}</div>
                  <input type="submit" className="button" value="Login" />
                </form>
                {
                }
                <Link to="/registerationPage">&nbsp;New User? Register.!</Link>
              </div>
            </div>
          );
        }} />
        {<Route exact path="/registerationPage" component={RegisterForm} />
        }
      </Router>
    );
  }


}


export default LoginPage;