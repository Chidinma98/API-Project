import React, { Component } from 'react';
import axios from 'axios'
import Options from './Options'
import { Route, Link } from "react-router-dom";
import Country from './Country'
import Traveled from './Traveled';
import App from '../App'


class Map extends Component {
    constructor(props) {
        super(props)
       

       
        // this.handleTraveledToggle = this.handleTraveledToggle.bind(this)
    }





   

    // handleTraveledToggle(place) {
    //     let newTraveledArray = [...this.state.traveled]
    //     newTraveledArray.push(place)
    //     // this.setState({
    //     //     traveled: newTraveledArray
        
        
    //     // })


    // }

    handleTravelingToggle() {
        let newTravelingArray = [...this.state.traveling]
    }


    render(props) {

        return (

            <div>
                 {console.log(this.props.places)}

                <header>


                </header>
               
              <h1> {this.props.continent} </h1> 
                 
              {this.props.places.map((place, index) => (
              <Country 
              place = {place} 
              key = {index}
              handleTraveledToggle={this.props.handleTraveledToggle}
              />))}

                {/* {this.state.places.map((place, index) => { return <Country key={index} place={place} handleTraveledToggle={this.handleTraveledToggle} /> })}
               */}



                <main>
                 
                </main>



            </div>



        )
    }





}




export default Map;





