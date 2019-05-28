import React, { Component } from 'react';
import Map from './Map'


class Country extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
               <div className = 'country'> <p>{this.props.place.name}</p> </div>
            </div>
        )
    }
}



export default Country