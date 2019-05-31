import React, { Component } from 'react'
import App from '../App'
import { Route, Link } from "react-router-dom";

class Traveled extends Component {
    constructor(props) {
        super(props)
    }

    render(props) {
        return (
            <div className='container'>

                <div className='destination'>
                    {this.props.traveled.map((travel, index) => <h1 key={index} onClick={() => (this.props.showInfo(travel.name))}> {travel.name}</h1>)}
                </div>

                <div className='details'>

                    <h1>{this.props.name}</h1>
                    <h2>Capital: {this.props.capital}</h2>
                    <h2>Currency: {this.props.currency}  ({this.props.symbol}) </h2>
                    <h2>Languages: {this.props.languages}</h2>
                    <h2>Subregion: {this.props.subregion}</h2>
                    <img src={this.props.flag} />

                </div>

            </div>
        )



    }




}

export default Traveled