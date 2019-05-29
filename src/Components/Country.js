import React, { Component } from 'react';
import App from '../App'
import Map from './Map'


class Country extends Component {
    constructor(props) {
        super(props)

        // this.props.handleTraveledToggle = this.props.handleTraveledToggle.bind(this)
        // this.handleClick = this.handleClick.bind(this)
    }


    // handleClick() {
    //     this.props.handleTraveledToggle(this.props.place.name)

    // }

    render() {
        return (
            <div className='places'>
                <div className='country'>
                    <h1 onClick={() => (        this.props.handleTraveledToggle(this.props.place))}> T </h1>
                    <h1> W </h1>
                    <p>{this.props.place.name} </p>
                </div>
            </div>
        )
    }
}



export default Country