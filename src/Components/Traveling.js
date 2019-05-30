import React, { Component } from 'react'
import App from '../App'
import { Route, Link } from "react-router-dom";

class Traveling extends Component {
    constructor(props) {
        super(props)
    }

    render(props) {
        return (
            <div>

{this.props.traveling.map((travel, index)=> <h1 key = {index}onClick = { () =>(this.props.showInfo(travel.name))}> {travel.name } </h1> )}
            </div>
        )



    }




}

export default Traveling