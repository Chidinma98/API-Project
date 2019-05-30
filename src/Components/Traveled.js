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

                <div className='destination'>
                    {this.props.traveled.map((travel, index) => <h1 key={index} onClick={() => (this.props.showInfo(travel.name))}> {travel.name}</h1>)}
                </div>

                <div className='details'>
                    <h1>FACTS</h1>
                    <h2>{this.props.name}</h2>
                </div>

            </div>
        )



    }




}

export default Traveled