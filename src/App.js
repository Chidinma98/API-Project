import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Traveled from './Components/Traveled'
import Traveling from './Components/Traveling'
import { Route, Link } from "react-router-dom";
import Map from './Components/Map'
import Country from './Components/Country'
import './index.css'





class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      places: [],
      continent: '',
      traveled: [],
      traveling: [],
      name: '',
      flag: '',
      currency: '',
      capital: '',
      languages: '',
      subregion: '',
      symbol: ''




    }

    this.showsInput = this.showsInput.bind(this)
    this.handleTraveledToggle = this.handleTraveledToggle.bind(this)
    this.handleTravelingToggle = this.handleTravelingToggle.bind(this)
    this.showInfo = this.showInfo.bind(this)

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



  }


  handleTravelingToggle(place) {
    let newTravelingArray = [...this.state.traveling]
    newTravelingArray.push(place)
    this.setState({
      traveling: newTravelingArray
    })

  }


  showInfo = async (place) => {
    const fact = await axios.get(`https://restcountries.eu/rest/v2/name/${place}?fullText=true`)

    const detail = fact.data[0]


    this.setState({
      name: detail.name,
      flag: '',
      currency: detail.currencies[0].name,
      capital: detail.capital,
      languages: detail.languages[0].name,
      subregion: detail.subregion,
      symbol: detail.currencies[0].symbol,
      flag: detail.flag
    })

  }



  render() {

    return (

      <div>

        <header>



          <h1 className='intro'>PASSPORT ++</h1>

          <nav className="main-nav">
            <ul>
              <li><Link to='/map'> Map </Link></li>
              <li><Link to='/traveled'>Wishlist</Link></li>
              <li><Link to='/traveling'>Traveled</Link></li>
            </ul>
          </nav>

        </header>




        <form onSubmit={this.showsInput}>
          <input type='text' name='location' placeholder="Choose A Contient" ref='continent' />
          <button type='submit' name='info'>Submit</button>

        </form>
        <p className='directions'>Click on Map to Begin</p>



        <main>

          <Route exact path='/map' render={() => <Map continent={this.state.continent} places={this.state.places}
            handleTraveledToggle={this.handleTraveledToggle}
            handleTravelingToggle={this.handleTravelingToggle}
            showInfo={this.showInfo}
            traveled={this.state.traveled}
            traveling={this.state.traveling}

          />} />

          <Route exact path='/traveled' render={() => <Traveled traveled={this.state.traveled} showInfo={this.showInfo}
            name={this.state.name}
            currency={this.state.currency}
            capital={this.state.capital}
            languages={this.state.languages}
            subregion={this.state.subregion}
            symbol={this.state.symbol}
            flag={this.state.flag}



          />} />

          <Route exact path='/traveling' render={() => <Traveling continent={this.state.continent} traveling={this.state.traveling} showInfo={this.showInfo} name={this.state.name}
            name={this.state.name}
            currency={this.state.currency}
            capital={this.state.capital}
            languages={this.state.languages}
            subregion={this.state.subregion}
            symbol={this.state.symbol}
            flag={this.state.flag}






          />} />

          <Route exact path='/country'


            component={Country} />




        </main>

      </div>


    )
  }

}

export default App;





