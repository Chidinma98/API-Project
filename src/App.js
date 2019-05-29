import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Traveled from './Components/Traveled'
import Traveling from './Components/Traveling'
import Options from './Components/Options'
import { Route, Link } from "react-router-dom";
import Map from './Components/Map'




class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      travelData: []
    }

    this.updateState = this.updateState.bind(this)

  }


  updateState(data) {

    const places = data

    this.setState({
      travelData: places
    })
    console.log(places)
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


        {/* component={Map} */}
        <main>
          <Route exact path='/map' render={() => <Map updateState={this.updateState} />} />
          <Route exact path='/traveled' render = {() => <Traveled travelData = {this.state.travelData}/>}

          />
          <Route exact path='/traveling' component={Traveling} />
        </main>

      </div>


    )
  }

}

export default App;





