import React, { Component } from 'react';
import axios from 'axios'
import { Route, Link } from "react-router-dom";
import Country from './Country'
import Traveled from './Traveled';
import App from '../App'


class Map extends Component {
    constructor(props) {
        super(props)

    }










    render(props) {

        return (

            <div>


                <header>


                </header>

                <h1> {this.props.continent} </h1>

                {this.props.places.map((place, index) => (
                    <Country
                        place={place}
                        key={index}
                        handleTraveledToggle={this.props.handleTraveledToggle}
                        handleTravelingToggle={this.props.handleTravelingToggle}
                        showInfo={this.props.showInfo}
                        isTraveled={(this.props.traveled.includes(place))}
                    />))}





                <main>

                </main>



            </div>



        )
    }





}




export default Map;





