import React, { Component } from 'react'
import App from '../App'
import { Route, Link } from "react-router-dom";

class Traveled extends Component {
    constructor(props) {
        super(props)
    }

    render(props) {
        return (
            <div>


                {this.props.traveled.map((travel, index) => <h1 key={index} onClick = {this.props.showInfo(travel.name)}> {travel.name}</h1>)}


            </div>
        )



    }




}

export default Traveled