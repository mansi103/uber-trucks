import React from 'react';
import './style.css';
import $ from 'jquery';
import { BrowserRouter as Link } from "react-router-dom";
var data=require('./bid.json') ;
var data2=require('./bid2.json') ;

class CurrentBidResult extends React.Component {   
    
  constructor()
  {
    super();
    this.state={
     // data: [],
     data,
     data2,
     show: false
    }
   // this.handleClick = this.handleClick.bind(this);
  
    //this.showTable=this.showTable.bind(this);
  };
 
// componentWillMount() {
//                  fetch('http://jsonplaceholder.typicode.com/posts')
//                  .then(response => response.json())
//                  // and update the state data to said json
//                  .then(data => {this.setState({ data });
//                  console.log(data);});
                 
//              }
 
//$('button').on('click',function(){
  //alert("Details submitted")
           
  
  render() {
    
        
    return (
      <React.Fragment>
      <div class="w3-sidebar">
  <div class="sidebar">
    <ul>
    
  {<li><Link to="editServiceProviderDetails">Edit Profile</Link></li>}
  <br></br>
  
  <li>Open Order</li>
  <br></br>
  <div id="edit1"> <li>Current bids
   </li></div>
   <br></br>
  
</ul>
</div>
</div>

      <table id="bidResultTable">
       <tr>
                    <th>Source</th>
                    <th>Destination</th>
                    <th>Start Date and Time</th>
                    <th>category</th>
                    <th>Load</th>
                    <th>Bidding Amount</th>
                    <th>Result</th>
                </tr>
      <tbody>{this.state.data.map(function(item, key) {
             
              return (
               
                  <tr key = {key}>
                     <td>{item.sourceLocation}</td>
                    <td>{item.destinationLocation}</td>
                    <td>{item.startDateTime}</td>
                    <td>{item.category}</td>
                    <td>{item.load}</td>
                    
                    <td>{item.biddingAmount}</td>
                    <td>{item.result}</td>
                    </tr>
                  
                )
             
             })}</tbody>
       </table>
       <br></br>
       <table id="bidResultTable1">
       <tr>
                    <th>ServiceProviderName</th>
                    <th>BusinessAddress</th>
                    <th>BiddingAmount</th>
                </tr>
                <tbody>{this.state.data2.map(function(item, key) {
             
             return (
              
                 <tr key = {key}>
                    <td>{item.serviceprovidername}</td>
                   <td>{item.businessaddress}</td>
                   <td>{item.BiddingAmount}</td>
                   </tr>
                 
               )
            
            })}</tbody>
             </table>
             <br></br>
             <button type="button" id="ll" onClick={() => alert('Bid selected')}>Select bid!</button>
             </React.Fragment>
    )
  }
  }
  export default CurrentBidResult;