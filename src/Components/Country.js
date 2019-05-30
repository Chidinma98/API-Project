import React, { Component } from 'react';
import App from '../App'
import Map from './Map'


class Country extends Component {
    constructor(props) {
        super(props)

        
    }


    

    render() {
        return (
            <div className='places'>
                <div className='country'>
                    <h1 onClick={() => (        this.props.handleTraveledToggle(this.props.place))}> T </h1>
                    <h1 onClick = {() => (this.props.handleTravelingToggle(this.props.place))}> W </h1>
                    <p>{this.props.place.name} </p>
                </div>
            </div>
        )
    }
}



export default Country