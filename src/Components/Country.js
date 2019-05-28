import React, { Component } from 'react';
import Map from './Map'


class Country extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <div className='places'>
                <div className='country'> 
                <h1> * </h1>
                <h1> + </h1>
                <p>{this.props.place.name} </p>
                </div>
            </div>
        )
    }
}



export default Country