import React from 'react';
import './style.css';
import { Redirect } from 'react-router';
import axios from 'axios'
//var data=require('./registerForm.json') 


class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
      redirect: false,
      successful: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {

    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      //console.log(this.state.successful)
      //console.log(JSON.stringify(this.state.fields))
      this.setState({ successful: true })
      /*fetch('http:\\192.168.43.41:8090\customer\reg', 
{
  method:'POST', 
  body: JSON.stringify(this.state.fields)
}
)*/
      /* let fields = {};
       fields["userType"] = "";
       fields["emailid"] = "";
       fields["password"] = "";
       fields["confirmPassword"] = "";
       this.setState.successful=data[successful];
       this.setState({fields:fields});
       this.setState.successful=data[successful];*/
      e.preventDefault();
      var apiURL = "http://192.168.43.41:8080/auth/register";
      /*var data={
      'email': this.state.email,
      'username': this.state.username,
      'password': this.state.password,
      'name': this.state.name,
      'role': this.state.role
      }*/
      axios.post(apiURL, JSON.stringify(this.state.fields), {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(function (response) {
          console.log(response);
          if (response.status === 200) {
            debugger;
            //alert('there');
            console.log(this.state.redirect);
            this.window.href= 'http://localhost:3000/customerDetails';
            return;
           this.setState({ redirect: true });
           
           console.log(this.state.redirect);
            /*if (this.state.fields.accountType === "Customer") {
              return <Redirect to={{
                pathname: '/customerDetails',
              }}
              />;
            }
            if (this.state.fields.accountType === "Service provider") {
              return <Redirect to={{
                pathname: '/serviceProviderDetails',
              }}
              />;*/
              console.log('success');
            }
            else {
              alert('invalid');
              console.log('invalid');
            }
          }
        
        ).catch(function (error) {
          console.log('eror');
        }
        )
      //console.log(this.state.successful)
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

    if (!fields["accountType"]) {
      formIsValid = false;
      errors["accountType"] = "*Please select user type.";
    }

    if (fields["accountType"] === "Choose user") {
      formIsValid = false;
      errors["accountType"] = "*Please select user type.";
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email-ID.";
    }

    if (typeof fields["email"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email-ID.";
      }
    }


    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }
    if (!fields["confirmPassword"]) {
      formIsValid = false;
      errors["confirmPassword"] = "*Please confirm your password.";
    }
    if (fields["confirmPassword"] !== fields["password"]) {
      formIsValid = false;
      errors["confirmPassword"] = "*Please confirm your password.";
    }

    this.setState({
      errors: errors
    });
    return formIsValid;


  }



  render() {
    //console.log(this.state.redirect)
    debugger;
    if(this.state.redirect){
      if(this.state.fields.accountType==="Customer")
      {
        return <Redirect to={{
          pathname:'/customerDetails',
        }}
       />;
      }
      if(this.state.fields.accountType==="Service provider")
      {
        return <Redirect to={{
          pathname:'/serviceProviderDetails',
        }}
       />;
      }}
      //console.log(this.state.redirect)
      //if(this.state.fields.userType==="Customer")
    //{console.log(this.state.fields.userType)
    /*  return <Redirect to={{
        pathname:'/customerDetails',
      }}
     />;*/
  

  return(
      
    <div id = "main-registration-container" >
      <div id="register">
        <h3>Registration page</h3>
        <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >

          <label>User Type:</label>
          <select name="accountType" value={this.state.fields.accountType} onChange={this.handleChange}>
            <option value="Choose user">Choose user</option>
            <option value="Customer">Customer</option>
            <option value="Service provider">Service provider</option>
          </select>

          <div className="errorMsg">{this.state.errors.accountType}</div>


          <label>Email ID:</label>
          <input type="text" name="email" value={this.state.fields.email} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.errors.email}</div>
          <label>Password</label>
          <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.errors.password}</div>
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={this.state.fields.confirmPassword} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.errors.confirmPassword}</div>
          <input type="submit" className="button" value="Register" />
        </form>
      </div>
</div>

      );
  }


  }


export default RegisterForm;