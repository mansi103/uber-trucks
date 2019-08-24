import React from 'react';
import './style1.css';
import $ from 'jquery';
//var elem = require('./test.json');
//const fs = require('fs')
//let elem = JSON.parse(fs.readFileSync('test.json', 'utf-8'))
//console.log(elem[0].userId + 'jjj ' + elem[0].id+' '+elem[0].title+' '+elem[0].body);
class EditCustomerDetails3 extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {},
        data:[],
      }
      //this.elem=this.state.elem.map(function(item, key);
      this.handleChange = this.handleChange.bind(this);
      this.submitCustomerDetails = this.submitCustomerDetails.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });
      $('.sidebarBtn').click(function(){
        $('.sidebar').toggleClass('active');
        $('.sidebarBtn').toggleClass('toggle');
      });

    }

    submitCustomerDetails(e) {
      e.preventDefault();
      if (this.validateForm()) {
        console.log(JSON.stringify(this.state.fields))
          /*fetch('https://my-json-server.typicode.com/kumargauravsingh14/demo', 
            {
              method:'POST', 
              body: JSON.stringify(this.state.fields)
            }
          )*/
          let fields = {};
          fields["organisationName"] = "";
          fields["ownerName"] = "";
          fields["businessAddress"] = "";
          fields["contactNo"] = "";
          
          this.setState({fields:fields});
          alert("Details submitted");
      }

    }
    componentWillMount() {
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        // and update the state data to said json
        .then(data => {this.setState({ data });
        console.log(data);});
           
        
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
    return (
        this.state.data.map(function(item, key) {
             
            return (
          
    <div id="main-editprofilecustomer3-container">
        <tr key = {key}></tr>
    <div class="w3-sidebar">
  <div class="sidebar">
    <ul>
  <li><a class="active" href="#" class="w3-bar-item w3-button">Link 1</a></li>
  <li><a href="#" class="w3-bar-item w3-button">Link 2</a></li>
  <li><a href="#" class="w3-bar-item w3-button">Link 3</a></li>
</ul></div>
</div>
    
    
     <div id="editprofilecustomer_details3">
    
        <h3>Customer Details</h3>
        <form method="post"  name="CustomerDetails"  >onSubmit= {this.submitCustomerDetails} >
        
        <label>Organisation Name:</label>
        <input type="text" name="organisationName" value={item.id}  />
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
        
        <input type="submit" className="button"  value="savechanges"/>
        </form>
    </div>
</div>)})

      );
  }


}


export default EditCustomerDetails3;