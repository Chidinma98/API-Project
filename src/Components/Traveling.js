import React, { Component } from 'react'
import App from '../App'
import { Route, Link } from "react-router-dom";

class Traveling extends Component {
    constructor(props) {
        super(props)
    }

    render(props) {
        return (
            <div className = 'container'>
<div className = 'destination'>
{this.props.traveling.map((travel, index)=> <h1 key = {index}onClick = { () =>(this.props.showInfo(travel.name))}> {travel.name } </h1> )}
    </div>        
    <div className='details'>
                    <h1>FACTS</h1>
                    <h2>Country: {this.props.name}</h2>
                    <h2>Capital: {this.props.capital}</h2>
                    <h2>Currency: {this.props.currency}  ({this.props.symbol}) </h2>
                    <h2>Languages: {this.props.languages}</h2>
                    <h2>Subregion: {this.props. subregion}</h2>
                    <img src = {this.props.flag}/>
                    

                </div>
            
            
            
            </div>
        )



    }




}

export default Traveling