import React from 'react';
import $ from 'jquery';
import axios from "axios";
//import axios;
//const $ = window.$;
//<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
export default class UserList extends React.Component {    
  constructor()
  {
    super();
    this.state={
      data: [],
    }
  }

    /*componentDidMount() {
      this.UserList();
    }
   /* UserList(){
      return $.getJSON('http://192.168.43.41:8080/user')
      .then(function(data) {
        return data.results;
      });
    }*/
    //UserList() {
      /*componentDidMount() {
        
        const that = this; fetch('http://192.168.43.41:8080/user') .then(function(response) { 
          return response.json(); }) .then(function(data) { that.setState({person: data}); });}
     /*$.getJSON('http://192.168.43.41:8080/user')
        .then(({ results }) => this.setState({ person: results }));
         }   
      *//*render() {
      const persons = this.state.person.map((item,key) => (
        <div><h1>hello</h1>
          <h1>{ item.userId }</h1>
          <span>{ item.name }, { item.creationDate }</span>
        </div>
      ));
  
      return (
        <div id="layout-content" className="layout-content-wrapper">
          <div className="panel-list">{ persons }</div>
        </div>
      );
    }
  }*/
  /*componentDidMount()
  {
    fetch('http://192.168.43.41:8080/user')
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(responseJson => {
      this.setState({ data: responseJson });
    })}
  //print(person)
*/componentWillMount() {
                 fetch('http://jsonplaceholder.typicode.com/posts')
                 .then(response => response.json())
                 // and update the state data to said json
                 .then(data => {this.setState({ data });
                 console.log(data);});
                 
             }
           
           
           


  render() {
    
        
    return (

      <table><h1>jj</h1>
      <tbody>{this.state.data.map(function(item, key) {
             
              return (
                
                  <tr key = {key}>
                     <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    </tr>
                  
                )
             
             })}</tbody>
       </table>
    )
  }
  }
  