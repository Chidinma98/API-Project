import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
  
  this.showsInput = this.showsInput.bind(this)
  
  }

  componentDidMount() {
    axios.get(' https://restcountries.eu/rest/v2/all')
    .then( res => {
     console.log(res.data);
    })
  }

 showsInput(e){
  e.preventDefault()
   console.log(this.refs.continent.value)
 
 
  }



  render() {
  
    return (
      <div>
      <form onSubmit =  {this.showsInput}>
        <input type = 'text' name = 'location' placeholder = "Choose A Contient" ref='continent' />
        <button type = 'submit' name = 'info'>Submit</button>
      </form>
    
      
      
      
      
      </div>
    
    )
  }





}




export default App;





