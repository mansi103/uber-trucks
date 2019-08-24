import React from 'react';
import './style.css';
var data=require('./resultBids.json') 
class CurrentBidResult extends React.Component {   
    
  constructor()
  {
    super();
    this.state={
     // data: [],
     data
    }
  }

// componentWillMount() {
//                  fetch('http://jsonplaceholder.typicode.com/posts')
//                  .then(response => response.json())
//                  // and update the state data to said json
//                  .then(data => {this.setState({ data });
//                  console.log(data);});
                 
//              }
           
           
           


  render() {
    
        
    return (

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
    )
  }
  }
  export default CurrentBidResult;