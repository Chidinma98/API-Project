import React, { Component } from 'react';
// import './App.css';
import axios from 'axios'
import Options from './Options'
import { Route, Link } from "react-router-dom";
import Country from './Country'
let continent;


class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            places: [],
            traveled: [],
            traveling: []
        }

        this.showsInput = this.showsInput.bind(this)
        this.handleTraveledToggle = this.handleTraveledToggle.bind(this)
    }





    showsInput = async (event) => {
        event.preventDefault()

        const info = await axios.get(`https://restcountries.eu/rest/v2/region/${this.refs.continent.value}`)

        continent = this.refs.continent.value
        this.setState({
            places: info.data,
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

    handleTravelingToggle() {
        let newTravelingArray = [...this.state.traveling]
    }


    render() {

        return (

            <div>

                <header>


                </header>
                <form onSubmit={this.showsInput}>
                    <input type='text' name='location' placeholder="Choose A Contient" ref='continent' />
                    <button type='submit' name='info'>Submit</button>
                </form>
                <h1>{continent}</h1>

                {this.state.places.map((place, index) => { return <Country key={index} place={place} handleTraveledToggle={this.handleTraveledToggle} /> })}




                <main>
                    {/* <Route strict path="/options" render={() => <Options countries={this.state.places}
                    />
                    } /> */}
                </main>



            </div>


        )
    }





}




export default Map;





