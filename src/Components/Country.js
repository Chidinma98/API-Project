import React, { Component } from 'react';
import Map from './Map'


class Country extends Component {
    constructor(props) {
        super(props)


        this.handleClick = this.handleClick.bind(this)
    }


    handleClick() {
        this.props.handleTraveledToggle(this.props.place)
        // console.log('hi')
    }

    render() {
        return (
            <div className='places'>
                <div className='country'>
                    <h1 onClick={this.handleClick}> * </h1>
                    <h1> + </h1>
                    <p>{this.props.place.name} </p>
                </div>
            </div>
        )
    }
}



export default Country