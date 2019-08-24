import React from 'react';
import './style1.css';
var elem = require('./test.json');
//const fs = require('fs')
//let elem = JSON.parse(fs.readFileSync('test.json', 'utf-8'))
console.log(elem[0].userId + 'jjj ' + elem[0].id+' '+elem[0].title+' '+elem[0].body);
class EditCustomerDetails2 extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {},
        elem,
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
      fields={};
      //let fields = {};
      fields["organisationName"] = "";
      fields["ownerName"] = "";
      fields["businessAddress"] = "";
      fields["contactNo"] = "";
     {/* $('.sidebarBtn').click(function(){
        $('.sidebar').toggleClass('active');
        $('.sidebarBtn').toggleClass('toggle');
      });*/

    }
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
        //  <script>document.getElementById("orgname").contentEditable = true;</script>
          let fields = {};
          fields["organisationName"] = "";
          fields["ownerName"] = "";
          fields["businessAddress"] = "";
          fields["contactNo"] = "";
          
          this.setState({fields:fields});
          alert("Details submitted");
      }

    }

  
    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      /*if (!fields["organisationName"]) {
        formIsValid = false;
       // errors["organisationName"] = "*Please enter your organisation name.";
      }*/
      
      
      /*if (!fields["ownerName"]) {
        formIsValid = false;
        //errors["ownerName"] = "*Please enter owner name.";
      }*/


      
    /*  if (!fields["businessAddress"]) {
        formIsValid = false;
        //errors["businessAddress"] = "*Please enter your businessAddress.";
      }
*/
      
     /* if (!fields["contactNo"]) {
       // formIsValid = false;
        //errors["contactNo"] = "*Please confirm your contact number.";
      }*/
      //if (!fields["contactNo"].match(/^([+]\d{2}[ ])?\d{10}$/)) {
        //formIsValid = false;
        //errors["contactNo"] = "*Please enter correct contact number.";
      //}

      this.setState({
        errors: errors
      });
      return formIsValid;

    }
 


  render() {
    return (
    <div id="main-editprofilecustomer2-container">
    <div class="w3-sidebar">
  <div class="sidebar">
    <ul>
    <div id="edit1">
  <li>EditProfile</li></div>
  <br></br>
  <li><a href="#">New Order</a></li>
  <br></br>
  <li><a href="#" >Current bids
  </a>
   </li>
   <br></br>
  
</ul>
</div>
</div>
    
     <div id="editprofilecustomer_details2">
        <h3>Customer Details</h3>
        <form method="post"  name="CustomerDetails"  onSubmit= {this.submitCustomerDetails} >
        
        <label>Organisation Name:</label>
        <input type="text" id="orgname" contentEditable="true" name="organisationName" value={this.state.elem[0].title} 
        onChange={this.handleChange}  />
         <div className="errorMsg">{this.state.errors.organisationName}</div>
         
      
        <label>Owner Name:</label>
        <input type="text" name="ownerName" value={this.state.elem[0].body} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.ownerName}</div>
        <label>Business Address</label>
        <input type="text" name="businessAddress" defaultValue={this.state.elem[0].id} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.businessAddress}</div>
        
        <label>Contact No:</label>
        <input type="tel" name="contactNo" defaultValue={this.state.elem[0].userId} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.contactNo}</div>

     <script>
     var b = document.querySelector("organisationName");
       b.setAttribute("value", "helloButton");</script>   
        <input type="submit" className="button"  value="submitCustomer"/>
     
        </form>
    </div>
</div>

      );
  }


}


export default EditCustomerDetails2;