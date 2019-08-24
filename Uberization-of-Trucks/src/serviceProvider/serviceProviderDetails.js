import React from 'react';
import './style.css';
import { Redirect } from 'react-router';

class ServiceProviderDetails extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {},
        redirect: false,
       successful: false,
      }

      this.handleChange = this.handleChange.bind(this);
      this.submitServiceProviderDetails = this.submitServiceProviderDetails.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submitServiceProviderDetails(e) {
      e.preventDefault();
      if (this.validateForm()) {
        console.log(JSON.stringify(this.state.fields))
          /*fetch('https://my-json-server.typicode.com/kumargauravsingh14/demo', 
            {
              method:'POST', 
              body: JSON.stringify(this.state.fields)
            }
          )*/
          /*let fields = {};
          fields["organisationName"] = "";
          fields["ownerName"] = "";
          fields["businessAddress"] = "";
          fields["contactNo"] = "";
          
          this.setState({fields:fields});
          alert("Details submitted");*/
          this.setState({successful:true})
          if(this.state.successful)
          {
            this.setState({redirect:true})
          }
          else
          {
            this.setState({redirect:false})
          }
          
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["organisationName"]) {
        formIsValid = false;
        errors["organisationName"] = "*Please enter your organisation name.";
      }
      
      
      if (!fields["ownerName"]) {
        formIsValid = false;
        errors["ownerName"] = "*Please enter owner name.";
      }


      
      if (!fields["businessAddress"]) {
        formIsValid = false;
        errors["businessAddress"] = "*Please enter your businessAddress.";
      }

      
      if (!fields["contactNo"]) {
        formIsValid = false;
        errors["contactNo"] = "*Please confirm your contact number.";
      }
      if (!fields["contactNo"].match(/^([+]\d{2}[ ])?\d{10}$/)) {
        formIsValid = false;
        errors["contactNo"] = "*Please enter correct contact number.";
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    if(this.state.redirect){
      return <Redirect to={{
        pathname:'/editServiceProviderDetails',
      }}
     />;
    }
    return (
    <div id="main-Serviceproviderdetails-container">
     <div id="service_provider-details">
        <h3>Service Provider Details</h3>
        <form method="post"  name="ServiceProviderDetails"  onSubmit= {this.submitServiceProviderDetails} >
        
        <label>Organisation Name:</label>
        <input type="text" name="organisationName" value={this.state.fields.organisationName} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.organisationName}</div>
        <label>Owner Name:</label>
        <input type="text" name="ownerName" value={this.state.fields.ownerName} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.ownerName}</div>
        <label>Business Address</label>
        <input type="text" name="businessAddress" value={this.state.fields.businessAddress} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.businessAddress}</div>
        <label>Contact No:</label>
        <input type="tel" name="contactNo" value={this.state.fields.contactNo} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.contactNo}</div>
        
        <input type="submit" className="button"  value="Submit"/>
        </form>
    </div>
</div>

      );
  }


}


export default ServiceProviderDetails;