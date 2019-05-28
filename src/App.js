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



        <main>
          <Route exact path='/map' component={Map} />
          <Route exact path='/traveled' component={Traveled} />
          <Route exact path='/traveling' component={Traveling} />
        </main>

      </div>


    )
  }

}

export default App;





