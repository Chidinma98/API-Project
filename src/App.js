import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Traveled from './Components/Traveled'
import Traveling from './Components/Traveling'
import Options from './Components/Options'
import { Route, Link } from "react-router-dom";
// let countries;


class App extends Component {
  constructor(props) {
    super(props)

    this.showsInput = this.showsInput.bind(this)

    this.state = {
      places: ''


    }


  }


  // componentDidMount() {
  //   axios.get(' https://restcountries.eu/rest/v2/all')
  //     .then(res => {
  //       //  console.log(res.data);
  //     })
  // }




  showsInput = async (event) => {
    event.preventDefault()

    const info = await axios.get(`https://restcountries.eu/rest/v2/region/${this.refs.continent.value}`)
    let countries = info.data

    //  console.log(countries);


    this.setState({
      places: countries
    })
  }




  render() {

    return (
      // console.log(this.state.places)
      <div>
        {console.log(this.state.places)}
        <header>

        </header>
        <form onSubmit={this.showsInput}>
          <input type='text' name='location' placeholder="Choose A Contient" ref='continent' />

          <button type='submit' name='info'>Submit</button>
        </form>
        
          <h1> <Link to = "/options">Options </Link></h1>
        

        <main>

          <Route strict path="/options" render={() => <Options countries={this.state.countries} />



          } />

        </main>

      </div>


    )
  }





}




export default App;





