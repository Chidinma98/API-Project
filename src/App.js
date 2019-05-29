import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Traveled from './Components/Traveled'
import Traveling from './Components/Traveling'
import Options from './Components/Options'
import { Route, Link } from "react-router-dom";
import Map from './Components/Map'
import Country from './Components/Country'




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      places: [],
      continent: '',
      traveled: [],
      traveling: []

    }

    this.showsInput = this.showsInput.bind(this)
    this.handleTraveledToggle = this.handleTraveledToggle.bind(this)

  }


  showsInput = async (event) => {
    event.preventDefault()

    const info = await axios.get(`https://restcountries.eu/rest/v2/region/${this.refs.continent.value}`)


    this.setState({
      places: info.data,
      continent: this.refs.continent.value,
      traveled: [],
      traveling: []
    })

  }


  handleTraveledToggle(place) {
    let newTraveledArray = [...this.state.traveled]
    newTraveledArray.push(place)
    this.setState({
      traveled: newTraveledArray
    })
console.log('hi')


  }

  render() {

    return (

      <div>

        <header>



          <h2><Link to='/map'> PASSPORT ++ </Link></h2>
          <nav>
            <ul>
              <li><Link to='/traveled'>Traveled</Link></li>
              <li><Link to='/traveling'>Traveling</Link></li>
            </ul>
          </nav>
        </header>
        <form onSubmit={this.showsInput}>
          <input type='text' name='location' placeholder="Choose A Contient" ref='continent' />
          <button type='submit' name='info'>Submit</button>

        </form>



        <main>

          <Route exact path='/map' render={() => <Map continent={this.state.continent} places={this.state.places} 
          handleTraveledToggle={this.handleTraveledToggle}
          />} />

          <Route exact path='/traveled' render={() => <Traveled  traveled = {this.state.traveled}/>} />

          <Route exact path='/traveling' render={() => <Traveling continent={this.state.continent} />} />

          <Route exact path='/country' 
          // render={() =>
            // <Country handleTraveledToggle={this.handleTraveledToggle} />} />

            component= {Country}/>




        </main>

      </div>


    )
  }

}

export default App;





